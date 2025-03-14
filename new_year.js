document.addEventListener("DOMContentLoaded", function(){
    let stars = ['물병', '물고기', '양', '황소', '쌍둥이', '게', '사자', '처녀', '천칭', '전갈', '궁수', '염소'];
    let dates = ['7월 23일 ~ 8월 22일', '8월 23일 ~ 9월 23일', '9월 24일 ~ 10월 22일', '10월 23일 ~ 11월 22일', '11월 23일 ~ 12월 24일', '12월 25일 ~ 1월 18일']
    let year = getParameter('year') == '' ? 1 : getParameter('year');
    let id = `star${year}`;
    let star = stars[year-1];
    document.getElementById(id).style.display = 'block';
    document.getElementsByClassName('star')[0].innerHTML = star;
    document.getElementsByClassName('star')[0].style.backgroundImage = `url('${year}.png')`;
    document.getElementsByTagName('h1')[0].innerHTML = `2025년 ${star}자리의 운세!`;
});
function getParameter(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}