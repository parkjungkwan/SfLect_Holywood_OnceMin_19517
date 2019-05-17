package com.once.web;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.Random;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.once.web.Proxy.CoinArticle;

@RestController
public class CmmController {
	@Autowired HttpSession session;
	@Autowired HttpServletRequest request;
	@Autowired HashMap<String, Object> map;
	@Autowired CmmService cmmService;
	@Autowired Proxy pxy;
	@Autowired CmmMapper mapper;
	@Autowired TxService txService;

	@PostMapping("/payment/{userid}")
	public HashMap<?, ?> chargeMoney(@RequestBody String money, @PathVariable String userid) {
		return txService.chargeMoney(userid, money);
	}

	@PostMapping("/login")
	public boolean login(@RequestBody HashMap<String, Object> paramMap) {
		return txService.login(paramMap);
	}

	@PostMapping("/retrieve_acc/{id}")
	public HashMap<?,?> selectAccountInfo(@PathVariable String userid) {
		return selectAccountInfo(userid);
	}

	@PostMapping("/open_acc/{userid}")
	public HashMap<?,?> openAccount(@PathVariable String userid) {
		return txService.openAccount(userid);
	}

	@PostMapping("/retrieve_cust/{id}")
	public HashMap<?,?> selectCustomer(@PathVariable String id) {
		IFunction f = (Object o) -> cmmService.retrieveCustomer(id);
		return (HashMap<?,?>) f.apply(id);
	}

	@SuppressWarnings("unchecked")
	@GetMapping("/retrieve_trx/{id}")
	public HashMap<?,?> selectTransactions(@PathVariable String id) {
		IFunction f = (Object o) -> cmmService.retrieveAllTransactions(id);
		List<HashMap<?, ?>> l = (List<HashMap<?, ?>>) f.apply(id);
		map.clear();
		map.put("ls", l);
		return map;
	}

	@SuppressWarnings("unchecked")
	@GetMapping("/retrieve_all_trx")
	public HashMap<?,?> selectAlltrx() {
		ISupplier s = () -> cmmService.retrieveAllTrx();
		List<HashMap<?, ?>> l = (List<HashMap<?, ?>>) s.get();
		map.clear();
		map.put("ls", l);
		return map;
	}

	@GetMapping("/crawler/naver/{page}")
	public HashMap<String, Object> crawler(@PathVariable int page) throws Exception {
		if (page != 1) {
			page = (page - 1) * 10 + 1;
		}
		pxy.word(page);
		String url = "https://search.naver.com/search.naver?&where=news&query=%EB%B9%84%ED%8A%B8%EC%BD%94%EC%9D%B8%20%EC%8B%9C%EC%84%B8&sm=tab_pge&sort=0&photo=0&field=0&reporter_article=&pd=0&ds=&de=&docid=&nso=so:r,p:all,a:all&mynews=0&cluster_rank=10&start="
				+ page + "&refresh_start=0";
		Document doc = Jsoup.connect(url).get();
		Elements elements = doc.select("ul.type01 li dl  dt a");
		Elements elements2 = doc.select("dd.txt_inline");
		String text = elements2.attr("text");
		Elements times = doc.select("dd.txt_inline");
		String time = times.text();

		List<CoinArticle> list = new ArrayList<CoinArticle>();
		list.clear();
		int i = 0;
		map.clear();
		for (Element element : elements) {
			CoinArticle coin = new CoinArticle();

			String seq = String.valueOf(i + 1);
			coin.setNseq(seq);
			String nextUrl = element.attr("href");
			coin.setUrl(nextUrl);
			String nextTitle = element.attr("title");
			coin.setTitle(nextTitle);

			String splitUp = time.split(" 보내기 ")[i];
			int text1 = splitUp.indexOf(" ");
			String frontDel = splitUp.substring(text1 + 1);

			int text2 = frontDel.indexOf("전");
			String timeRes = frontDel.substring(0, text2 + 1);
			coin.setAdate(timeRes);
			map.clear();
			list.add(coin);
			i++;

		}
		map.put("ls", list);
		return map;
	}

	@GetMapping("/crawler/youtube")
	public List<CoinArticle> youcrawler() throws Exception {
		return pxy.youtube();
	};

	@GetMapping("/notice/{npage}")
	public HashMap<String, Object> notice(@PathVariable String npage) {

		List<?> ls = txService.notice(npage);
		map.clear();
		map.put("ls", ls);
		map.put("pxy", pxy);
		return map;
	}

	@GetMapping("/detail/{seq}")
	public HashMap<?, ?> noticeDetail(@PathVariable String seq) {
		return txService.noticeDetail(seq);
	}

	@GetMapping("/search/{search}/{page}")
	public HashMap<String, Object> searchNotice(@PathVariable String search, @PathVariable String page) {

		List<?> ls = txService.searchNotice(map);
		map.clear();
		map.put("ls", ls);
		map.put("pxy", pxy);
		return map;
	};

