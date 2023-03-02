//1. id 접근
function fnTest() {
    const div1 = document.getElementById("div1")
    const bgColor = div1.style.backgroundColor

    if(bgColor == 'skyblue') {
        div1.style.backgroundColor = "pink"
    } else {
        div1.style.backgroundColor = "skyblue"
    }
}

//2. class접근
let fnTest2 = ()=> {
    const arr = document.getElementsByClassName("div2")
    
    for(let i=0; i < arr.length; i++) {
        arr[i].innerText = `${i}번째 요소입니다.`
    }

    arr[0].style.backgroundColor = "pink"
    arr[1].style.backgroundColor = "skyblue"
    arr[2].style.backgroundColor = "lightyellow"
}


//3. tag이름으로 접근
let fnTest3 = ()=> {
    const arr = document.getElementsByTagName("li")

    for(let i = 0; i < arr.length; i++) {
       const num = arr[i].innerText
       arr[i].style.backgroundColor = `rgb(100, ${num}, 130)`
    }
}


//4. name 속성으로 접근
let fnTest4 = ()=> {
    const hobbyArr = document.getElementsByName("hobby")

    let str = "" //체크박스 값 누적할 변수
    let count = 0 // 체크 개수 카운트 

    for(let i = 0; i < hobbyArr.length; i++) {
        if(hobbyArr[i].checked == true) { //checked 속성: radio, check 가 체크가 되어있음 true
            str += hobbyArr[i].value + " "
            count++; // 체크된 것이 있을 떄마다 1씩 증가
        }
    }

    const result5 = document.getElementById("result5")
    if(result5 != "") { //체크된 것이 하나라도 있을 때 
        result5.innerText = str
        result5.innerHTML += `<br><br>선택된 개수: ${count}`
    } else {
        result5.innerHTML = "체크된 것이 없습니다." 
    }
}


// 5. css 선택자 접근
function fnTest5() {

    document.querySelector("#cssTest > div").style.backgroundColor = "pink" 
    // :first-child 안해줘도 되는 이유: querySelector는 첫번째만 선택해주기 때문

    const arr = document.querySelectorAll("#cssTest > div") 
    for(let i = 0; i < arr.length; i++) {
        console.log(arr[i])
        arr[i].style.fontSize = '30px'
    }
}



//input 태그 값 얻어오기/변경하기
let fnTest6 = ()=> {
    const input = document.getElementById("inputTest")

    alert(input.value) 
    input.value = ""
}

// 채팅화면 만들기 
let readValue = ()=> { //input창에 입력된 값을 읽어 채팅창에 출력
    // 채팅과 관련된 요소 모두 얻어오기 
    const bg = document.getElementById("chatting-bg")
    const input = document.querySelector("#chatting-input")

    // 채팅이 정상적으로만 입력된 경우에만 출력 
    if(input.value.trim().length > 0) { // 문자열.trim(): 문자열 좌우공백 제거
        // 채팅창에 입력된 값으로 채팅 추가 
        bg.innerHTML += `<p><span>${input.value}</span></p>`

        //스크롤을 제일 밑으로 내리는 방법. 
        // 요소.scrollTop: 요소 내부 현재 스크롤의 위치 
        // 요소.scrollHeight: 스크롤 전체 높이 
        // 요소.scrollTop = 위치 
        bg.scrollTop = bg.scrollHeight
    }

    // 채팅창 비우기 
    input.value = ""
}

let inputEnter = ()=> {
    if(window.event.key == "Enter") { // 대문자 주의! 
    readValue()
    }
}