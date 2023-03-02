//1. 아이디 확인
const idInput = document.getElementById("idInput")
// ^[a-z][\w-_]{5,13}$
const idTest = /^[a-z]([a-zA-Z0-9-_]){6,14}$/ 

idInput.addEventListener("change",function(){
    if(idTest.test(idInput.value)){
        idInput.style.backgroundColor="green"
        idInput.style.color = "white"
    } else {
        idInput.style.backgroundColor="red"
        idInput.style.color = "white"
    }
})

//2. 비밀먼호 
const pwInput1 = document.getElementById("pwInput1")
const pwInput2 = document.getElementById("pwInput2")
const pwResult = document.getElementById("pwResult")

// 비밀먼호를 입력하지 않고 확인창을 입력할 경우 효과
pwInput2.addEventListener("keyup", function(){
    if(pwInput1.value.trim().length == 0) {
        pwInput2.value = ""; // 비밀번호확인 창 모두 삭제
        alert("비밀번호를 입력하세요.") // 경고창
        pwInput1.focus(); // 포커스 이동
    }
})

pwInput2.addEventListener("keyup", function(){
    if(pwInput1.value == pwInput2.value) {
       pwResult.innerHTML = "비밀번호 일치"
       pwResult.style.color = "green"
    } else if(pwInput1.value != pwInput2.value) {
        pwResult.innerHTML = "비밀번호 불일치"
        pwResult.style.color = "red"
    }
})

//3. 이름
const nameInput = document.getElementById("nameInput")
const nameResult = document.getElementById("nameResult")
const nameTest = /^[가-힣]{2,5}$/
nameInput.addEventListener("input", function(){
    if(nameTest.test(nameInput.value)){
        nameResult.innerHTML = "정상입력"
        nameResult.style.color = "green"
    } else {
        nameResult.innerHTML = "2~5글자의 한글만 입력하시오."
        nameResult.style.color = "red"
    }
})

//4. 성별 못하겠다 ㅅㅂ, 전화번호 
// 회원가입 버튼 클릭 시 validate() 호출

 function validate(){
    // 성별 
    // 체크된 라디오버튼만 얻어오기 
    const gender = document.querySelector("input[name='gender']:checked")
    
    if(gender == null) {
        alert("성별을 선택하시오.")
        return false; // submit 기본 이벤트 제거안하면 성별 입력해달라는 창이 또 뜸 
    }

    const phoneInput = document.getElementById("phoneInput")
    const phoneTest = /^([0][0-9]{1,2})-([0-9]{4})-([0-9]{4})$/
    if(!phoneTest.test(phoneInput.value)) {
        alert("전화번호 형식이 올바르지 않습니다.")
        return false; // submit 기본 이벤트 제거안하면 성별 입력해달라는 창이 또 뜸 
    }

    return true;
 }





//5. 전화번호
// const phoneInput = document.getElementById("phoneInput")
// const phoneResult = document.getElementById("phoneResult")
// const phoneTest = /^([0-9]{3})[-]([0-9]{4})[-]([0-9]{4})$/

// phoneInput.addEventListener("input", function(){
//     console.log(phoneInput.value)
//     if(phoneTest.test(phoneInput.value)) {
//         phoneResult.innerHTML = ""
//     } else {
//         phoneResult.innerHTML = "전화번호 형식이 맞지 않습니다."
//     }
// })




    