	@SuppressWarnings("unchecked")
	@PostMapping("/chat/{text}")
	public HashMap<String, Object> chat(@PathVariable String text) {

		Random random = new Random();

		IFunction f = null;
		switch (text) {
		case "안녕하세요":
		case "안녕":
		case "하이":
		case "ㅎㅇ":
		case "하이루":
		case "방가방가":
			map.clear();
			int seq = random.nextInt(6) + 1;
			map.put("chatSeq", String.valueOf(seq));
			f = (Object o) -> mapper.selectCoinArticle(map);
			map.put("ch", (HashMap<String, Object>) f.apply(map));
			break;
		case "4월 종가":
		case "5월 종가":
			map.clear();
			String txt = String.valueOf(text.charAt(0));
			map.put("cpnum", txt);
			f = (Object o) -> mapper.selectClosePrices(map);
			List<?> ls = (List<?>) f.apply(map);
			map.put("ls", ls);
			break;
		default:
			map.clear();
			seq = random.nextInt(10 - 7 + 1) + 7;
			map.put("chatSeq", String.valueOf(seq));
			f = (Object o) -> mapper.selectCoinArticle(map);
			map.put("ch", (HashMap<String, Object>) f.apply(map));
			break;
		}
		return map;
	}

	// ------------------------------------------남기호-------------------------------
	@RequestMapping("/ngh")
	public String nghMain(Locale locale, Model model) {
		return "ngh";
	}

	@SuppressWarnings("unchecked")
	@RequestMapping("/ngh/once")
	public HashMap<String, Object> once() {
		map.clear();

		Date today = new Date();
		DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		map.clear();
		ISupplier i = () -> cmmService.selectOnceCount();
		Map<String, Object> ls = (Map<String, Object>) i.get();
		List<HashMap<?, ?>> list = new ArrayList<HashMap<?, ?>>();
		String price = (String) Integer.toString(((int) ls.get("price")));
		map.put("price", price);
		Date dtNormal = GetNormalTime(today);
		map.put("date", dtNormal);
		list.add(map);
		map.put("ls", list);

		return map;
	}

	@RequestMapping("/ngh/once/price")
	public HashMap<String, Object> onceprice() {
		map.clear();
		ISupplier i = () -> cmmService.selectprice();
		List<?> ls = (List<?>) i.get();
		Date today = new Date();
		DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		map.put("date", dateFormat.format(today));
		map.put("ls", ls);
		return map;
	}

	@SuppressWarnings("unchecked")
	@RequestMapping("/ngh/once/oncechart")
	public HashMap<String, Object> oncechart() {
		map.clear();
		ISupplier i = () -> cmmService.selectAllList();
		List<HashMap<?, ?>> ls = (List<HashMap<?, ?>>) i.get();
		map.put("ls", ls);
		return map;
	}

	@Transactional
	@ResponseBody
	@RequestMapping("/ngh/ch")
	public HashMap<String, Object> chart() {
		map.clear();
		Calendar cal = Calendar.getInstance();
		cal.setTime(new Date());
		cal.add(Calendar.MINUTE, -10);
		List<HashMap<?, ?>> list = new ArrayList<HashMap<?, ?>>();
		int price = 1000;
		int min = (int) (price * 0.9);
		int max = (int) (price * 1.1);
		for (int i = 0; i < 60; i++) {
			Date date = cal.getTime();
			price = getRandomNumberInRange(min, max);

			map.put("price", price);
			Date dtNormal = GetNormalTime(date);
			map.put("date", dtNormal);
			list.add(map);
			cal.add(Calendar.SECOND, 10);

			min = (int) (price * 0.9);
			max = (int) (price * 1.1);

			if (min < 500) {
				min = 500;
				max = (int) (min * 1.2);
			}
		}

		map.put("ls", list);
		return map;
	}

	int getRandomNumberInRange(int min, int max) {
		if (min >= max) {
			throw new IllegalArgumentException("max must be greater than min");
		}
		Random r = new Random();
		return r.nextInt((max - min) + 1) + min;
	}

	Date GetNormalTime(Date tm) {
		long lcurTime = tm.getTime();
		long normalTime = (lcurTime / (10 * 1000)) * (10 * 1000);
		Date curDt = new Date(normalTime);
		return curDt;
	}

