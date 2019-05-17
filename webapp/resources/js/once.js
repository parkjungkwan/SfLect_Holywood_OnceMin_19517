"use strict";
// ******************
// @ 작성일 : 2019-05-17
// @ 작업자 : 김 승 아(edenkim1024@gmail.com)
// @ 기 능 : 카카오로그인, 계좌관리, 회원관리
// ******************
var ksa=ksa || {};
ksa=(()=>{
	let init=(x)=>{
		onCreate(x);
	};
	let onCreate=(x)=>{	
		setContentView(x);
	};
	let setContentView=(x)=>{
		switch (x) {
		case 'd':
            $('#once').empty();
            $.getScript($.js()+'/component/ksa_compo.js',()=>{
                $.getScript($.js()+'/team/chat.js',()=>{
                	$('#chat_coin').remove();
                    $(kth_compo.coin_chat()).appendTo('.bgWhite');
                    chat.init();
                });
            if(sessionStorage.getItem('session') === null){
                location.assign($.ctx()+"/ksa");
            }else{
                 $(ksa_compo.d_w_charge()).appendTo('#once');
                 $('#nav2 a').attr('class', '');
                 $('#ksa_d').attr('class', 'on');
                 charge_btn(cust_id);
                 $('#off').click(e=>{logout()});
                 $('.tabB a').eq(0).click(function(){
                        $('.tabB a').attr('class', '');
                        $(this).attr('class', 'on');
                     /*   $('.TabArea').empty();
                        $(ksa_compo.d_w_krw()).appendTo('.TabArea');
                        charge_btn(cust_id);*/
                    });
                 $('.tabB a').eq(1).click(function(){
                        alert('준비중입니다.');
                 });
                 $('.tabB a').eq(2).click(function(){
                        alert('준비중입니다.');
                 });
            }
            });
            break;
		case 'i':
			$('#once').empty();
            $.getScript($.js()+'/component/ksa_compo.js',()=>{
                $.getScript($.js()+'/team/chat.js',()=>{
                	$('#chat_coin').remove();
                    $(kth_compo.coin_chat()).appendTo('.bgWhite');
                    chat.init();
                });
            if(sessionStorage.getItem('session') === null){
                location.assign($.ctx()+"/ksa");
            }else{
                $(ksa_compo.investment_coin()).appendTo('#once');
                $('#nav2 a').attr('class', '');
                $('#ksa_i').attr('class', 'on');   
                hcoin();
                $('#off').click(e=>{logout()});
                $('.ty04 a').eq(0).click(function(){
	                  $('.ty04 a').attr('class', '');
	                  $(this).attr('class', 'on');
	                  $('.ownB').empty();
	                  $('.ownB').html(ksa_compo.investment_hcoin());
	                  hcoin();
	            });
             };
                $('.ty04 a').eq(1).click(function(){
                	 $.ajax({
                      	 url:$.ctx()+'/retrieve_trx/'+cust_id,
                      	 data:cust_id,
                      	 type:'GET',
                      	 dataType:'json',
                      	 contentType:'application/json',
                      	 success:s=>{
                            $('.ty04 a').attr('class', '');
                            $(this).attr('class', 'on');
                            $('.ownB').empty();
                            $('.ownB').html(ksa_compo.investment_trx());
                            $('.ty04 tbody').empty();     
                            $.each(s.ls, (i,j)=>{
                            	switch(j.rw){
                            	case '매수':
                            		$('.ty04 tbody').append('<tr>'
                                			+'<td class="lAlign">'+j.date+'</td>'
                                			+'<td class="cAlign up">'+j.rw+'</td>'
                                			+'<td><strong>'+j.unit+' <i>ONCE </i></strong></td>'
                                			+'<td><strong>'+j.nprice+' <i>KRW </i></strong></td>'
                                			+'<td><strong>'+j.unit*j.nprice+' <i>KRW </i></strong></td>'
                                			+'</tr>');
                            		break;
                            	case '매도':
                            		$('.ty04 tbody').append('<tr>'
                                			+'<td class="lAlign">'+j.date+'</td>'
                                			+'<td class="cAlign down">'+j.rw+'</td>'
                                			+'<td><strong>'+j.unit+' <i>ONCE </i></strong></td>'
                                			+'<td><strong>'+j.nprice+' <i>KRW </i></strong></td>'
                                			+'<td><strong>'+j.unit*j.nprice+' <i>KRW </i></strong></td>'
                                			+'</tr>');
                            		break;
                            	case '입금':
                            		$('.ty04 tbody').append('<tr>'
                                			+'<td class="lAlign">'+j.date+'</td>'
                                			+'<td class="cAlign up">'+j.rw+'</td>'
                                			+'<td><strong>0 <i>ONCE </i></strong></td>'
                                			+'<td><strong>0 <i>KRW </i></strong></td>'
                                			+'<td><strong>'+j.dmoney+' <i>KRW </i></strong></td>'
                                			+'</tr>');
                            		break;
                            	}
                            });
                            $('#proSearch').change(function(){
                            	 switch($(this).val()){
                                 case 'allType': 
                                	 $.each(s.ls, (i,j)=>{
                                		 if(j.rw==='매수'){
                                     		$('.ty04 tbody').append('<tr>'
                                         			+'<td class="lAlign">'+j.date+'</td>'
                                         			+'<td class="cAlign up">'+j.rw+'</td>'
                                         			+'<td><strong>'+j.unit+' <i>ONCE </i></strong></td>'
                                         			+'<td><strong>'+j.nprice+' <i>KRW </i></strong></td>'
                                         			+'<td><strong>'+j.unit*j.nprice+' <i>KRW </i></strong></td>'
                                         			+'</tr>');
                                     	}else if(j.rw==='매도'){
                                     		$('.ty04 tbody').append('<tr>'
                                         			+'<td class="lAlign">'+j.date+'</td>'
                                         			+'<td class="cAlign down">'+j.rw+'</td>'
                                         			+'<td><strong>'+j.unit+' <i>ONCE </i></strong></td>'
                                         			+'<td><strong>'+j.nprice+' <i>KRW </i></strong></td>'
                                         			+'<td><strong>'+j.unit*j.nprice+' <i>KRW </i></strong></td>'
                                         			+'</tr>');
                                     	}else{
                                     		$('.ty04 tbody').append('<tr>'
                                        			+'<td class="lAlign">'+j.date+'</td>'
                                        			+'<td class="cAlign up">'+j.rw+'</td>'
                                        			+'<td><strong>0 <i>ONCE </i></strong></td>'
                                        			+'<td><strong>0 <i>KRW </i></strong></td>'
                                        			+'<td><strong>'+j.dmoney+' <i>KRW </i></strong></td>'
                                        			+'</tr>');
                                     	}
                                      });
                                	 break;
                                 case 'bid':
                                	 $('.ty04 tbody').empty();
                                	 $.each(s.ls, (i,j)=>{
                                         $('.ty04 tbody').append('<tr>'
                                        		+'<td class="lAlign">'+j.date+'</td>'
                                     			+'<td class="cAlign up">'+j.rw+'</td>'
                                     			+'<td><strong>'+j.unit+' <i>ONCE </i></strong></td>'
                                     			+'<td><strong>'+j.nprice+' <i>KRW </i></strong></td>'
                                     			+'<td><strong>'+j.unit*j.nprice+' <i>KRW </i></strong></td>'
                                     			+'</tr>');
                                          });
                                	 break;
                                 case 'ask':  
                                	 $('.ty04 tbody').empty();
                                	 $.each(s.ls, (i,j)=>{
                                         $('.ty04 tbody').append('<tr>'
                                        		+'<td class="lAlign">'+j.date+'</td>'
                                     			+'<td class="cAlign down">'+j.rw+'</td>'
                                     			+'<td><strong>'+j.unit+' <i>ONCE </i></strong></td>'
                                     			+'<td><strong>'+j.nprice+' <i>KRW </i></strong></td>'
                                     			+'<td><strong>'+j.unit*j.nprice+' <i>KRW </i></strong></td>'
                                     			+'</tr>');
                                          });
                                	 break;
                                  case 'deposit':  
                                 	 $('.ty04 tbody').empty();
                                 	 $.each(s.ls, (i,j)=>{
                                 		$('.ty04 tbody').append('<tr>'
                                    			+'<td class="lAlign">'+j.date+'</td>'
                                    			+'<td class="cAlign up">'+j.rw+'</td>'
                                    			+'<td><strong>0 <i>ONCE </i></strong></td>'
                                    			+'<td><strong>0 <i>KRW </i></strong></td>'
                                    			+'<td><strong>'+j.dmoney+' <i>KRW </i></strong></td>'
                                    			+'</tr>');
                                           });
                                 	 break;
                                 }
                            });
                      	 },
                      	 error:e=>{	 
                      		 $('.ty04 a').attr('class', '');
                             $(this).attr('class', 'on');
                             $('.ownB').empty();
                             $('.ownB').html(ksa_compo.investment_trx());
                             $('.ty04 tbody').empty();
                           	 $('.ty04 tbody').html('<td colspan="8" class="dataNone"><p>과거 거래내역이 없습니다.</p></td>');
                      	 }
                    });
                });
           });
           break;
		}
	};
	
	
	
	
	let cust_id = sessionStorage.getItem('info');
	let charge_btn=(x)=>{
		$.ajax({
       	 url:$.ctx()+'/retrieve_acc/'+x,
       	 data:x,
       	 type:'POST',
       	 dataType:'json',
       	 contentType:'application/json',
       	 success:s=>{
       		 	 $('#h_money').html('<p>'+s.money+' <i>KRW</i></p>'); //KRW입출금의 보유금액
       			 $('#won strong').eq(1).html('<strong>'+s.money+' <i>KRW</i></strong>'); //원화 보유수량(평가금액)
       			 $('#oncecoin strong').eq(1).html('<strong>'+s.hqua+' <i>ONCE</i></strong>'); //원스 보유수량(평가금액)
       			 $.getJSON($.ctx()+'/ngh/once',d=>{
       				let tp = new Array();
       				$.each(d.ls,(i,j)=>{
       					tp[i] = j.price;
       				});
       				let c_krw = tp[0] * s.hqua; //원스코인->KRW로 변환한 값
       				 $('#oncecoin p').eq(1).html('<p>'+c_krw+' <i>KRW</i></p>'); //원스코인 평가금액
       				let total_p = c_krw+parseInt(s.money); //총 보유자산 값
         			 $('.totalB p').empty();
         			 $('<p> '+total_p+' <i>KRW</i></p>').appendTo('.totalB'); //총보유자산
     				if(s.money!='0' || s.hqua!='0'){
     					 $('#won p').html('<p align = "right">'+parseFloat((s.money/total_p)*100).toFixed(2)+'%</p>');// 원화 보유비중
               		 	 $('#oncecoin p').eq(0).html('<p align = "right">'+parseFloat((c_krw/total_p)*100).toFixed(2)+'%</p>');// 원스코인 보유비중
     				}else{
     					 $('#won p').html('<p align = "right">0%</p>');// 원화 보유비중
               		 	 $('#oncecoin p').eq(0).html('<p align = "right">0%</p>');// 원스코인 보유비중
     				}
       			 });
       			 $('.btnB em').empty();
           		 $('.btnB em').html('계좌번호  :  '+s.acnum);
           		 $('<dl class="inputB">'
           				+'<dd class="addr">'
           					+'<input id="money" type="text" placeholder="KRW" value="" style="color: rgb(153, 153, 153);">'
           					+'<a style="cursor:pointer" id="charge" title="충전">충전하기</a>'
           				+'</dd>'
           			+'</dl>').appendTo('.btnB');
           		 $('#h_money strmong').html('<strong>'+s.money+' <i>KRW</i></strong>');
           		 $('#acc').remove();
           		 $('#charge').click(e=>{
   					 e.preventDefault();
   					 sessionStorage.setItem('cm', $('#money').val());
   					 window.open('payment', "a", "width=1000, height=800, left=100, top=50");
   				 });
       	 },
       	 error:e=>{
                $('#acc').click(e=>{
               	 $.ajax({
                   	 url:$.ctx()+'/open_acc/'+x,
                   	 data:x,
                   	 type:'POST',
                   	 dataType:'json',
                   	 contentType:'application/json',
                   	 success:s=>{
                   		 let account= s.acnum;
                   		 $('.btnB em').empty();
                   		 $('.btnB em').html('계좌번호  :  '+s.acnum);
                   		 $('#acc').remove();
                   		 $('<a id="charge" class="btn" style="padding-top:1px;" title="충전하기">충전하기</a>').appendTo('.btnB');
                   		 $('#charge').click(e=>{
           					 e.preventDefault();
           					 window.open('payment', "a", "width=1000, height=800, left=100, top=50");		 
           				 });
                   	 },
                   	 error:e=>{
                   		 alert('실패!');
                   	 }
                    });
                });
       	 }
        });
	};
	let kakao=(x)=>{
		Kakao.init('84c6f4f17078c92b08795e362bbe2d2d');
		$('#custom-login-btn').click(function loginWithKakao() {
		      Kakao.Auth.loginForm({
		        success: (authObj)=> {
		        	 Kakao.API.request({
		        	       url: '/v1/user/me',
		        	       success: (res)=>{
		        	             console.log(res.id);
		        	             console.log(res.kaccount_email);
		        	             console.log(res.properties['nickname']);
		        	             console.log(authObj.access_token);
		        	             Kakao.Auth.setAccessToken(authObj.access_token, true);
		        	         	 sessionStorage.setItem('session', Kakao.Auth.getAccessToken());
		        	         	 sessionStorage.setItem('info', res.id);
		        	         	 sessionStorage.setItem('nickname', res.properties['nickname']);
		        	         	 sessionStorage.setItem('pic', res.properties['thumbnail_image']);
		        	         	$.ajax({
		    	             		url:x+'/login',
		    	             		type: 'POST',
		    	             		data: JSON.stringify(res, authObj),
		    	             		dataType:'json',
		    	             		contentType : "application/json; charset=UTF-8",
		    	             		success:(res)=>{
		    	             			location.assign(x);
		    	             		},
		    	             		error:(err)=>{
		    	             			kakao(x);
		    	             		}
		    	             	});
		        	           }
		        	         })
		        },
		        fail: (err)=> {
		          alert(JSON.stringify(err));
		        }
		      });
		    });
	};	
	let logout=()=>{
		Kakao.init('84c6f4f17078c92b08795e362bbe2d2d');
		Kakao.Auth.logout(function () {
				sessionStorage.removeItem('session');
		        sessionStorage.removeItem('info');
		    	sessionStorage.removeItem('nickname');
		    	sessionStorage.removeItem('pic');
		    	location.assign($.ctx());
			});
    };
	let hcoin=()=>{
		 $.ajax({
          	 url:$.ctx()+'/retrieve_acc/'+cust_id,
          	 data:cust_id,
          	 type:'POST',
          	 dataType:'json',
          	 contentType:'application/json',
          	 success:s=>{
          		  $.getJSON($.ctx()+'/ngh/once',d=>{
        				let tp = new Array();
        				$.each(d.ls,(i,j)=>{
        					tp[i] = j.price;
        				});
        				let c_krw = tp[0] * s.hqua;
        				let total_p = c_krw+parseInt(s.money); //총보유자산
        				if(s.tbprice!='0'){
        					$('#total_price strong').eq(0).html(s.tbprice+' <i>KRW</i></strong>'); //총매수금액
                  		  	$('#total_price strong').eq(1).html(total_p+' <i>KRW</i></strong>'); //총평가금액
                  		  	if(0>(total_p-s.tbprice)){
                      		  	$('#evaluation strong')
                      		  	.eq(0)
                      		  	.attr('class', 'down')
                      		  	.html((total_p-s.tbprice)+' <i>KRW</i></strong>'); //총평가손익
                      		  	$('#evaluation strong')
                      		  	.eq(1)
                      		  	.attr('class', 'down')
                      		  	.html(Math.abs(parseFloat((total_p-s.tbprice)/s.tbprice*100).toFixed(2))+' <i>%</i></strong>'); //총평가수익률
                      		  $('#hcoin td').eq(3).html('<span><em class="down">'+Math.abs(parseFloat((total_p-s.tbprice)/s.tbprice*100).toFixed(2))+' <i>%</i></em></span>'
   		 							 +'<span><em class="down">'+(total_p-s.tbprice)+' <i>KRW</i></em></span>'); //평가손익
                  		  	}else{
                  		  		$('#evaluation strong')
                  		  		.eq(0)
                  		  		.attr('class', 'up')
                      		  	.html((total_p-s.tbprice)+' <i>KRW</i></strong>'); //총평가손익
                      		  	$('#evaluation strong')
                      		  	.eq(1)
                      		  	.attr('class', 'up')
                      		  	.html(Math.abs(parseFloat((total_p-s.tbprice)/s.tbprice*100).toFixed(2))+' <i>%</i></strong>'); //총평가수익률
                      		  $('#hcoin td').eq(3).html('<span><em class="up">'+Math.abs(parseFloat((total_p-s.tbprice)/s.tbprice*100).toFixed(2))+' <i>%</i></em></span>'
   		 							 +'<span><em class="up">'+(total_p-s.tbprice)+' <i>KRW</i></em></span>'); //평가손익
                  		  	}
                  		  	$('#assets strong').eq(0).html(s.money+' <i>KRW</i>'); //보유 krw
                  		 	$('#assets strong').eq(1).html(total_p+' <i>KRW</i></strong>'); //총보유자산
                  		 	$('#hcoin td').eq(0).html('<strong>'+s.hqua+' <i>BTC</i></strong>'); //보유수량
                  		 	$('#hcoin td').eq(1).html('<em>'+s.tbprice+' <i>KRW</i></em>'); //매수금액
                  		 	$('#hcoin td').eq(2).html('<em>'+total_p+' <i>KRW</i></em>'); //평가금액
                  		 	
        				}else{
        					$('#hcoin td').eq(3).html('<em>'+total_p+' <i>KRW</i></em>'); //평가금액
        					$('#assets strong').eq(0).html(s.money+' <i>KRW</i>'); //보유 krw
        					$('#assets strong').eq(1).html(s.money+' <i>KRW</i></strong>'); //총보유자산
        				}
          		  }); 
          	 },
          	 error:e=>{
          		 alert('실패');
          		 
          	 }
           });
    };
	
	return{init:init, kakao:kakao, logout:logout};
})();
//******************
//@ 작성일 : 2019-05-17
//@ 작업자 : 김 태 혁(taehyek0314@gmail.com)
//@ 기 능 : 워드클라우드, 크롤링, 챗봇, 게시판
//******************
var kth=kth || {};
kth=(()=>{
     let _,js,compojs;
     let path =()=>{
         _= $.ctx();
         js= $.js();
     }
     let init=()=>{
         path();
         onCreate();
     };
     let onCreate=()=>{
         $('#once').empty();
         $.getScript($.js()+'/component/kth_compo.js',()=>{
           $.getScript($.js()+'/team/chat.js',()=>{
        	   $('#chat_coin').remove();
               $(kth_compo.coin_chat()).appendTo('.bgWhite');
               chat.init();
           });
                $(kth_compo.cs_form()).appendTo('#once').css('margin-left','-80px');
               $('#nav2 a').attr('class', '');
               $('#kth2').attr('class', 'on');
               list(1);
               $('.serchBt').click(function(){
                   let val =$('#search_form').val();
                     if(val==''||val.length<2){
                         alert('잘못된 입력입니다');
                     }else{
                         let arr = {srch:val,
                                 page:1}
                         search(arr);
                     }
                 });
                 $('#search_form').keypress(function(e){
                   if (e.which == 13){
                       let val =$('#search_form').val();
                       if(val==''||val.length<2){
                            alert('잘못된 입력입니다');
                       }else{
                            let arr = {srch:val,
                                      page:1}
                            search(arr);
                       }
                   }
                 });
          });
     };
     let list =(x)=>{
         $('#main_content').empty();
         $('.pagination').empty();
         $.getJSON(_+'/notice/'+x,d=>{
               $.each(d.ls,(i,j)=>{
                   $('<tr><td  class="lAlign title">'+j.csq+'</td>'
                             +'<td  class="lAlign" id="'+j.csq+'"><a style="cursor: pointer;">'+j.title+'</a></td>'
                             +'<td  class="lAlign">'+j.cdate+'</td>'
                             +'<td  class="lAlign">'+j.views+'</td>'
                             +'</tr>').appendTo('#main_content');
                   $('#'+j.csq).click(function(e){
                  	 e.preventDefault();
                 	detail(j.csq,x);
                   });
               });
                  if(d.pxy.existPrev){
                       $('<li class="page-item">'
                    		   +'  <a class="page-link" href="#" aria-label="Previous">'
                    		   +'    <span aria-hidden="true">&laquo;</span>'
                    		   +'    <span class="sr-only">Previous</span>'
                    		   +'  </a>'
                    		   +'</li>').css('cursor','pointer').appendTo('.pagination')
                       .click(function(){
                            list(d.pxy.prevBlock);
                       });
                  }
                  let i=0;
                   for(i=d.pxy.startPage;i<=d.pxy.endPage;i++){
                       if(d.pxy.pageNum ==i){
                            $('<li class="page-item active"><a class="page-link">'+i+'</a></li>').css('cursor','pointer')
                            .appendTo('.pagination')
                            .click(function(){
                                 list($(this).text());
                            });
                       }else{
                            $('<li class="page-item"><a class="page-link">'+i+'</a></li>').css('cursor','pointer')
                            .appendTo('.pagination')
                            .click(function(){
                                list($(this).text());
                            });
                       }
                  }
                  if(d.pxy.existNext){
                       $('<li class="page-item">'
                    		   +'  <a class="page-link" aria-label="Next">'
                    		   +'    <span aria-hidden="true">&raquo;</span>'
                    		   +'    <span class="sr-only">Next</span>'
                    		   +'  </a>'
                    		   +'</li>').css('cursor','pointer').appendTo('.pagination')
                       .click(function(){
                            list(d.pxy.nextBlock);
                       });
                       
                  };
          });
          
     };
     let search=(x)=>{
         $('#main_content').empty();
         $('.pagination').empty();
    	 $.getJSON($.ctx()+'/search/'+x.srch+'/'+x.page,d=>{
    		 if(d.ls!=''){
    			 $.each(d.ls,(i,j)=>{
    				 $('<tr><td  class="lAlign">'+j.csq+'</td>'
    						 +'<td  class="lAlign" id="'+j.csq+'"><a style="cursor: pointer;">'+j.title+'</a></td>'
    						 +'<td  class="lAlign">'+j.cdate+'</td>'
    						 +'<td  class="lAlign">'+j.views+'</td>'
    						 +'</tr>').appendTo('#main_content');
    				 $('#'+j.csq).click(function(e){
    					 e.preventDefault();
    					 detail(j.csq,x);
    				 });
    			 });
    			 if(d.pxy.existPrev){
    				 $('<li class="page-item">'
    						 +'  <a class="page-link" href="#" aria-label="Previous">'
    						 +'    <span aria-hidden="true">&laquo;</span>'
    						 +'    <span class="sr-only">Previous</span>'
    						 +'  </a>'
    						 +'</li>').css('cursor','pointer').appendTo('.pagination')
    						 .click(function(e){
    							 e.preventDefault();
    							 let arrprev = {srch:x.srch,
    									 page:d.pxy.prevBlock}
    							 search(arrprev);
    						 });
    			 }
    			 let i=0;
    			 for(i=d.pxy.startPage;i<=d.pxy.endPage;i++){
    				 if(d.pxy.pageNum ==i){
    					 $('<li class="page-item active"><a class="page-link">'+i+'</a></li>').css('cursor','pointer')
    					 .appendTo('.pagination')
    					 .click(function(){
    						 let arrpage = {srch:x.srch,
    								 page:$(this).text()}
    						 search(arrpage);
    					 });
    				 }else{
    					 $('<li class="page-item"><a class="page-link">'+i+'</a></li>').css('cursor','pointer')
    					 .appendTo('.pagination')
    					 .click(function(){
    						 let arrelse = {srch:x.srch,
    								 page:$(this).text()}
    						 search(arrelse);
    					 });
    				 }
    			 }
    			 if(d.pxy.existNext){
    				 $('<li class="page-item">'
    						 +'  <a class="page-link" aria-label="Next">'
    						 +'    <span aria-hidden="true">&raquo;</span>'
    						 +'    <span class="sr-only">Next</span>'
    						 +'  </a>'
    						 +'</li>').css('cursor','pointer').appendTo('.pagination')
    						 .click(function(){
    							 let arrnext = {srch:x.srch,
    									 page:d.pxy.nextBlock}
    							 search(arrnext);
    						 });
    				 
    			 };
    		 }else{
    			 nosrch();
    		 }
    	 }); 
     }
     let nosrch =()=>{
         $('.tableB').empty();
         $('<span class="resultBody">검색결과가 없습니다.</span>').appendTo('.tableB');
         $('.serchBt').click(function(){
             let val =$('#search_form').val();
               if(val==''||val.length<2){
               }else{
            	   $('.tableB').empty();
                   $('<table class="ty01">'
                			+'							<colgroup>'
                			+'								<col width="40">'
                			+'								<col width="*">'
                			+'								<col width="155">'
                			+'								<col width="100">'
                			+'							</colgroup>'
                			+'							<thead>'
                			+'								<tr>'
                			+'									<th>번호</th>'
                			+'									<th>제목</th>'
                			+'									<th>등록일</th>'
                			+'									<th>조회수</th>'
                			+'								</tr>'
                			+'							</thead>'
                			+'							<tbody id="main_content"></tbody></table>').appendTo('.tableB');
               }
           });
           $('#search_form').keypress(function(e){
             if (e.which == 13){
                 let val =$('#search_form').val();
                 if(val==''||val.length<2){
                 }else{
              	   $('.tableB').empty();
                   $('<table class="ty01">'
                			+'							<colgroup>'
                			+'								<col width="40">'
                			+'								<col width="*">'
                			+'								<col width="155">'
                			+'								<col width="100">'
                			+'							</colgroup>'
                			+'							<thead>'
                			+'								<tr>'
                			+'									<th>번호</th>'
                			+'									<th>제목</th>'
                			+'									<th>등록일</th>'
                			+'									<th>조회수</th>'
                			+'								</tr>'
                			+'							</thead>'
                			+'							<tbody id="main_content"></tbody></table>').appendTo('.tableB');
                 }
             }
           });
     };
     let detail =(x,y)=>{
    	 $('#once').empty();
    	 $.getJSON($.ctx()+'/detail/'+x,d=>{
    	   $.getScript($.js()+'/component/kth_compo.js',()=>{
    		   $(kth_compo.cs_detail()).appendTo('#once');
    		   $('#nav2 a').attr('class', '');
    		   $('#kth2').attr('class', 'on');
    		   $('.titB').empty();
    		   $('        <strong class="tit">'+d.cuse.title+'</strong><span><em>등록일'
    					+'            '+d.cuse.cdate+'<i>|</i><em>조회수 '+d.cuse.views+'</em>'
    					+'        	</em></span>').appendTo('.titB');
    		   $('#content').empty();
    		   $('<li>'+d.cuse.content+'</li>').appendTo('#content');
    		   $('.btnTy01').css('cursor','pointer').click(function(){
    		         $('#once').empty();
    		           $.getScript($.js()+'/component/kth_compo.js',()=>{
    		                $(kth_compo.cs_form()).appendTo('#once').css('margin-left','-80px');
    		               $('#nav2 a').attr('class', '');
    		               $('#kth2').attr('class', 'on');
    		               if(y.srch==null){
    		                   $('.serchBt').click(function(){
    		                       let val =$('#search_form').val();
    		                         if(val==''||val.length<2){
    		                             alert('잘못된 입력입니다');
    		                         }else{
    		                             let arr = {srch:val,
    		                                     page:1}
    		                             search(arr);
    		                         }
    		                     });
    		                     $('#search_form').keypress(function(e){
    		                       if (e.which == 13){
    		                           let val =$('#search_form').val();
    		                           if(val==''||val.length<2){
    		                                alert('잘못된 입력입니다');
    		                           }else{
    		                                let arr = {srch:val,
    		                                          page:1}
    		                                search(arr);
    		                           }
    		                       }
    		                     });
    		            	   list(y);
    		               }else{
    		            	   $('.serchBt').click(function(){
    		                       let val =$('#search_form').val();
    		                         if(val==''||val.length<2){
    		                             alert('잘못된 입력입니다');
    		                         }else{
    		                             let arr = {srch:val,
    		                                     page:1}
    		                             search(arr);
    		                         }
    		                     });
    		                     $('#search_form').keypress(function(e){
    		                       if (e.which == 13){
    		                           let val =$('#search_form').val();
    		                           if(val==''||val.length<2){
    		                                alert('잘못된 입력입니다');
    		                           }else{
    		                                let arr = {srch:val,
    		                                          page:1}
    		                                search(arr);
    		                           }
    		                       }
    		                     });
    		            	   search(y);	
    		            	   
    		               }
    		           });
    		   });
    	   })
    	 });
     };
     return{init:init};
})();
//******************
//@ 작성일 : 2019-05-17
//@ 작업자 : 남 기 호(namgiho96@gmail.com)
//@ 기 능 : 차트, 실시간 매수매도 
//@ 참조기능 : am차트
//******************
var ngh=ngh || {};

