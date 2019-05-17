package com.once.web;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@Service
public class TxService {
	@Autowired CmmMapper mapper;
	@Autowired HashMap<String,Object> map;
	@Autowired Proxy pxy;
	
	@SuppressWarnings("unchecked")
	public HashMap<?,?> chargeMoney(String userid, String money) {
		Date today = new Date();
        DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        IFunction f = (Object o) -> mapper.selectAccount(userid);         
		HashMap<String,Object> ls = (HashMap<String,Object>)f.apply(userid);
		
        int bMoney = Integer.parseInt((String)ls.get("money"));
        int tMoney =  bMoney + Integer.parseInt(money);
        String fMoney = String.valueOf(tMoney);
        String date = String.valueOf(dateFormat.format(today));
        map.put("id", userid);
        map.put("bm", fMoney);
        map.put("unit", "0");
        map.put("nprice","0");
        map.put("date",date);
        map.put("tprice","0");
        map.put("dmoney",money);
        IConsumer ii = (Object o) -> mapper.updateBuyAccount(map);
        ii.accept(map);
        map.put("rw","입금");
        IConsumer i = (Object o) ->  mapper.insertTx(map);
        i.accept(map);
        map.clear();
        map.put("r", "결제성공");
        return map;
	}
	
	public boolean login(HashMap<?,?> paramMap) {
		IPredicate p = (Object o) -> mapper.existsCustomerID(paramMap); 
		if(p.test(paramMap.get("userid"))) {
			IConsumer c = (Object o) -> mapper.insertCustomer(paramMap); 
			c.accept(paramMap);
		}
		return p.test(paramMap.get("userid"));
	}

	public HashMap<?,?> openAccount(String userid) {
		String account = "";
		for(int i=0; i<13; i++) {
			
			account += (int)(Math.random()*10);
		}
		map.put("userid", userid);
		map.put("money", "0");
		map.put("acnum", account);
		IConsumer c = (Object o) -> mapper.insertAccount(map);
		c.accept(map);
		IFunction f = (Object o) -> mapper.selectAccount(userid);
		return  (HashMap<?,?>) f.apply(userid);
	}

	public List<?> notice(String npage) {
		List<HashMap<?,?>> list = new ArrayList<>();
        list.clear();
        map.put("page_num", npage);
        map.put("page_size", "10");
        map.put("block_size", "5");
        ISupplier sup  =()->mapper.countCustServices();
        map.put("rowCount", sup.get());
        pxy.carryOut(map);
        IFunction i = (Object o) ->  mapper.selectCustServiceList(pxy);
		return (List<?>) i.apply(pxy);
	}

	public HashMap<?, ?> noticeDetail(String seq) {
   	    map.put("customerActionSeq",seq);
	   	IConsumer c = (Object o)-> mapper.updateViews(map);
	   	c.accept(map);
	   	IFunction f = (Object o) -> mapper.selectCustService(map);
	   	return (HashMap<?,?>) f.apply(map);
	}

	public List<?> searchNotice(HashMap<String, Object> map2) {
		String search = (String)map.get("search");
    	String srh = "%"+search+"%";
    	ISupplier f =  () -> mapper.searchCountCustServices(srh);
 		map.put("page_num", (String)map.get("page"));
 		map.put("page_size", "10");
 		map.put("block_size", "5");
 		map.put("rowCount", f.get());
 		map.put("search", srh);
 		pxy.carryOut(map);
		IFunction i = (Object o) -> mapper.selectSearchCustServiceList(pxy);
		List<?> ls = (List<?>) i.apply(pxy);
		return ls;
	}
}
