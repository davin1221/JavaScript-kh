// 인라인 이벤트 모델 확인하기 
function fnTest1(btn) {
    
    console.log(btn) // this 확인

    // JS로 CSS를 지정하면 inline 형식으로 들어간다. 
    btn.style.color = "white"
    btn.style.backgroundColor = "black"
    btn.style.cursor = "pointer"
    
}

// 고전 이벤트 모델 확인하기 
document.getElementById("btn1").onclick = function() {
    alert("버튼이 클릭됨")

    document.getElementById("btn1").onclick = null; 
    // 두번째 클릭 땐 이벤트 제거 
}

document.getElementById("btn1").onmouseover = function() {
    document.getElementById("btn1").style.backgroundColor = "red"
}

document.getElementById("btn1").onmouseout = function() {
    document.getElementById("btn1").style.backgroundColor = "yellow"
}

// 고전이벤트 단점: 한 요소에 동일한 이벤트 리스너에 대한 다수의 이벤트 핸들러를 작성할 수 없다.
//              (마지막으로 대입된 이벤트 핸들러만 적용) -> 해결: 표준 이벤트 모델

document.getElementById("btn1").onclick = function() {
    alert("마지막으로 대입된 요소만 나옴")
}



// 표준 이벤트 모델 확인하기 
const btn2 = document.getElementById("btn2")

btn2.addEventListener("click",  function() { // 익명함수

    // 이벤트 핸들러 내부에 작성된 this는 이벤트가 발생한 요소 자체
    this.style.backgroundColor = "pink"
    this.style.border = "3px solid black"
    this.style.padding = "10px"
    this.style.display = "block"
})  


btn2.addEventListener("click",  function() {

    this.style.fontSize = "20px"
    this.style.color = "red"
    this.style.fontWeight = "bold"
})

//--------

let inputColor =  document.getElementById("input1")
let result = document.getElementById("div1")

inputColor.addEventListener("input", function() {
    result.style.backgroundColor = inputColor.value
})

// 선생님 풀이 
// document.getElementById("input1").addEventListener("keyup", function(){
//     const div1 = document.getElementById("div1")
//     div1.style.backgroundColor = this.value;
// })



//----
// document.getElementById("div2").addEventListener("mouseover", function() {
//     const div2 = document.getElementById("div2")
//     div2.style.backgroundColor = "pink"
//     div2.style.width = "300px"
// })

// document.getElementById("div2").addEventListener("mouseleave", function() {
//     const div2 = document.getElementById("div2")
//     div2.style.width = "0px"
//     div2.style.visibility = "hidden"
// })

// 선생님 풀이 
document.getElementById("div2").addEventListener("mouseover", function(){
    this.style.width = "300px"
    this.style.backgroundColor = "pink"
}) 

document.getElementById("div2").addEventListener("mouseleave", function(){
    this.style.width = "0px"
    this.style.visibility = "hidden"
}) 