ngh=(()=>{
	let id = sessionStorage.getItem('info');
	let init=(x)=>{
		ngh.$.init(x);
	};
	let onCreate=()=>{	
		setContentView();
	};
	let setContentView=()=>{
		once_chart();

        $.getScript($.js()+'/component/kth_compo.js',()=>{
            $.getScript($.js()+'/team/chat.js',()=>{
         	   $('#chat_coin').remove();
                $(kth_compo.coin_chat()).appendTo('.bgWhite');
                chat.init();
            });
        });
        
		$.getScript($.js()+'/component/ngh_compo.js',()=>{			  
			  $('.top a').eq(2).click(function(){
				  $('.top a').attr('class', '');
				  $('.top li').attr('class', 't4');
		          $(this).attr('class', 'on');
		     	  $('#b').empty();
		     	  $(ngh_compo.trx()).appendTo('#b');
		     	  $.ajax({
		          	 url:$.ctx()+'/retrieve_trx/'+id,
		          	 data:id,
		          	 type:'GET',
		          	 dataType:'json',
		          	 contentType:'application/json',
		          	 success:s=>{
		          		//	주문시간 trx	구분 trx	체결가격trx	체결수량 trx	체결금액trx
		          		 	$('#trx').empty();
		          		 	$.each(s.ls, (i,j)=>{
		          		 		switch(j.rw){
		          		 		case '매수':
		          		 			$('#trx').append('<tr class="up">'
											+'<td><p>'+j.date+'</p></td>'
											+'<td>'+j.rw+'</td>'
											+'<td class="rAlign"><p>'+j.nprice+'</p></td>'
											+'<td class="rAlign"><p>'+j.unit+'</p></td>'
											+'<td class="rAlign"><p>'+j.tprice+'</p></td>'
											+'</tr>');
		          		 			break;
		          		 		case '매도':
		          		 			$('#trx').append('<tr class="down">'
											+'<td><p>'+j.date+'</p></td>'
											+'<td>'+j.rw+'</td>'
											+'<td class="rAlign"><p>'+j.nprice+'</p></td>'
											+'<td class="rAlign"><p>'+j.unit+'</p></td>'
											+'<td class="rAlign"><p>'+j.tprice+'</p></td>'
											+'</tr>');
		          		 			break;
		          		 		}
				          	});
		          	 },
		          	 error:e=>{
		          		 alert('실패');
		          	 }
		           });
			  	});
			  
			  $('#chr_1').empty();
			  	$(ngh_compo.chr()).appendTo('#chr_1');
			  	$.getJSON($.ctx()+'/retrieve_all_trx',d=>{
                  $('#bt_ty01').attr('class', '');
                  $(this).attr('class', 'on');
                  $('#bt_list').empty();
                  $.each(d.ls, (i,j)=>{
                		switch(j.rw){
          		 		case '매수':
          		 			$('#bt_list').append('<tr>'
                        			+'<td class="lAlign">'+j.date+'</td>'
                        			+'<td class="up" style="text-align: center;"><strong>'+j.nprice+' <i>KRW </i></strong></center></td>'
                        			+'<td class="up" style="text-align: center;"><strong>'+j.unit+' <i>ONCE </i></strong></center></td>'
                        			+'<td><strong>'+j.unit*j.nprice+' <i>KRW </i></strong></td>'
                        			+'</tr>');
          		 			break;
          		 		case '매도':
          		 		  $('#bt_list').append('<tr>'
                        			+'<td class="lAlign">'+j.date+'</td>'
                        			+'<td class="up" style="text-align: center;"><strong>'+j.nprice+' <i>KRW </i></strong></center></td>'
                        			+'<td class="down" style="text-align: center;"><strong>'+j.unit+' <i>ONCE </i></strong></center></td>'
                        			+'<td><strong>'+j.unit*j.nprice+' <i>KRW </i></strong></td>'
                        			+'</tr>');
          		 			break;
          		 		}
                  });
			  	});

             })
	};
	/*once 차트 */
	let once_chart=()=>{
		$.getJSON($.ctx()+'/ngh/once/price',d=>{
			/*왼쪽 값*/
			let tp = new Array();
			$.each(d.ls,(i,j)=>{
				tp[i] = j.price;
			});
			 $('#l_val').empty();
			 let prev1 = (tp[0] - tp[1]) / tp[1] *100;
			 let minue = tp[0] - tp[1]
			 let col = "";
			 let giho = "";
			 if (tp[0] > tp[1]) {
				col = "up";
				giho = "+";
			}else{
				col = "down";
				/*giho = "-";*/
			};
			 $('<div id="l_val">'
					 +'	<div class="'+col+' ty01">'
					 +'		<span class="first">'
					 +'		 <strong id="now_price">'+tp[0]+'</strong>'
					 +'		  <em>KRW</em>'
					 +'		  </span>'
					 +'		  <span>'
					 +'		  <p class="tit">전일대비</p> '
					 +'			<strong>'+giho+''+prev1.toFixed(2)+'%</strong>'
					 +'		<strong class="upDown">'+giho+''+minue+'</strong></span>'
					 +'	</div>'
					 +'	</div>').appendTo('.marketB');
			 
			 /*오른쪽 네비*/
			 $('#r_root').empty();
				let arr={txt : '원스코인', name : 'once'};	 
					$('<tbody>'
						 +'	<tr class="'+col+' on">'
						 +'		<td>'
						 +'			<span class="bookmark">'
						 +'				<a href="#">즐겨찾기</a>'
						 +'			</span>'
						 +'		</td>'
						 +'		<td class="cAlign"><a href="#">'
						 +'				<div class="bar down">'
						 +'					<span class="line" style="top: 13.3682px; height: 0.519935px;">-</span>'
						 +'					<span class="box" style="top: 13.5px; height: 1px;">-</span>'
						 +'				</div>'
						 +'			</a>'
						 +'		</td>'
						 +'		<td class="tit">'
						 +'			<a href="#">'
						 +'				 <strong>'+arr.txt+'</strong>'
						 +'			</a>'
						 +'		 	<em>BTC<span>/KRW</span></em>'
						 +'		</td>'
						 +'		<td class="price">'
						 +'			<strong>'+tp[0]+'</strong>'
						 +'			<span class=""> </span>'
						 +'		</td>'
						 +'		<td class="percent">'
						 +'			<p>'+giho+''+prev1.toFixed(2)+'%</p>'
						 +'			<em>'+giho+''+minue+'</em>'
						 +'		</td>'
						 +'		<td class="rAlign">'
						 +'			<p>40,636<i>백만</i></p>'
						 +'		</td>'
						 +'	</tr>	'
					 +'</tbody>')
					  .attr('name', arr.name)
		              .appendTo('.highlight')
		              .click(function(){
		                  let that = $(this).attr('name');
		                  alert('아직 준비중입니다');
		             });
					/*click*/
				/*each*/
				
			//매수 	
				
				$.getScript($.js()+'/component/ngh_compo.js',()=>{
					  if(sessionStorage.getItem('session') === null){
						  $('.top a').eq(0).
						  attr('class', 'on');
						  $('.top li').attr('class', 't2');
						  $('#b').empty();
						  $(ngh_compo.l_buy()).appendTo('#b');
						  $('#priceall').remove();
						  $( '<input id="priceall" type="text" class="txt All" value="'+tp[0]+'">')
						  .prependTo('.marginB101');
						  $(' <li class="ty04"><a title="매수">매수</a></li>')
						  	.appendTo('#btn_mesu');
						  $('#btn_mesu').empty();
						  $('<li class="ty02 login"><a title="로그인" id="login2">로그인</a>').appendTo('#btn_mesu');
						  $('#login2').click(e=>{
							  e.preventDefault();
					          location.assign($.ctx()+"/ksa");
						  });

					  }else{
						  $('.top a').eq(0).
						  attr('class', 'on');
						  $('.top li').attr('class', 't2');
						  $('#b').empty();
						  $(ngh_compo.l_buy()).appendTo('#b');
						  $('#priceall').remove();
						  $( '<input id="priceall" type="text" class="txt All" value="'+tp[0]+'">')
						  .prependTo('.marginB101');
						  $('#count').change(function(){
				              $('#allpr').attr('value', tp[0]*$('#count').val());
				          });
						  $(' <li class="ty04"><a title="매수">매수</a></li>')
						  	.appendTo('#btn_mesu');
						  $('#btn_mesu').empty();
						  $.getJSON($.ctx()+'/ngh/mycoin/'+id,d=>{			  
							  $('#my_money').empty();
							  $('<strong>'+d.rs.money+'</strong> <i>KRW</i>').appendTo('#now_money');
							  $(' <li class="ty04"><a title="매수">매수</a></li>')
							  	.appendTo('#btn_mesu');
							  $('#btn_mesu').click(e=>{
								  let price = tp[0];
								  let unit = $('#count').val();	  		
							  		let tprice = price*unit;					  
							  		if(d.rs.money>=tprice){
									  $.getJSON($.ctx()+'/ngh/buy/'+unit+'/'+price+'/'+id+'/'+tprice,d=>{				        	  
							        	alert('매수가 완료되었습니다');
							           	e.preventDefault();
							            location.assign($.ctx()+"/ngh");
							          });
								  }else{
									  alert('보유금액보다 매수 금액이 많습니다.');
								  }
							  });
						  });
					  }
			//매수 
        
			 //top 매수 버튼 눌렀을때
					  
					  $('.top a').eq(0).click(function(){
						  if(sessionStorage.getItem('session') === null){
							  $('.top a').attr('class', '');
							  $('.top li').attr('class', 't2');
					          $(this).attr('class', 'on');
							  $('#b').empty();
							  $(ngh_compo.l_buy()).appendTo('#b');
							  $('#priceall').remove();
							  $( '<input id="priceall" type="text" class="txt All" value="'+tp[0]+'">')
							  .prependTo('.marginB101');
							  $(' <li class="ty04"><a title="매수">매수</a></li>')
							  	.appendTo('#btn_mesu');
							  $('#btn_mesu').empty();
							  $('<li class="ty02 login"><a title="로그인" id="login2">로그인</a>').appendTo('#btn_mesu');
							  $('#login2').click(e=>{
								  e.preventDefault();
						          location.assign($.ctx()+"/ksa");
						  });
						  }else{
							  $('#my_money').empty();
							  $('.top a').attr('class', '');
							  $('.top li').attr('class', 't2');
					          $(this).attr('class', 'on');
							  $('#b').empty();
							  $(ngh_compo.l_buy()).appendTo('#b');
							  $('#priceall').remove();
							  $( '<input id="priceall" type="text" class="txt All" value="'+tp[0]+'">')
							  .prependTo('.marginB101');
							  $('#count').change(function(){
					              $('#allpr').attr('value', tp[0]*$('#count').val());
					          });
							  $.getJSON($.ctx()+'/ngh/mycoin/'+id,d=>{			  
								  $('#my_money').empty();
								  $('<strong>'+d.rs.money+'</strong> <i>KRW</i>').appendTo('#now_money');
								  $(' <li class="ty04"><a title="매수">매수</a></li>')
								  	.appendTo('#btn_mesu');
								  $('#btn_mesu').click(()=>{
									  let price = tp[0];
									  let unit = $('#count').val();	  		
								  		let tprice = price*unit;					  
								  		if(d.rs.money>=tprice){
										  $.getJSON($.ctx()+'/ngh/buy/'+unit+'/'+price+'/'+id+'/'+tprice,d=>{				        	  
								        	  alert('매수가 성공하였습니다');
									          	e.preventDefault();
									            location.assign($.ctx()+"/ngh");
								          });
									  }else{
										  alert('보유금액보다 매수 금액이 많습니다.');
									  }
								  });
							  	});
						  }
					 });
			  //매수 버튼 눌렀을때
			 
			  //매도
			$('.top a').eq(1).click(function(){ 
			  if(sessionStorage.getItem('session') === null){
				  $('.top a').attr('class', '');
				  $('.top li').attr('class', 't3');
		          $(this).attr('class', 'on');
				  $('#b').empty();
				  $(ngh_compo.l_medo()).appendTo('#b');
				  $('#now_val').remove();
				  $( '<input id="now_val" type="text" class="txt All" value="'+tp[0]+'">')
			  		.prependTo('.marginB1010');	
				  $('#btn_medo').empty();
				  $('<a title="로그인" id="login2">로그인</a>').appendTo('#btn_medo');
				  $('#login2').click(e=>{
					  e.preventDefault();
			          location.assign($.ctx()+"/ksa");
				  });
				  
			  }else{
				  $.ajax({
	                   	 url:$.ctx()+'/retrieve_cust/'+id,
	                   	 data:id,
	                   	 type:'POST',
	                   	 dataType:'json',
	                   	 contentType:'application/json',
	                   	 success:d=>{
	                   		 var hqua = d.hqua;
	                   		 $('.top a').attr('class', '');
		       				  $('.top li').attr('class', 't3');
		       		          $(this).attr('class', 'on');
		       				  $('#b').empty();
		       				  $(ngh_compo.l_medo()).appendTo('#b');
		       				  
		       				  $('#docount').change(function(){
		       					  $('#allprme').attr('value', tp[0]*$('#docount').val());
		       				  });
		       				  $.getJSON($.ctx()+'/ngh/mycoin/'+id,d=>{	
		       					  $('#my_money').empty();
		       					  $('<strong>'+hqua+'</strong> <i>ONCE</i>').appendTo('#now_money');
		       					  $('#now_val').remove();
		       					  $( '<input id="now_val" type="text" class="txt All" value="'+tp[0]+'">')
		       				  		.prependTo('.marginB1010');	
		       					  $('#btn_medo').click(e=>{
		       						  let unit = $('#docount').val();
    								  if(unit <= hqua){
    									  let price = tp[0];
								  		  let tprice = price*unit;
								          $.getJSON($.ctx()+'/ngh/medo/'+unit+'/'+price+'/'+id+'/'+tprice,d=>{
								        		e.preventDefault();
									            location.assign($.ctx()+"/ngh");
								          });
    								  }else{
    									  alert('보유코인 갯수 보다 많습니다.');
    								  };
		       					  	});
		       			  		});
	                   	 },
	                   	 error:e=>{
	                   		 alert('실패!');
	                   	 }
	                    });
			  	};
			 });
			  //매도

			  });
			  //매도;
			  let ar =[{va:'일시:',tx:d.date},{va:'가격:',tx: tp[0]}];
			  $('#sub_main').empty();
			  $.each(ar,(i,j)=>{
				  $('<stx-hu-tooltip-field auto=""> '
						  +'<stx-hu-tooltip-field-name>'+j.va+'</stx-hu-tooltip-field-name>'
						  +'<stx-hu-tooltip-field-value>'+j.tx+'</stx-hu-tooltip-field-value>'
						  +'</stx-hu-tooltip-field>').appendTo('#sub_main');
			  });
	});
	
	}
	return{init:init,
		onCreate:onCreate};
})();
ngh.$ = {
        init : (x)=>{
            $.getScript(x+'/resources/js/router.js',()=>{
                $.extend(new Session(x));
                ngh.onCreate();
                })
            }
        };
