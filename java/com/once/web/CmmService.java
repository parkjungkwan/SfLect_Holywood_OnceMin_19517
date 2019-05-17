package com.once.web;

import java.util.HashMap;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.once.web.CmmMapper;

@Service
public class CmmService {
	@Autowired CmmMapper mapper;
	@Autowired HashMap<String,Object> map;
    
    public void openAnAccount(HashMap<?, ?> paramMap) {
        mapper.insertAccount(paramMap);
    }
    @SuppressWarnings("unchecked")
	public HashMap<?,?> selectAccountInfo(String userid){
    	IFunction f = (Object o) -> mapper.selectAccount(userid);
    	return (HashMap<String, Object>) f.apply(userid);
    } 

    //=================cm====================
    public void registCustomer(HashMap<?,?> paramMap) {
        mapper.insertCustomer(paramMap);
    }
    public HashMap<?,?> retrieveCustomer(String id) {
        return mapper.selectCustomer(id);
    }
    public boolean existsCustomerID(HashMap<?,?> paramMap) {
        return mapper.existsCustomerID(paramMap);
    }
    public HashMap<?,?> searchCoin(HashMap<?, ?> paramMap) {
        return mapper.selectCoin(paramMap);
    }
    public void updateCust(HashMap<?, ?> paramMap) {
        mapper.updateCust(paramMap);
    }   
    //=================cusemap================
    public List<HashMap<?, ?>> selectCustServiceList(Proxy pxy) {
        return mapper.selectCustServiceList(pxy);
    }
    public List<HashMap<?, ?>> selectSearchCustServiceList(Proxy pxy) {
        return mapper.selectSearchCustServiceList(pxy);
    }
    public HashMap<?, ?> selectCustService(HashMap<?, ?> cuse) {
        return mapper.selectCustService(cuse);
    }
    public int countCustServices() {
        return mapper.countCustServices();
    }
    public int searchCountCustServices(String search) {
        return mapper.searchCountCustServices(search);
    }
    public void updateViews(HashMap<?, ?> cuse) {
        mapper.updateViews(cuse);
    }
    //==============omapper==============
    public void insertOnceCount(HashMap<?,?> paramMap) {
        mapper.insertOnceCount(paramMap);
    }
    public HashMap<?, ?> selectOnceCount() {
        return mapper.selectOnceCount();
    }
    public List<HashMap<?,?>> selectprice() {
        return mapper.selectprice();
    }
    public List<HashMap<?,?>> selectAllList() {
        return mapper.selectAllList();
    }
    //============tran===========
    public List<HashMap<?,?>> retrieveAllTransactions(String id) {
        return mapper.selectTxByUserid(id);
    }
    public List<HashMap<?,?>> retrieveAllTrx() {
        return mapper.selectTx();
    }
   

}
