export default function ScrKac054() {
  const rows = [
    { custCode: "S10364", custName: "(주)풀무원연합채(스카이비라운지, 국내)", bizType: "식품음료", loc1: "국내선", loc1Name: "1", usage: "상업시설", usageName: "상업시설", managerName: "홍정호 담당", phone: "02-2872-0419", mobile: "010-2872-0419", note: "풀무원(국제)이내 전체 담당자", email: "jsyooa@pulmuone.com", createdDate: "2025.01.23", createdBy: "AOCD", createdTime: "10:02" },
    { custCode: "S40364", custName: "(주)풀무원연합채(스카이비라운지, 국내)", bizType: "식품음료", loc1: "국내선", loc1Name: "1", usage: "상업시설", usageName: "상업시설", managerName: "석정욱", phone: "", mobile: "010-3822-4351", note: "", email: "igskkor@hanmail.net", createdDate: "2025.10.15", createdBy: "AOCD", createdTime: "11:03" },
    { custCode: "S40962", custName: "(주)아이에스코리아(프룬바거, 국제)", bizType: "식품음료", loc1: "국제선", loc1Name: "2", usage: "경항공기건물2", usageName: "경항공기건물2", managerName: "석정욱", phone: "02-2661-6411", mobile: "010-3803-0148", note: "", email: "kbj8283@khenerv.go.kr", createdDate: "2025.01.05", createdBy: "AOCD", createdTime: "10:19" },
    { custCode: "S40864", custName: "쌍용공업(주)", bizType: "식품음료", loc1: "국내선", loc1Name: "1", usage: "경항공기건물2", usageName: "경항공기건물2", managerName: "공기업관리", phone: "02-2661-2068", mobile: "010-3117-0457", note: "휴게점영업담당", email: "je0425@starbucks.co.kr", createdDate: "2025.02.05", createdBy: "AOCD", createdTime: "13:19" },
    { custCode: "S12540", custName: "KT에너지 주식회사", bizType: "식품음료", loc1: "국내선", loc1Name: "1", usage: "상업시설", usageName: "상업시설", managerName: "상업시설 이미진", phone: "", mobile: "010-4263-5616", note: "", email: "sm3436@vkc.or.kr", createdDate: "2025.02.10", createdBy: "AOCD", createdTime: "16:52" },
    { custCode: "S27830", custName: "(주)에스케이하이닉스(스타벅스, 국내)", bizType: "식품음료", loc1: "국내선", loc1Name: "2", usage: "상업시설 대학", usageName: "상업시설 대학", managerName: "상업시설 대학", phone: "02-720-7329", mobile: "02-720-7322", note: "", email: "danielleparx@vkc.or.kr", createdDate: "2025.02.17", createdBy: "AOCD", createdTime: "16:52" },
    { custCode: "S40618", custName: "(주)에스케이하이닉스(스타벅스, 국내)", bizType: "식품음료", loc1: "국내선", loc1Name: "2", usage: "상업시설 대학", usageName: "상업시설 대학", managerName: "만남입구 임문은 대표", phone: "02-2669-2704", mobile: "010-2571-6835", note: "담당입구 담당", email: "choiy@lotte.net", createdDate: "2025.05.27", createdBy: "AOCD", createdTime: "13:51" },
    { custCode: "S40618", custName: "전국유통 한국협회위원회", bizType: "식품음료", loc1: "국내선", loc1Name: "2", usage: "경항공기건물2", usageName: "경항공기건물2", managerName: "공기업관리 업무 대표", phone: "02-2661-1315", mobile: "", note: "", email: "alfmadus1004@naver.com", createdDate: "2025.06.05", createdBy: "AOCD", createdTime: "13:55" },
    { custCode: "S88010", custName: "메리파크식품(사)위원회", bizType: "식품음료", loc1: "국내선", loc1Name: "2", usage: "경항공기건물2", usageName: "경항공기건물2", managerName: "이미진", phone: "02-6366-1315", mobile: "010-4515-7153", note: "회사 지역 담당자", email: "jh.Jo@quimos.co.kr", createdDate: "2025.06.20", createdBy: "AOCD", createdTime: "09:57" },
    { custCode: "S40636", custName: "롯데리아 주식회사", bizType: "식품음료", loc1: "국내선", loc1Name: "1", usage: "상업시설", usageName: "상업시설", managerName: "이미진 정박", phone: "02-6415-7153", mobile: "010-4515-7153", note: "", email: "guow0428@naver.co.kr", createdDate: "2025.06.20", createdBy: "AOCD", createdTime: "09:57" },
    { custCode: "S41031", custName: "김포금공업", bizType: "식품음료", loc1: "국내선", loc1Name: "1", usage: "상업시설", usageName: "상업시설", managerName: "이미진", phone: "010-9745-2684", mobile: "010-9745-2684", note: "", email: "gogorentcar.com", createdDate: "2025.06.24", createdTime: "14:09", createdBy: "AOCD" },
    { custCode: "S40894", custName: "(주)라리코라성(프소주카, 국제), 사회공헌", bizType: "가타비서비스", loc1: "국제선", loc1Name: "2", usage: "상업시설", usageName: "상업시설", managerName: "이미진 오미니", phone: "032-729-2860", mobile: "010-9323-9398", note: "지점팀 매니저", email: "younji8113@paradian.com", createdDate: "2024.12.16", createdBy: "AOCD", createdTime: "09:52" },
    { custCode: "S40811", custName: "주식회사 고요쌤(가사님)", bizType: "기타비서비스", loc1: "국내선", loc1Name: "1", usage: "상업시설", usageName: "상업시설", managerName: "홍정호", phone: "", mobile: "", note: "상고 보안일체 대리로 연락함", email: "ms@widemobile.com", createdDate: "2025.01.21", createdBy: "AOCD", createdTime: "15:01" },
    { custCode: "S40969", custName: "주식회사 아이스센거기사이", bizType: "만남업", loc1: "국내선", loc1Name: "1", usage: "상업시설", usageName: "상업시설", managerName: "이미진", phone: "", mobile: "02-798-7701", note: "", email: "acorn@socor.kr", createdDate: "2025.07.29", createdBy: "AOCD", createdTime: "11:11" },
    { custCode: "S40946", custName: "(주)아이에스코리아(프룬바거, 국제)", bizType: "만남업", loc1: "국내선", loc1Name: "1", usage: "상업시설", usageName: "상업시설", managerName: "이미진 대석", phone: "", mobile: "010-3919-3906", note: "지점 센터파카리 담당", email: "acorn@socor.kr", createdDate: "2025.01.03", createdBy: "AOCD", createdTime: "14:21" },
    { custCode: "S80142", custName: "패키이라(프랑, 국제)", bizType: "기타비서비스", loc1: "국내선", loc1Name: "2", usage: "기타비서비스", usageName: "기타비서비스", managerName: "이미진", phone: "010-4681-4897", mobile: "", note: "지역 센터파카리 담당", email: "seory@socor.kr", createdDate: "2025.02.05", createdBy: "AOCD", createdTime: "13:21" },
    { custCode: "S40663", custName: "(주)에스케이(국제)", bizType: "기타비서비스", loc1: "국내선", loc1Name: "2", usage: "기타비서비스", usageName: "기타비서비스", managerName: "공기업관리", phone: "02-266-9001", mobile: "010-2782-3182", note: "", email: "nskitty@shinhan.com", createdDate: "2025.05.12", createdBy: "AOCD", createdTime: "09:16" },
    { custCode: "S45091", custName: "(주)전선콘 림포콩합기업", bizType: "공공업", loc1: "국내선", loc1Name: "1", usage: "상업시설", usageName: "상업시설", managerName: "이미진 대표", phone: "02-2665-8933", mobile: "", note: "설립(2025)", email: "jiwonli0109@spc.co.kr", createdDate: "2025.06.12", createdBy: "AOCD", createdTime: "15:16" },
    { custCode: "S40492", custName: "패리코라성(프소주카, 국제), 사회공헌", bizType: "공공업", loc1: "국내선", loc1Name: "1", usage: "상업시설", usageName: "상업시설", managerName: "이미진", phone: "02-2665-8497", mobile: "010-9975-3520", note: "설립(2015)", email: "jiwonli0109@spc.co.kr", createdDate: "2025.08.18", createdBy: "AOCD", createdTime: "15:16" },
    { custCode: "S40527", custName: "파리파크라성(파소추커, 국외)", bizType: "국가기관", loc1: "국내선", loc1Name: "1", usage: "상업시설", usageName: "상업시설", managerName: "이미진", phone: "02-2664-6205", mobile: "010-2077-6301", note: "", email: "lslim@pulmuone.com", createdDate: "2023.07.19", createdBy: "AOCD", createdTime: "13:27" },
    { custCode: "S00108", custName: "(주)에이엠코리아(스카이라이트 오)도 숍)", bizType: "가타비서비스", loc1: "국내선", loc1Name: "1", usage: "상업시설", usageName: "상업시설", managerName: "이미진", phone: "", mobile: "010-8868-1125", note: "풀무원 스카이 라이트", email: "lslim@pulmuone.com", createdDate: "2023.07.19", createdBy: "AOCD", createdTime: "13:27" },
    { custCode: "S40539", custName: "(주)풀무원연합채(올레오보드,도, 국내)", bizType: "식품음료", loc1: "국내선", loc1Name: "1", usage: "상업시설", usageName: "상업시설", managerName: "이미진", phone: "02-2064-0165", mobile: "010-8868-1125", note: "", email: "lslim@pulmuone.com", createdDate: "2023.07.19", createdBy: "AOCD", createdTime: "13:27" },
    { custCode: "S40540", custName: "(주)풀무원연합채(올레오보드,도, 국내)", bizType: "식품음료", loc1: "국내선", loc1Name: "1", usage: "상업시설", usageName: "상업시설", managerName: "이미진", phone: "02-2661-4830", mobile: "019-8868-1125", note: "풀무원콩기업클릿", email: "lslim@pulmuone.com", createdDate: "2023.07.19", createdBy: "AOCD", createdTime: "13:27" },
    { custCode: "S40540", custName: "(주)풀무원연합채(올레오보드,도, 국내)", bizType: "식품음료", loc1: "국내선", loc1Name: "1", usage: "상업시설", usageName: "상업시설", managerName: "이미진", phone: "02-2666-6814", mobile: "010-9366-7937", note: "", email: "la1l015@lotte.net", createdDate: "2023.07.19", createdBy: "AOCD", createdTime: "13:27" },
    { custCode: "S20973", custName: "(주)풀무원연합채(올레오보드,도, 국내)", bizType: "식품음료", loc1: "국내선", loc1Name: "1", usage: "상업시설", usageName: "상업시설", managerName: "이미진", phone: "02-2667-0108", mobile: "010-4173-4887", note: "", email: "an21818@lotte.net", createdDate: "2023.07.19", createdBy: "AOCD", createdTime: "13:27" },
    { custCode: "S30900", custName: "롯데레밍소년(씬리사스, 국내)", bizType: "식품음료", loc1: "국내선", loc1Name: "1", usage: "상업시설", usageName: "상업시설", managerName: "이미진", phone: "", mobile: "", note: "", email: "an21818@lotte.net", createdDate: "2023.07.30", createdBy: "AOCD", createdTime: "13:27" },
  ];

  return (
    <div className="space-y-3">
      <h2 className="text-[14px] font-bold text-[#1e3a5f]">임차업체 연락망 관리</h2>

      <div className="flex gap-2 mb-2">
        <button className="border border-[#c8d8e8] bg-white text-[12px] px-3 py-1.5 rounded hover:bg-[#f0f4f8] text-[#475569]">추가</button>
        <button className="border border-[#c8d8e8] bg-white text-[12px] px-3 py-1.5 rounded hover:bg-[#f0f4f8] text-[#475569]">삭제</button>
      </div>

      <div className="rounded border border-[#c8d8e8] bg-white overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-[12px]">
            <thead>
              <tr>
                {["고객코드", "고객명", "업종명", "위치분류1", "위치분류1명", "용도", "용도명", "담당자명", "전화번호", "휴대폰번호", "비고사항", "메일주소", "생성일", "생성자", "생성시간"].map((h) => (
                  <th key={h} className="bg-[#eef3f9] text-[#1e3a5f] font-semibold text-[12px] border border-[#c8d8e8] px-2 py-1.5 whitespace-nowrap">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#f8fbff]"}>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.custCode}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1">{r.custName}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1">{r.bizType}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1">{r.loc1}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.loc1Name}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1">{r.usage}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1">{r.usageName}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1">{r.managerName}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.phone}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.mobile}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1">{r.note}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1">{r.email}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.createdDate}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1">{r.createdBy}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1">{r.createdTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