	@Transactional
	@SuppressWarnings("unchecked")
	@ResponseBody
	@RequestMapping(value = "/ngh/buy/{unit}/{price}/{id}/{tprice}", method = RequestMethod.GET)
	public HashMap<String, Object> buy(@PathVariable("unit") String unit, @PathVariable("price") String price,
			@PathVariable("id") String id, @PathVariable("tprice") String tprice) {
		Date today = new Date();
		DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		String date = String.valueOf(dateFormat.format(today));
		map.clear();
		map.put("unit", unit);
		map.put("id", id);
		map.put("nprice", price);
		map.put("rw", "매수");
		map.put("date", date);
		map.put("tprice", tprice);
		map.put("dmoney", "0");
		int totalPrice = Integer.parseInt(tprice);
		int onceunit = Integer.parseInt(unit);
		IFunction f = (Object o) -> mapper.selectAccount(id);
		Map<String, Object> ls = (Map<String, Object>) f.apply(id);
		int money = Integer.parseInt((String) ls.get("money"));
		int curruentMoney = money - totalPrice;
		String bm = String.valueOf(curruentMoney);
		map.put("bm", bm);
		IConsumer ii = (Object o) -> mapper.updateBuyAccount(map);
		ii.accept(map);
		IConsumer i = (Object o) -> mapper.insertTx(map);
		i.accept(map);
		ISupplier s = () -> cmmService.selectOnceCount();
		Map<String, Object> olist = (Map<String, Object>) s.get();
		int count = (int) olist.get("currentCount");
		int oncecount = count - onceunit;
		String onprice = String.valueOf(GetPrice(count));
		String oc = String.valueOf(oncecount);
		map.clear();
		map.put("price", onprice);
		map.put("currentCount", oc);
		IConsumer c = (Object o) -> cmmService.insertOnceCount(map);
		c.accept(map);
		IFunction fx = (Object o) -> cmmService.retrieveCustomer(id);
		map.clear();
		map = (HashMap<String, Object>) fx.apply(id);
		int tbprice = Integer.parseInt(map.get("tbprice").toString());
		int hqua = Integer.parseInt(map.get("hqua").toString());
		int tbprices = tbprice + totalPrice;
		int hquas = hqua + onceunit;
		String tb = String.valueOf(tbprices);
		String hq = String.valueOf(hquas);
		map.clear();
		map.put("tb", tb);
		map.put("hq", hq);
		map.put("id", id);
		IConsumer cc = (Object o) -> cmmService.updateCust(map);
		cc.accept(map);

		return map;
	}

	int GetPrice(double coinCount) {
		double totalunit = 2000000;
		double onceprice = totalunit / coinCount * 1000;
		return (int) onceprice;
	}

	@Transactional
	@SuppressWarnings("unchecked")
	@ResponseBody
	@RequestMapping(value = "/ngh/medo/{unit}/{price}/{id}/{tprice}", method = RequestMethod.GET)
	public HashMap<String, Object> medo(@PathVariable("unit") String unit, @PathVariable("price") String price,
			@PathVariable("id") String userid, @PathVariable("tprice") String tprice) {
		Date today = new Date();
		DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		String date = String.valueOf(dateFormat.format(today));
		map.clear();
		map.put("unit", unit);
		map.put("uesrid", userid);
		map.put("nprice", price);
		map.put("rw", "매도");
		map.put("date", date);
		map.put("tprice", tprice);
		map.put("dmoney", "0");
		int totalPrice = Integer.parseInt(tprice);
		int onceunit = Integer.parseInt(unit);
		IFunction f = (Object o) -> mapper.selectAccount(userid);
		Map<String, Object> ls = (Map<String, Object>) f.apply(userid);
		int money = Integer.parseInt((String) ls.get("money"));
		int curruentMoney = money + totalPrice;
		String bm = String.valueOf(curruentMoney);
		map.put("bm", bm);
		IConsumer ii = (Object o) -> mapper.updateBuyAccount(map);
		ii.accept(map);
		IConsumer i = (Object o) -> mapper.insertTx(map);
		i.accept(map);
		ISupplier s = () -> cmmService.selectOnceCount();
		s.get();
		Map<String, Object> olist = (Map<String, Object>) s.get();
		int count = (int) olist.get("currentCount");
		int oncecount = count + onceunit;
		String onprice = String.valueOf(GetPrice(count));
		String oc = String.valueOf(oncecount);
		map.put("oc", oc);
		map.put("price", onprice);

		map.put("price", price);
		map.put("currentCount", oc);
		IConsumer c = (Object o) -> cmmService.insertOnceCount(map);
		c.accept(map);
		IFunction fx = (Object o) -> cmmService.retrieveCustomer(userid);
		map = (HashMap<String, Object>) fx.apply(userid);
		int tbprice = Integer.parseInt(map.get("tbprice").toString());
		int hqua = Integer.parseInt(map.get("hqua").toString());
		int tbprices = tbprice - totalPrice;
		int hquas = hqua - onceunit;
		String tb = String.valueOf(tbprices);
		String hq = String.valueOf(hquas);
		map.put("tb", tb);
		map.put("hq", hq);
		map.put("userid", userid);
		IConsumer cc = (Object o) -> cmmService.updateCust(map);
		cc.accept(map);

		return map;
	}

	@SuppressWarnings("unchecked")
	@ResponseBody
	@RequestMapping(value = "/ngh/mycoin/{id}", method = RequestMethod.GET)
	public HashMap<String, Object> mycoin(@PathVariable("id") String userid) {
		map.clear();
		map.put("userid", userid);
		IFunction f = (Object o) -> mapper.selectAccount(userid);
		Map<String, Object> rs = (Map<String, Object>) f.apply(userid);
		map.put("rs", rs);
		return map;
	}
}