var chartData1 = [];
var chart;
function generateChartData() {
  $.ajax({
		url : '/web/ngh/ch',
		type : 'get',
	  dataType:'json',
		success : d =>{
					var ls = d.ls;
					let i = 0;
					for ( i = 0; i < ls.length; i++ ) {
					    newDate = ls[i].date;
					    let a1 = ls[i].price;
					    chartData1.push({"date": newDate, "value": a1});
					}
					chart = AmCharts.makeChart( "chartdiv",{
						  "type": "stock",
						  "theme": "light",
						  "glueToTheEnd": true,
					    "categoryAxesSettings": {
					        "minPeriod": "ss",
					        "groupToPeriods": [ 'ss', 'ss' ], 
					        "autoGridCount" : false, 
					        "dateFormats" : [{
					            "period": 'fff',
					            "format": 'JJ:NN:SS'
					        }, {
					            "period": 'ss',
					            "format": 'HH:NN:SS'
					        }, {
					            "period": 'mm',
					            "format": 'JJ:NN'
					        }, {
					            "period": 'hh',
					            "format": 'JJ:NN'
					        }, {
					            "period": 'DD',
					            "format": 'MMM DD'
					        }, {
					            "period": 'WW',
					            "format": 'MMM DD'
					        }, {
					            "period": 'MM',
					            "format": 'MMM YYYY'
					        }, {
					            "period": 'YYYY',
					            "format": 'MMM YYYY'
					        }],
					    },
					    
					    "valueAxesSettings": {
					    	"inside" : false,
					    	"showLastLabel" : false, 
					    },
					    
					  "chartCursorSettings": {
						    "valueBalloonsEnabled": true
						  },
						"panelsSettings" : {
							  "marginLeft" : 50,
						},
						  "dataSets": [{
						    "title": "coin price",
						    "fieldMappings": [ {
						      "fromField": "value",
						      "toField": "value"
						    }, {
						      "fromField": "volume",
						      "toField": "volume"
						    } ],
						    
						    "dataProvider": chartData1,
						    "categoryField": "date",
						  }
						  ],
						  "panels": [ {
						    "showCategoryAxis": true,
						    "marginLeft" : 100,
						    "title": "Price",
						    "percentHeight": 60,
						    "stockGraphs": [ {
						      "id": "g1",
						      "valueField": "value",
						    } ],
						    "stockLegend": {}
						  }
						  ],
						  "chartScrollbarSettings": {
							"enabled" : false,
						  },
						  "listeners": [{
						    "event": "rendered",
						    "method": function( event ){
						    }
						  }]
						});
					setInterval( function() {
						$.getJSON('/web/ngh/once',d=>{
							   	newDate = d.ls[0].date;
							   	var realltimeDate = new Date(newDate);
							    let a1 = d.ls[0].price;
							    let b1 = d.ls[0].price;
							  chart.dataSets[0].dataProvider.push( {
							    date: newDate,
							    value: a1
							  });
						})
						  chart.validateData();
						}, 1000 * 10 );
		 },
		 error : e =>{
			alert('ajax 실패'); 
		 }
	}
  );
}
generateChartData();


