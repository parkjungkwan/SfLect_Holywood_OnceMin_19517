package com.once.web;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileOutputStream;
import java.io.OutputStreamWriter;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Random;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Data @Component @Lazy
public class Proxy {
     private int pageNum, pageSize, blockSize,  startRow, endRow, startPage, endPage, prevBlock,  nextBlock,rowCount,pageCount,blockNum,page;
     private boolean existPrev,existNext;
     private String search;
     static class CoinArticle {
    		private String mseq, 
    					   nseq,
    					   title,
    					   adate,
    					   url,
    					   img,
    					   youTitle,
    					   youDate,
    					   youUrl,
    					   youImg;

			public String getMseq() {
				return mseq;
			}

			public void setMseq(String mseq) {
				this.mseq = mseq;
			}

			public String getNseq() {
				return nseq;
			}

			public void setNseq(String nseq) {
				this.nseq = nseq;
			}

			public String getTitle() {
				return title;
			}

			public void setTitle(String title) {
				this.title = title;
			}

			public String getAdate() {
				return adate;
			}

			public void setAdate(String adate) {
				this.adate = adate;
			}

			public String getUrl() {
				return url;
			}

			public void setUrl(String url) {
				this.url = url;
			}

			public String getImg() {
				return img;
			}

			public void setImg(String img) {
				this.img = img;
			}

			public String getYouTitle() {
				return youTitle;
			}

			public void setYouTitle(String youTitle) {
				this.youTitle = youTitle;
			}

			public String getYouDate() {
				return youDate;
			}

			public void setYouDate(String youDate) {
				this.youDate = youDate;
			}

			public String getYouUrl() {
				return youUrl;
			}

			public void setYouUrl(String youUrl) {
				this.youUrl = youUrl;
			}

			public String getYouImg() {
				return youImg;
			}

			public void setYouImg(String youImg) {
				this.youImg = youImg;
			}
    	}
     
         public void carryOut(HashMap<String,Object>  paraMap) {
     		search = (String) paraMap.get("search");
    		String _pageNum = (String)paraMap.get("page_num");
    		pageNum = (_pageNum == null) ? 1 : Integer.parseInt(_pageNum);
    		String _pageSize = (String)paraMap.get("page_size");
    		pageSize = (_pageSize == null) ? 5 : Integer.parseInt(_pageSize);
    		String _blockSize = (String)paraMap.get("block_size");
    		blockSize = (_blockSize == null) ? 5 : Integer.parseInt(_blockSize);
    		rowCount = (int) paraMap.get("rowCount");
    		
    		
    		
    		int nmg = rowCount % pageSize;
    		int pageCount = (nmg == 0)?rowCount / pageSize:rowCount / pageSize+1;
    		startRow = (pageNum -1) *pageSize;
    		endRow = (rowCount > pageNum * pageSize)? pageNum * pageSize: rowCount;
    		

    		blockNum = (pageNum-1)/blockSize;
    		if(existPrev) {
    			startPage = blockNum*blockSize+1;
    			
    		}else {
    			startPage = 1;
    		}
    		
    		startPage = pageNum -((pageNum-1)%blockSize);
    		endPage = startPage+(blockSize-1);

    		if(endPage>pageCount) {
    			endPage = pageCount;
    		}
    		
    		existPrev = (startPage - pageSize) > -5;
    		existNext = (startPage + pageSize) <= pageCount+5;
    		prevBlock = startPage - pageSize+5; 
    		nextBlock = endPage + 1;

         }
         
