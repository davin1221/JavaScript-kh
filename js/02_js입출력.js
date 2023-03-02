// HTML로 읽어오기 
// - 요소, 내부 내용(태그, 속성, 내용)을 얻어와 문자열로 반환
function getInnerHTML1() {
    // HTML문서 내에 id속성값을 읽어오기 
    const t1 = document.getElementById("test1")

    //브라우저 콘솔에 출력 
    console.log(t1.innerHTML)
}

// innerHTML로 변경하기(태그, 속성이 해석-HTML converter)
let setInnerHTML1 = ()=> {
    const t1 = document.getElementById("test1")
    t1.innerHTML = "<b class='red'>변경</b>"
}

//----

let addBox = () =>{
    //1. id 속성값이 area1인 요소를 얻어와 변수에 저장
    //2. area1 요소의 이전 내용에 새로운 내용을 누적 =이 아니라 +=.. =으로 하면 그냥 대체만 됨.
    const area1 = document.getElementById("area1")
    area1.innerHTML += "<div class='box1'></div>"
}

//---

const t2 = document.getElementById("test2")

//innerText로 읽어오기(내용만 얻어옴)
function getInnerText1(){
    console.log(t2.innerText)
}

let setInnerText1 = ()=> {
    t2.innerText = "<b>태그는 안돼~</b><br>문자만 가능~"
}

//--
let  funConfirm = ()=> {
    if(confirm("색을 변경하시겠습니까?")) {
        document.getElementById("confirmTest").style.backgroundColor="skyblue";
    } else {
        console.log("취소")
    }
}

//--
function fnPrompt() {
    const input = prompt("변경할 버튼명을 입력하시오.") 
    // input에 저장될 것: 입력한 값 or null
    if(input != null) {
        document.getElementById("promptTest").innerText = input
    } else {
        alert("취소하였습니다.")
    }
}