am4core.ready(function() {

	am4core.useTheme(am4themes_material);
	am4core.useTheme(am4themes_animated);
	
	var chart = am4core.create("chartdiv_1", am4charts.XYChart);
	var data = [];
	 $.ajax({
			url : '/web/ngh/once/oncechart',
			type : 'get',
		  dataType:'json',
			success : d =>{
						let i = 0;
						for ( i = 0; i < d.ls.length; i++ ) {
							 let date = new Date();
						    date = d.ls[i].date;
						    value = d.ls[i].price;
						    data.push({date:date, value: value});
						}
						chart.data = data;
						var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
						dateAxis.renderer.minGridDistance = 60;
						var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
						var series = chart.series.push(new am4charts.LineSeries());
						series.dataFields.valueY = "value";
						series.dataFields.dateX = "date";
						series.tooltipText = "{value}"
						series.tooltip.pointerOrientation = "vertical";
						chart.cursor = new am4charts.XYCursor();
						chart.cursor.snapToSeries = series;
						chart.cursor.xAxis = dateAxis;

			 },
			 error : e =>{
				alert('ajax 실패'); 
			 }
		});

	}); 
//******************
//@ 작성일 : 2019-05-17
//@ 작업자 : 박 정 우(gorani4545@gmail.com)
//@ 기 능 :
//******************
am4core.ready(function() {

	am4core.useTheme(am4themes_material);
	am4core.useTheme(am4themes_animated);

	var chart = am4core.create("chartdiv_2", am4charts.XYChart);

	var data = [];
	var value = 1000;
	for(let i = 0; i < 300; i++){
	  let date = new Date();
	  date.setHours(0,0,0,0);
	  date.setDate(i);
	  value -= Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 100);
	  data.push({date:date, value: value});
	  
	}
	
	$('.app__header--2OuvG span').text(JSON.stringify(data[299].value));
	$('.app__header--2OuvG span').attr('class','');
	chart.data = data;
	
	
	
	// Create axes
	var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
	dateAxis.renderer.minGridDistance = 60;
	

	var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

	// Create series
	var series = chart.series.push(new am4charts.LineSeries());
	series.dataFields.valueY = "value";
	series.dataFields.dateX = "date";
	series.tooltipText = "{value}"
		
	series.tooltip.pointerOrientation = "vertical";

	chart.cursor = new am4charts.XYCursor();
	chart.cursor.snapToSeries = series;
	chart.cursor.xAxis = dateAxis;


	}); 