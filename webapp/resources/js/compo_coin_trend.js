var kth_compo = kth_compo||{};

kth_compo ={
	cs_form : ()=>{
		return '<div class="subMain">'
		+'	<div class="subMain" style="margin-left: -50px;">'
		+'		<section class="ty02">'
		+'			<article>'
		+'				<div class="inforB">'
		+'					<h3>공지사항 </h3>'
		+'					<div class="NoticeSerch">'
		+'						<div class="input">'
		+'							<input type="text" id="search_form" placeholder="검색어를 입력해주세요." value="">'
		+'							<a href="#" class="btnclose" title="닫기">닫기</a>'
		+'						</div>'
		+'						<a class="serchBt" href="#">검색</a>'
		+'					</div>'
		+'					<div class="tableB">'
		+'						<table class="ty01">'
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
		+'							<tbody id="main_content">'
		+'								<tr>'
		+'									<td class="lAlign"><a href="/service_center/notice?id=815">[암호화폐] 4월 3주차 GAS, ONG 지급 안내</a></td>'
		+'									<td>2019.04.22</td><td class="rAlign">58249</td>'
		+'								</tr>'
		+'								<tr>'
		+'									<td class="lAlign"><a href="/service_center/notice?id=814">[입출금] 베리블록 VBK 입출금 지원</a></td>'
		+'									<td>2019.04.19</td><td class="rAlign">313186</td>'
		+'								</tr>'
		+'								<tr>'
		+'									<td class="lAlign"><a href="/service_center/notice?id=813">[암호화폐] 3월 NPXS 지급 안내</a></td>'
		+'									<td>2019.04.19</td>'
		+'									<td class="rAlign">85085</td>'
		+'								</tr>'
		+'								<tr>'
		+'									<td class="lAlign"><a href="/service_center/notice?id=812">[안내] 업비트 임직원 및 업비트 메일 주소 사칭 메일 주의 안내</a></td>'
		+'									<td>2019.04.18</td>'
		+'									<td class="rAlign">138483</td>'
		+'								</tr>'
		+'								<tr>'
		+'									<td class="lAlign"><a href="/service_center/notice?id=811">[입출금] 크라운(CRW) 입출금 재개 안내 (입금 주소 신규 발급 필수)</a></td>'
		+'									<td>2019.04.17</td>'
		+'									<td class="rAlign">237466</td>'
		+'								</tr>'
		+'								<tr>'
		+'									<td class="lAlign"><a href="/service_center/notice?id=810">[암호화폐] 비트토렌트(BTT) 3차 에어드랍 지급 안내</a></td>'
		+'									<td>2019.04.17</td>'
		+'									<td class="rAlign">98381</td>'
		+'								</tr>'
		+'								<tr>'
											+'<td class="lAlign"><a href="/service_center/notice?id=809">[업데이트] 업비트 개선 사항 : 현금영수증 발급, 공유하기 및 매수평균가 표시 기능 추가</a></td>'
		+'									<td>2019.04.16</td>'
		+'									<td class="rAlign">167708</td>'
		+'								</tr>'
		+'								<tr><td class="lAlign"><a href="/service_center/notice?id=808">[안내] 개인정보처리방침 변경 안내</a></td><td>2019.04.16</td>'
		+'									<td class="rAlign">117183</td>'
		+'								</tr>'
		+'								<tr>'
		+'									<td class="lAlign"><a href="/service_center/notice?id=807">[거래] BTC 마켓 코인 추가 (피체인 PI)</a></td>'
		+'									<td>2019.04.16</td>'
		+'									<td class="rAlign">148653</td>'
		+'								</tr'
		+'								><tr>'
											+'<td class="lAlign"><a href="/service_center/notice?id=806">[입출금] 티티씨프로토콜(TTC) 입출금 재개 안내 (입금 주소 신규 발급 필수)</a></td>'
		+'									<td>2019.04.16</td>'
		+'									<td class="rAlign">157425</td>'
		+'								</tr>'
		+'								<tr>'
		+'									<td class="lAlign"><a href="/service_center/notice?id=805">[점검 완료] 서버 점검 안내 (완료)</a></td>'
		+'									<td>2019.04.15</td>'
		+'									<td class="rAlign">250132</td>'
		+'								</tr>'
		+'								<tr>'
		+'									<td class="lAlign"><a href="/service_center/notice?id=804">[암호화폐] 4월 2주차 GAS, ONG 지급 안내</a></td><td>2019.04.15</td>'
		+'									<td class="rAlign">66448</td>'
		+'								</tr>'
		+'								<tr>'
		+'									<td class="lAlign"><a href="/service_center/notice?id=803">[암호화폐] 에이콘토큰(ACN) 1차 에어드랍 지급 안내</a></td>'
		+'									<td>2019.04.12</td>'
		+'									<td class="rAlign">342884</td>'
		+'								</tr>'
		+'								<tr>'
		+'									<td class="lAlign"><a href="/service_center/notice?id=801">[점검] 긴급 서버 점검 안내 (완료)</a></td><td>2019.04.11</td>'
											+'<td class="rAlign">114485</td></tr><tr><td class="lAlign"><a href="/service_center/notice?id=800">[이벤트] 티티씨프로토콜(TTC) 원화마켓 오픈 이벤트 : TOP 트레이딩 이벤트 (당첨 안내)</a></td>'
		+'										<td>2019.04.11</td>'
		+'										<td class="rAlign">211029</td>'
		+'									</tr>'
		+'									<tr>'
												+'<td class="lAlign"><a href="/service_center/notice?id=799">[안내] 업비트는 비트렉스 연동 마켓을 정상적으로 거래 지원 합니다.</a></td>'
		+'										<td>2019.04.11</td>'
		+'										<td class="rAlign">85259</td>'
		+'									</tr>'
		+'									<tr>'
												+'<td class="lAlign"><a href="/service_center/notice?id=798">[안내] 특정 암호화폐 업비트 상장 관련 유언비어에 대한 입장 안내</a></td>'
		+'										<td>2019.04.10</td>'
		+'										<td class="rAlign">96799</td>'
		+'									</tr>'
		+'									<tr>'
												+'<td class="lAlign"><a href="/service_center/notice?id=797">[입출금] BitGo 장애로 인한 BTC, XRP, LTC, BTG 입출금 지원 일시 중단 (완료)</a></td>'
		+'										<td>2019.04.10</td>'
		+'										<td class="rAlign">83963</td>'
		+'									</tr>'
		+'									<tr>'
		+'										<td class="lAlign"><a href="/service_center/notice?id=796">[거래] BTC 마켓 코인 추가 (아르고 AERGO)</a></td>'
		+'										<td>20F9.04.10</td>'
		+'										<td class="rAlign">156562</td>'
		+'									</tr>'
		+'									<tr>'
		+'										<td class="lAlign"><a href="/service_center/notice?id=795">[안내] 디센트럴랜드(MANA) 크리에이터 콘테스트 진행 안내 (완료)</a></td>'
		+'										<td>2019.04.10</td>'
		+'										<td class="rAlign">97182</td>'
		+'									</tr>'
		+'								</tbody>'
		+'							</table>'
		+'						</div>'
		+'					</div>'
		+'<div style="text-align: center;">'
		+'<nav aria-label="Page navigation example">'
		+'  <ul class="pagination">'
		+'    <li class="page-item">'
		+'      <a class="page-link" href="#" aria-label="Previous">'
		+'        <span aria-hidden="true">&laquo;</span>'
		+'        <span class="sr-only">Previous</span>'
		+'      </a>'
		+'    </li>'
		+'    <li class="page-item"><a class="page-link" href="#">1</a></li>'
		+'    <li class="page-item"><a class="page-link" href="#">2</a></li>'
		+'    <li class="page-item"><a class="page-link" href="#">3</a></li>'
		+'    <li class="page-item">'
		+'      <a class="page-link" href="#" aria-label="Next">'
		+'        <span aria-hidden="true">&raquo;</span>'
		+'        <span class="sr-only">Next</span>'
		+'      </a>'
		+'    </li>'
		+'  </ul>'
		+'</nav>'
		+'</div>'
		+'				</article>'
		+'			</section>'
		+'		</div>'
		+'	</div>'
	},
	cs_detail :()=>{
		return'<div class="subMain" style="margin-left: -50px;">'
		+'	<div class="subMain">'
		+'<section class="ty02">'
		+'<article>'
		+'  <div class="inforB">'
		+'    <h3>공지사항</h3>'
		+'    <div class="viewB">'
		+'      <div class="titB">'
		+'        <strong class="tit">[점검 완료] 서버 점검 안내 (완료)</strong><span><em>등록일'
		+'            2019.03.29 11:47<i>|</i><em>조회수 113690</em>'
		+'        </em></span>'
		+'      </div>'
		+'      <div class="txtB">'
		+'        <p>'
		+'        <div id="markdown_notice_body">'
		+'          <p>안녕하세요. once 입니다.</p>'
		+'          <p>기다려 주셔서 감사합니다.</p>'
		+'          <hr>'
		+'          <p>'
		+'            서버 최적화 작업을 위해 항상 최선을 다하겠습니다.<br>'
		+'            원화마켓의 주문 중 하단 주문 취소 조건에 해당하는 주문은 회원님들의 자산 보호와 안전한 거래를 위해 취소 예정이오니,'
		+'            원화마켓을 이용하시는 회원님들께서는 해당 내용을 반드시 확인해주시기 바랍니다.'
		+'          </p>'
		+'          <ul id="content">'
		+'            <li>2019-05-08 03:00 ~ 05:00 (약 2시간 예정)</li>'
		+'            <li>점검 완료 시간은 예정보다 빠르거나 늦어질 수 있으며, 완료 시 추가 안내드리겠습니다.<br>'
		+'              *암호화폐 입출금의 경우는 2019-05-08 01:00 부터 일시 중단됩니다.'
		+'            </li>'
		+'          </ul>'
		+'        </div>'
		+'        </p>'
		+'      </div>'
		+'    </div>'
		+'      <div class="btnRight">'
		+'        <a class="btnTy01" title="목록">목록</a>'
		+'      </div>'
		+'  </div>'
		+'</article>'
		+'</section>'
		+'</div>'
		+'</div>'
	},
	coin_art : ()=>{
		return '<div class="trends">'
		+'        <div class="mainB">'
		+'            <section class="ty01">              '
		+'                <div id="wordSpace"></div>'
		+'<div style="width: 40%;">'

		+'</div>'
		+'<script src="https://d3js.org/d3.v3.min.js"></script>'
		+'                <article>'
		+'                    <span class="titB"><strong><a'
		+'                            href="https://www.ubcindex.com" target="_blank"'
		+'                            rel="noopener noreferrer">UBCI 인덱스</a></strong><span class="tabB tabR"><ul'
		+'                                class="col4">'
		+'                                <li><a href="#" class="on" title="전체">전체</a></li>'
		+'                                <li><a href="#" class="" title="시장 인덱스">시장 인덱스</a></li>'
		+'                                <li><a href="#" class="" title="테마 인덱스'
		+'">테마 인덱스 </a></li>'
		+'                                <li><a href="#" class="" title="전략 인덱스">전략 인덱스</a></li>'
		+'                            </ul></span></span>'
		+'                    <table class="highlight tbl_index">'
		+'                        <colgroup>'
		+'                            <col width="184">'
		+'                            <col width="*">'
		+'                            <col width="170">'
		+'                            <col width="120">'
		+'                            <col width="120">'
		+'                            <col width="9">'
		+'                        </colgroup>'
		+'                        <thead>'
		+'                            <tr>'
		+'                                <th>인덱스명</th>'
		+'                                <th>개요</th>'
		+'                                <th><a href="#" title="전일대비">전일대비 <img'
		+'                                        src="https://cdn.upbit.com/images/ico_up_down_2.a48699e.png"'
		+'                                        alt=""></a></th>'
		+'                                <th><a href="#" title="1개월">1개월 <img'
		+'                                        src="https://cdn.upbit.com/images/ico_up_down.0a6c534.png"'
		+'                                        alt=""></a></th>'
		+'                                <th><a href="#" title="3개월">3개월 <img'
		+'                                        src="https://cdn.upbit.com/images/ico_up_down.0a6c534.png"'
		+'                                        alt=""></a></th>'
		+'                                <th>&nbsp;</th>'
		+'                            </tr>'
		+'                        </thead>'
		+'                        <tbody>'
		+'                            <tr>'
		+'                                <th><p class="name">'
		+'                                        <a href="https://www.ubcindex.com/indexes/IDX.UPBIT.THMIDX03"'
		+'                                            target="_blank" rel="noopener noreferrer">예측시장</a><span>2개'
		+'                                            코인</span>'
		+'                                    </p></th>'
		+'                                <td><p class="txt">'
		+'                                        <a href="https://www.ubcindex.com/indexes/IDX.UPBIT.THMIDX03"'
		+'                                            target="_blank" rel="noopener noreferrer">특정한 사건에 대한'
		+'                                            참가자들의 예측을 기반으로 한 예측시장 플랫폼 구축을 목적으로 하는 암호화폐로 구성된 테마인덱스 </a>'
		+'                                    </p></td>'
		+'                                <td><p class="change up">'
		+'                                        <strong>629.20</strong><span><i>41.67</i>+7.09%</span>'
		+'                                    </p></td>'
		+'                                <td><p class="up">+57.11%</p></td>'
		+'                                <td><p class="up">+48.05%</p></td>'
		+'                                <td>&nbsp;</td>'
		+'                            </tr>'
		+'                            <tr>'
		+'                                <th><p class="name">'
		+'                                        <a href="https://www.ubcindex.com/indexes/IDX.UPBIT.THMIDX07"'
		+'                                            target="_blank" rel="noopener noreferrer">데이터저장 서비스</a><span>3개'
		+'                                            코인</span>'
		+'                                    </p></th>'
		+'                                <td><p class="txt">'
		+'                                        <a href="https://www.ubcindex.com/indexes/IDX.UPBIT.THMIDX07"'
		+'                                            target="_blank" rel="noopener noreferrer">유휴 저장공간을 블록체인'
		+'                                            기술을 통해 엮음으로써, 클라우드 스토리지 서비스를 수행하는 암호화폐로 구성된 테마인덱스 </a>'
		+'                                    </p></td>'
		+'                                <td><p class="change up">'
		+'                                        <strong>619.82</strong><span><i>26.34</i>+4.44%</span>'
		+'                                    </p></td>'
		+'                                <td><p class="up">+15.13%</p></td>'
		+'                                <td><p class="up">+36.95%</p></td>'
		+'                                <td>&nbsp;</td>'
		+'                            </tr>'
		+'                            <tr>'
		+'                                <th><p class="name">'
		+'                                        <a href="https://www.ubcindex.com/indexes/IDX.UPBIT.THMIDX09"'
		+'                                            target="_blank" rel="noopener noreferrer">대출 및 신용 서비스</a><span>3개'
		+'                                            코인</span>'
		+'                                    </p></th>'
		+'                                <td><p class="txt">'
		+'                                        <a href="https://www.ubcindex.com/indexes/IDX.UPBIT.THMIDX09"'
		+'                                            target="_blank" rel="noopener noreferrer">블록체인 기술을 기반으로,'
		+'                                            기존의 은행권이 수행했던 대출이나 신용 기반의 서비스를 제공하는 암호화폐로 구성된 테마인덱스 </a>'
		+'                                    </p></td>'
		+'                                <td><p class="change up">'
		+'                                        <strong>251.44</strong><span><i>7.12</i>+2.91%</span>'
		+'                                    </p></td>'
		+'                                <td><p class="up">+96.31%</p></td>'
		+'                                <td><p class="up">+116.57%</p></td>'
		+'                                <td>&nbsp;</td>'
		+'                            </tr>'
		+'                            <tr>'
		+'                                <th><p class="name">'
		+'                                        <a href="https://www.ubcindex.com/indexes/IDX.UPBIT.THMIDX15"'
		+'                                            target="_blank" rel="noopener noreferrer">컨텐츠 생산 및 중개</a><span>11개'
		+'                                            코인</span>'
		+'                                    </p></th>'
		+'                                <td><p class="txt">'
		+'                                        <a href="https://www.ubcindex.com/indexes/IDX.UPBIT.THMIDX15"'
		+'                                            target="_blank" rel="noopener noreferrer">미디어, 엔터테인먼트와 같은'
		+'                                            컨텐츠의 생산 및 중개서비스를 지원하는 플랫폼을 가진 암호화폐로 구성된 테마인덱스 </a>'
		+'                                    </p></td>'
		+'                                <td><p class="change up">'
		+'                                        <strong>431.36</strong><span><i>4.27</i>+1.00%</span>'
		+'                                    </p></td>'
		+'                                <td><p class="up">+6.79%</p></td>'
		+'                                <td><p class="up">+3.35%</p></td>'
		+'                                <td>&nbsp;</td>'
		+'                            </tr>'
		+'                            <tr>'
		+'                                <th><p class="name">'
		+'                                        <a href="https://www.ubcindex.com/indexes/IDX.UPBIT.UBAI_ST"'
		+'                                            target="_blank" rel="noopener noreferrer">UBAI BTC quote</a><span>189개'
		+'                                            코인</span>'
		+'                                    </p></th>'
		+'                                <td><p class="txt">'
		+'                                        <a href="https://www.ubcindex.com/indexes/IDX.UPBIT.UBAI_ST"'
		+'                                            target="_blank" rel="noopener noreferrer">UBAI 인덱스를 비트코인'
		+'                                            기준으로 환산한 인덱스 </a>'
		+'                                    </p></td>'
		+'                                <td><p class="change up">'
		+'                                        <strong>679.66</strong><span><i>6.45</i>+0.96%</span>'
		+'                                    </p></td>'
		+'                                <td><p class="down">-8.48%</p></td>'
		+'                                <td><p class="down">-4.00%</p></td>'
		+'                                <td>&nbsp;</td>'
		+'                            </tr>'
		+'                        </tbody>'
		+'                    </table>'
		+'                    <a href="#" class="btnViewA">전체보기<em>▼</em></a>'
		+'                </article>'
		+'                <article>'
		+'                    <span class="titB"><strong>암호화폐</strong><span'
		+'                        class="tabB tabR"><ul class="col2">'
		+'                                <li><a href="#" class="on" title="기간별 상승률">기간별 상승률</a></li>'
		+'                                <li><a href="#" class="" title="시가총액">시가총액</a></li>'
		+'                            </ul></span></span>'
		+'                    <table class="highlight ty03">'
		+'                        <colgroup>'
		+'                            <col width="*">'
		+'                            <col width="128">'
		+'                            <col width="124">'
		+'                            <col width="124">'
		+'                            <col width="124">'
		+'                            <col width="124">'
		+'                            <col width="130">'
		+'                        </colgroup>'
		+'                        <thead>'
		+'                            <tr class="rAlignTh">'
		+'                                <th>&nbsp;</th>'
		+'                                <th class="lAlign"><a href="#">KRW 마켓 <img'
		+'                                        src="https://cdn.upbit.com/images/ico_change.d5d17b3.png"'
		+'                                        alt=""></a></th>'
		+'                                <th class="selected"><a href="#">1주일 <img'
		+'                                        src="https://cdn.upbit.com/images/ico_sort.267365d.png" alt=""></a></th>'
		+'                                <th class=""><a href="#">1개월 <img'
		+'                                        src="https://cdn.upbit.com/images/ico_sort.267365d.png" alt=""></a></th>'
		+'                                <th class=""><a href="#">3개월 <img'
		+'                                        src="https://cdn.upbit.com/images/ico_sort.267365d.png" alt=""></a></th>'
		+'                                <th class=""><a href="#">6개월 <img'
		+'                                        src="https://cdn.upbit.com/images/ico_sort.267365d.png" alt=""></a></th>'
		+'                                <th class=""><a href="#">1년 <img'
		+'                                        src="https://cdn.upbit.com/images/ico_sort.267365d.png" alt=""></a></th>'
		+'                            </tr>'
		+'                        </thead>'
		+'                        <tbody>'
		+'                            <tr>'
		+'                                <th><em class="logo"'
		+'                                    style="background: url(https://www.w3schools.com/images/w3schools_green.jpg) 0px 0px/cover no-repeat;">-</em><a'
		+'                                    class="tit" href="/exchange?code=CRIX.UPBIT.KRW-BAT"><strong>베이직어텐션토큰</strong></a></th>'
		+'                                <td class="lAlign"><i>BAT/KRW</i></td>'
		+'                                <td class="selected"><p class="up">+39.77%</p></td>'
		+'                                <td class=""><p class="up">+110.57%</p></td>'
		+'                                <td class=""><p class="up">+248.91%</p></td>'
		+'                                <td class=""><p class="up">+52.72%</p></td>'
		+'                                <td class=""><p class="" style="text-align: center;">-</p></td>'
		+'                            </tr>'
		+'                            <tr>'
		+'                                <th><em class="logo"'
		+'                                    style="background: url(https://www.w3schools.com/images/w3schools_green.jpg) 0px 0px/cover no-repeat;">-</em><a'
		+'                                    class="tit" href="/exchange?code=CRIX.UPBIT.KRW-MCO"><strong>크립토닷컴</strong></a></th>'
		+'                                <td class="lAlign"><i>MCO/KRW</i></td>'
		+'                                <td class="selected"><p class="up">+26.89%</p></td>'
		+'                                <td class=""><p class="up">+64.92%</p></td>'
		+'                                <td class=""><p class="up">+141.70%</p></td>'
		+'                                <td class=""><p class="up">+8.55%</p></td>'
		+'                                <td class=""><p class="down">-57.17%</p></td>'
		+'                            </tr>'
		+'                            <tr>'
		+'                                <th><em class="logo"'
		+'                                    style="background: url(https://www.w3schools.com/images/w3schools_green.jpg) 0px 0px/cover no-repeat;">-</em><a'
		+'                                    class="tit" href="/exchange?code=CRIX.UPBIT.KRW-RFR"><strong>리퍼리움</strong></a></th>'
		+'                                <td class="lAlign"><i>RFR/KRW</i></td>'
		+'                                <td class="selected"><p class="up">+21.71%</p></td>'
		+'                                <td class=""><p class="up">+24.60%</p></td>'
		+'                                <td class=""><p class="up">+39.56%</p></td>'
		+'                                <td class=""><p class="down">-52.57%</p></td>'
		+'                                <td class=""><p class="" style="text-align: center;">-</p></td>'
		+'                            </tr>'
		+'                            <tr>'
		+'                                <th><em class="logo"'
		+'                                    style="background: url(https://www.w3schools.com/images/w3schools_green.jpg) 0px 0px/cover no-repeat;">-</em><a'
		+'                                    class="tit" href="/exchange?code=CRIX.UPBIT.KRW-ENJ"><strong>엔진코인</strong></a></th>'
		+'                                <td class="lAlign"><i>ENJ/KRW</i></td>'
		+'                                <td class="selected"><p class="up">+21.02%</p></td>'
		+'                                <td class=""><p class="up">+2.40%</p></td>'
		+'                                <td class=""><p class="" style="text-align: center;">-</p></td>'
		+'                                <td class=""><p class="" style="text-align: center;">-</p></td>'
		+'                                <td class=""><p class="" style="text-align: center;">-</p></td>'
		+'                            </tr>'
		+'                            <tr>'
		+'                                <th><em class="logo"'
		+'                                    style="background: url(https://www.w3schools.com/images/w3schools_green.jpg) 0px 0px/cover no-repeat;">-</em><a'
		+'                                    class="tit" href="/exchange?code=CRIX.UPBIT.KRW-REP"><strong>어거</strong></a></th>'
		+'                                <td class="lAlign"><i>REP/KRW</i></td>'
		+'                                <td class="selected"><p class="up">+20.58%</p></td>'
		+'                                <td class=""><p class="up">+62.37%</p></td>'
		+'                                <td class=""><p class="up">+52.89%</p></td>'
		+'                                <td class=""><p class="up">+63.79%</p></td>'
		+'                                <td class=""><p class="down">-39.83%</p></td>'
		+'                            </tr>'
		+'                            <tr>'
		+'                                <th><em class="logo"'
		+'                                    style="background: url(https://www.w3schools.com/images/w3schools_green.jpg) 0px 0px/cover no-repeat;">-</em><a'
		+'                                    class="tit" href="/exchange?code=CRIX.UPBIT.KRW-MEDX"><strong>메디블록</strong></a></th>'
		+'                                <td class="lAlign"><i>MEDX/KRW</i></td>'
		+'                                <td class="selected"><p class="up">+19.57%</p></td>'
		+'                                <td class=""><p class="up">+62.72%</p></td>'
		+'                                <td class=""><p class="up">+134.38%</p></td>'
		+'                                <td class=""><p class="up">+6.31%</p></td>'
		+'                                <td class=""><p class="" style="text-align: center;">-</p></td>'
		+'                            </tr>'
		+'                            <tr>'
		+'                                <th><em class="logo"'
		+'                                    style="background: url(https://www.w3schools.com/images/w3schools_green.jpg) 0px 0px/cover no-repeat;">-</em><a'
		+'                                    class="tit" href="/exchange?code=CRIX.UPBIT.KRW-IQ"><strong>에브리피디아</strong></a></th>'
		+'                                <td class="lAlign"><i>IQ/KRW</i></td>'
		+'                                <td class="selected"><p class="up">+17.20%</p></td>'
		+'                                <td class=""><p class="up">+27.54%</p></td>'
		+'                                <td class=""><p class="up">+75.37%</p></td>'
		+'                                <td class=""><p class="down">-57.41%</p></td>'
		+'                                <td class=""><p class="" style="text-align: center;">-</p></td>'
		+'                            </tr>'
		+'                            <tr>'
		+'                                <th><em class="logo"'
		+'                                    style="background: url(https://www.w3schools.com/images/w3schools_green.jpg) 0px 0px/cover no-repeat;">-</em><a'
		+'                                    class="tit" href="/exchange?code=CRIX.UPBIT.KRW-CPT"><strong>콘텐츠프로토콜토큰</strong></a></th>'
		+'                                <td class="lAlign"><i>CPT/KRW</i></td>'
		+'                                <td class="selected"><p class="up">+13.26%</p></td>'
		+'                                <td class=""><p class="down">-24.25%</p></td>'
		+'                                <td class=""><p class="" style="text-align: center;">-</p></td>'
		+'                                <td class=""><p class="" style="text-align: center;">-</p></td>'
		+'                                <td class=""><p class="" style="text-align: center;">-</p></td>'
		+'                            </tr>'
		+'                            <tr>'
		+'                                <th><em class="logo"'
		+'                                    style="background: url(https://www.w3schools.com/images/w3schools_green.jpg) 0px 0px/cover no-repeat;">-</em><a'
		+'                                    class="tit" href="/exchange?code=CRIX.UPBIT.KRW-ICX"><strong>아이콘</strong></a></th>'
		+'                                <td class="lAlign"><i>ICX/KRW</i></td>'
		+'                                <td class="selected"><p class="up">+9.20%</p></td>'
		+'                                <td class=""><p class="up">+23.90%</p></td>'
		+'                                <td class=""><p class="up">+74.81%</p></td>'
		+'                                <td class=""><p class="down">-40.34%</p></td>'
		+'                                <td class=""><p class="down">-88.21%</p></td>'
		+'                            </tr>'
		+'                            <tr>'
		+'                                <th><em class="logo"'
		+'                                    style="background: url(https://www.w3schools.com/images/w3schools_green.jpg) 0px 0px/cover no-repeat;">-</em><a'
		+'                                    class="tit" href="/exchange?code=CRIX.UPBIT.KRW-POWR"><strong>파워렛저</strong></a></th>'
		+'                                <td class="lAlign"><i>POWR/KRW</i></td>'
		+'                                <td class="selected"><p class="up">+8.76%</p></td>'
		+'                                <td class=""><p class="up">+24.17%</p></td>'
		+'                                <td class=""><p class="up">+30.70%</p></td>'
		+'                                <td class=""><p class="down">-24.37%</p></td>'
		+'                                <td class=""><p class="down">-72.66%</p></td>'
		+'                            </tr>'
		+'                        </tbody>'
		+'                    </table>'
		+'                    <a href="#" class="btnViewA">전체보기<em>▼</em></a>'
		+'                </article>'
		+'            </section>'
		+'            <div id="right_content">'
		+'            <section class="ty02">'
		+'                <article>'
		+'                    <span class="titB"><strong>코인 Play!</strong><span'
		+'                        class="list_more"><a href="#" class="b_prv">이전</a><a'
		+'                            href="#" class="b_nxt">다음</a></span></span><span class="coinList"><ul'
		+'                            class="clist">'
		+'                            <li><a href="https://youtu.be/6n2ka284nuA" target="_blank"'
		+'                                rel="noopener noreferrer"><img'
		+'                                    src="https://api-manager-production.s3.ap-northeast-2.amazonaws.com/ftdcnt/data/1242:d6f16e43-5442-4fa7-9180-e8c1f581899e.png?1555572826"'
		+'                                    width="150" height="86" alt="상승반전 시그널, 미래에 베팅?"><strong>상승반전'
		+'                                        시그널, 미래에 베팅?</strong><span>19.04.18 16:33</span></a><a'
		+'                                href="https://youtu.be/hO8CmfxJ-JE" target="_blank"'
		+'                                rel="noopener noreferrer"><img'
		+'                                    src="https://api-manager-production.s3.ap-northeast-2.amazonaws.com/ftdcnt/data/1157:9fdd801f-d7de-4f20-96e8-50988961caf3.jpeg?1548313207"'
		+'                                    width="150" height="86" alt="이더리움 하드포크 연기, 이유는?"><strong>이더리움'
		+'                                        하드포크 연기, 이유는?</strong><span>19.01.24 16:00</span></a></li>'
		+'                            <li><a href="https://youtu.be/KtdXPtq9YFQ" target="_blank"'
		+'                                rel="noopener noreferrer"><img'
		+'                                    src="https://api-manager-production.s3.ap-northeast-2.amazonaws.com/ftdcnt/data/1150:04147163-55eb-4fff-9b7e-32531ee75c8f.jpeg?1547102527"'
		+'                                    width="150" height="86" alt="드디어 ETF 승인 움직임이 보인다?"><strong>드디어'
		+'                                        ETF 승인 움직임이 보인다?</strong><span>19.01.10 15:42</span></a><a'
		+'                                href="https://youtu.be/pIyuD5YOQnY" target="_blank"'
		+'                                rel="noopener noreferrer"><img'
		+'                                    src="https://api-manager-production.s3.ap-northeast-2.amazonaws.com/ftdcnt/data/1126:05ce3163-f60e-4a4d-8325-7f18fad37808.png?1543908839"'
		+'                                    width="150" height="86" alt="G20, 암호화폐 인정하다?!"><strong>G20,'
		+'                                        암호화폐 인정하다?!</strong><span>18.12.04 16:33</span></a></li>'
		+'                        </ul></span><a class="largeThumb" href="https://youtu.be/6n2ka284nuA"'
		+'                        target="_blank" rel="noopener noreferrer"><div'
		+'                            class="thumbWrap">'
		+'                            <div class="thumbImg">'
		+'                                <img'
		+'                                    src="https://api-manager-production.s3.ap-northeast-2.amazonaws.com/ftdcnt/data/1242:d6f16e43-5442-4fa7-9180-e8c1f581899e.png?1555572826"'
		+'                                    alt="상승반전 시그널, 미래에 베팅?">'
		+'                            </div>'
		+'                            <div class="desc">'
		+'                                <div class="title">상승반전 시그널, 미래에 베팅?</div>'
		+'                                <div class="subText">'
		+'                                    <div class="st01">쇼미더크립톡</div>'
		+'                                    <div class="st02">19.04.18 16:33</div>'
		+'                                </div>'
		+'                            </div>'
		+'                        </div></a>'
		+'                </article>'
		+'                <article>'
		+'                    <span class="titB"><strong>암호화폐 해독하기</strong><span'
		+'                        class="list_more"><a href="#" class="b_prv">이전</a><a'
		+'                            href="#" class="b_nxt">다음</a></span></span><span class="coinList"><ul'
		+'                            class="clist">'
		+'                            <li><a'
		+'                                href="https://1boon.kakao.com/upbit/5cb82566ed94d20001c27ea5"'
		+'                                target="_blank" rel="noopener noreferrer"><img'
		+'                                    src="https://api-manager-production.s3.ap-northeast-2.amazonaws.com/ftdcnt/data/1238:491e9f3c-17b5-4a17-9c50-fd5bd43847dd.jpg?1555572627"'
		+'                                    width="150" height="102" alt="메인넷이 뭐길래"><strong>메인넷이'
		+'                                        뭐길래</strong><span>19.04.18 16:30</span></a><a'
		+'                                href="https://1boon.kakao.com/upbit/5cb045c7ed94d20001243d89"'
		+'                                target="_blank" rel="noopener noreferrer"><img'
		+'                                    src="https://api-manager-production.s3.ap-northeast-2.amazonaws.com/ftdcnt/data/1221:52b816f1-d9df-404c-8aae-187504e4c554.png?1555056043"'
		+'                                    width="150" height="102" alt="중국 채굴 도태산업 지정..영향은?"><strong>중국'
		+'                                        채굴 도태산업 지정..영향은?</strong><span>19.04.12 17:00</span></a></li>'
		+'                            <li><a'
		+'                                href="https://1boon.kakao.com/upbit/5cab00b5ed94d2000123ecb5"'
		+'                                target="_blank" rel="noopener noreferrer"><img'
		+'                                    src="https://api-manager-production.s3.ap-northeast-2.amazonaws.com/ftdcnt/data/1201:c69b7f51-828c-4ce1-ba2c-53f76cefdc3a.jpg?1554711081"'
		+'                                    width="150" height="102" alt="프로젝트 진행 상황, 가장 중요해!"><strong>프로젝트'
		+'                                        진행 상황, 가장 중요해!</strong><span>19.04.08 16:55</span></a><a'
		+'                                href="https://1boon.kakao.com/upbit/5c496747ed94d20001c93172"'
		+'                                target="_blank" rel="noopener noreferrer"><img'
		+'                                    src="https://api-manager-production.s3.ap-northeast-2.amazonaws.com/ftdcnt/data/1170:7e8bf4f2-2f20-4b89-bdc2-f73236bda2fb.png?1548313536"'
		+'                                    width="150" height="102" alt="IoT와 블록체인의 기술융합, 미래는?"><strong>IoT와'
		+'                                        블록체인의 기술융합, 미래는?</strong><span>19.01.24 16:05</span></a></li>'
		+'                        </ul></span>'
		+'                </article>'
		+'            </section>'
		+'            </div>'
		+'        </div>'
		+'    </div>' 
	},
    coin_chat : ()=>{
        return '<div id="chat_coin">'
        +'<div class="container">'
        +'    <div class="row chat-window col-xs-5 col-md-3" id="chat_window_1" style="margin-left:1150px;">'
        +'        <div class="col-xs-12 col-md-12">'
        +'            <div class="panel panel-default">'
        +'                <div class="panel-heading top-bar">'
        +'                    <div class="col-md-8 col-xs-8">'
        +'                        <h3 class="panel-title"><span class="glyphicon glyphicon-comment"></span> ONCE Chat</h3>'
        +'                    </div>'
        +'                    <div class="col-md-4 col-xs-4" style="text-align: right;">'
        +'                        <a href="#"><span id="minim_chat_window" class="glyphicon glyphicon-minus icon_minim"></span></a>'
        +'                        <a href="#"><span class="glyphicon glyphicon-remove icon_close" data-id="chat_window_1"></span></a>'
        +'                    </div>'
        +'                </div>'
        +'                <div class="panel-body msg_container_base">           '
        +'                    <div class="row msg_container base_receive">'
        +'                        <div class="col-md-2 col-xs-2 avatar">'
        +'                            <img src="http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-1.jpg" class=" img-responsive ">'
        +'                        </div>'
        +'                        <div class="col-xs-10 col-md-10">'
        +'                            <div class="messages msg_receive">'
        +'                                <p>that mongodb thing looks good, huh?'
        +'                                tiny master db, and huge document store</p>'
        +'                            </div>'
        +'                        </div>'
        +'                    </div>'
        +'                    <div class="row msg_container base_sent">'
        +'                        <div class="col-md-10 col-xs-10 ">'
        +'                            <div class="messages msg_sent">'
        +'                                <p>that mongodb thing looks good, huh?'
        +'                                tiny master db, and huge document store</p>'
        +'                            </div>'
        +'                        </div>'
        +'                        <div class="col-md-2 col-xs-2 avatar">'
        +'                            <img src="http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-1.jpg" class=" img-responsive ">'
        +'                        </div>'
        +'                    </div>'
        +'                </div>'
        +'                <div class="panel-footer">'
        +'                    <div class="input-group">'
        +'                        <input id="btn-input" type="text" class="form-control input-sm chat_input" placeholder="ONCE" />'
        +'                        <span class="input-group-btn">'
        +'                        <button class="btn btn-primary btn-sm" id="btn-chat">전송</button>'
        +'                        </span>'
        +'                    </div>'
        +'                </div>'
        +'            </div>'
        +'        </div>'
        +'    </div>'
        +'</div>'
        +'</div>'
   }
};