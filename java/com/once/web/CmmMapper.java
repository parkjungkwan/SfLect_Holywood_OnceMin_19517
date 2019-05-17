package com.once.web;

import java.util.HashMap;
import java.util.List;
import org.springframework.stereotype.Repository;

@Repository
public interface CmmMapper {
	// Account
	public void insertAccount(HashMap<?, ?> paramMap);
	public HashMap<?, ?> selectAccount(String userid);
	public void updateBuyAccount(HashMap<?, ?> paramMap);

	// Chat
	public HashMap<?, ?> selectCoinArticle(HashMap<?, ?> paramMap);

	// Close Price
	public List<HashMap<?, ?>> selectClosePrices(HashMap<?, ?> paramMap);

	// Customers
	public void insertCustomer(HashMap<?, ?> paramMap);
	public HashMap<?, ?> selectCustomer(String id);
	public HashMap<?, ?> selectCoin(HashMap<?, ?> paramMap);
	public boolean existsCustomerID(HashMap<?, ?> paramMap);
	public void updateCust(HashMap<?, ?> paramMap);

	// Notice
	public List<HashMap<?, ?>> selectCustServiceList(Proxy pxy);
	public List<HashMap<?, ?>> selectSearchCustServiceList(Proxy pxy);
	public HashMap<?, ?> selectCustService(HashMap<?, ?> paramMap);
	public int countCustServices();
	public int searchCountCustServices(String searchWord);
	public void updateViews(HashMap<?, ?> paramMap);

	// History
	public HashMap<String, Object> selectOnceCount();
	public List<HashMap<?, ?>> selectAllList();
	public List<HashMap<?, ?>> selectprice();
	public void insertOnceCount(HashMap<?, ?> paramMap);

	// TX
	public void insertTx(HashMap<?, ?> paramMap);
	public List<HashMap<?, ?>> selectTxByUserid(String userid);
	public List<HashMap<?, ?>> selectTx();
}