    public List<CoinArticle> youtube() throws Exception {
        List<CoinArticle> list = new ArrayList<CoinArticle>();
        String[] url = {"https://www.youtube.com/watch?v=TY8Ux_HTJTs&list=PLl9uUFkzm8kJodWXJffC1xHYAf4TKgpDJ&index=2&t=2s","https://www.youtube.com/watch?v=ETsSSEb3Lg8&list=PLl9uUFkzm8kJodWXJffC1xHYAf4TKgpDJ&index=2"};
        String[] url1 = {"https://www.youtube.com/watch?v=F8fcnr8BNzY&list=PLl9uUFkzm8kJodWXJffC1xHYAf4TKgpDJ&index=3","https://www.youtube.com/watch?v=qxu4K112NXY&list=PLl9uUFkzm8kJodWXJffC1xHYAf4TKgpDJ&index=4"};
        CoinArticle article = null;
       for(int i =0;i<2;i++) {
        article =new CoinArticle();
        article.setUrl(url[i]);
        Document doc = Jsoup.connect(url[i]).get();
        int text = doc.select("h1.watch-title-container span").attr("title").indexOf("암");
        int text2 = doc.select("h1.watch-title-container span").attr("title").indexOf("편")+1;
        article.setTitle(doc.select("h1.watch-title-container span").attr("title").substring(text,text2));
        article.setAdate(doc.select("strong.watch-time-text").text().substring(5));
       
        article.setYouUrl(url1[i]);
        Document docu = Jsoup.connect(url1[i]).get();
        int text3 = doc.select("h1.watch-title-container span").attr("title").indexOf("암");
        int text4 = doc.select("h1.watch-title-container span").attr("title").indexOf("편")+1;
        article.setYouTitle(docu.select("h1.watch-title-container span").attr("title").substring(text3,text4));
        article.setYouDate(docu.select("strong.watch-time-text").text().substring(5));
        list.add(article);
      
          String url2 ="https://www.youtube.com/playlist?list=PLl9uUFkzm8kJodWXJffC1xHYAf4TKgpDJ";
          Document doc2 = Jsoup.connect(url2).get();
           if(i==0) {
             int j=0;
             for(Element element:doc2.select("tr img")) {
                 if(j<2) {
                      if(j==0) {
                           article.setImg(element.attr("data-thumb"));
                      }else {
                           article.setYouImg(element.attr("data-thumb"));
                      }
                 }
                 j++;
             }
           }else {
             int j=0;
             for(Element element:doc2.select("tr img")) {
                 if(j>1&&j<=3) {
                      if(j==2) {
                           article.setImg(element.attr("data-thumb"));
                      }else{
                           article.setYouImg(element.attr("data-thumb"));
                      }
                 }
                 j++;
             }
           }
       }
           return list;
    	
    }     
         
         
    public void word(int wordpage) throws Exception {
//    	page = wordpage;
    	page =1;

    	File file = new File("C:\\Users\\1027\\git\\project_once\\src\\main\\webapp\\resources\\csv\\csv.csv");
    	file.delete();
    	String csvFileName = "C:\\Users\\1027\\git\\project_once\\src\\main\\webapp\\resources\\csv\\csv.csv";
    	
    	BufferedWriter writer = new BufferedWriter(
    			new OutputStreamWriter(new FileOutputStream(csvFileName),"UTF-8"));
    	writer.write("text,frequency\n");
    	for(int i =0; page<=41;i++) {
        String url =  "https://search.naver.com/search.naver?&where=news&query=%EB%B9%84%ED%8A%B8%EC%BD%94%EC%9D%B8%20%EC%8B%9C%EC%84%B8&sm=tab_pge&sort=0&photo=0&field=0&reporter_article=&pd=0&ds=&de=&docid=&nso=so:r,p:all,a:all&mynews=0&cluster_rank=10&start="+page+"&refresh_start=0";
        Document doc = Jsoup.connect(url).get();
        Elements elements = doc.select("ul.type01 li dl  dt a");
        Random random = new Random();
        
        String title = elements.text();
        String match ="[^\uAC00-\uD7A3xfea-zA-Z\\s]";
        title = title.replaceAll("  ", "");
        title = title.replaceAll("", "");
      title = title.replaceAll("0시", " ");
      title = title.replaceAll("1시", " ");
      title = title.replaceAll("2시", " ");
      title = title.replaceAll("3시", " ");
      title = title.replaceAll("4시", " ");
      title = title.replaceAll("5시", " ");
      title = title.replaceAll("6시", " ");
      title = title.replaceAll("7시", " ");
      title = title.replaceAll("8시", " ");
      title = title.replaceAll("9시", " ");
      title = title.replaceAll("0분", " ");
      title = title.replaceAll("1분", " ");
      title = title.replaceAll("2분", " ");
      title = title.replaceAll("3분", " ");
      title = title.replaceAll("4분", " ");
      title = title.replaceAll("5분", " ");
      title = title.replaceAll("6분", " ");
      title = title.replaceAll("7분", " ");
      title = title.replaceAll("8분", " ");
      title = title.replaceAll("9분", " ");
      title = title.replaceAll("0일", " ");
      title = title.replaceAll("1일", " ");
      title = title.replaceAll("2일", " ");
      title = title.replaceAll("3일", " ");
      title = title.replaceAll("5일", " ");
      title = title.replaceAll("6일", " ");
      title = title.replaceAll("7일", " ");
      title = title.replaceAll("8일", " ");
      title = title.replaceAll("9일", " ");
      title = title.replaceAll("이어져", " ");
      title = title.replaceAll("뉴스", " ");
      title = title.replaceAll("분", " ");
      title = title.replaceAll("원", " ");
      title = title.replaceAll("는", " ");
      title = title.replaceAll("에", " ");
      title = title.replaceAll("여전히", " ");
      title = title.replaceAll("시황", " ");
      title = title.replaceAll("아침", " ");
      title = title.replaceAll("가상화폐", " ");
      title = title.replaceAll("암호화폐", " ");
      title = title.replaceAll("월", " ");
      title = title.replaceAll("만", " ");
      title = title.replaceAll(match, " ");
        String[] arg = title.split(" ");
        arg = new HashSet<String>(Arrays.asList(arg)).toArray(new String[0]);
        
        for(String s :arg) {
        	writer.write(s+","+(random.nextInt(20)+10)+"\n");
        }
        page +=10;
    }
    	writer.close();
    }
}

