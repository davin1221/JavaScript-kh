// 형변환 확인

// const btn1 = document.querySelector(".btn1")
const btn1 = document.getElementsByClassName("btn1")[0];
// elements는 배열형태로 가져오기 때문에 인덱스번호를 붙이지 않으면 클래스형태로 넘어온다. 

btn1.addEventListener("click", function(){
    console.log("parseInt('123') : " + parseInt('123') + " / type:" + typeof(parseInt('123')))
    console.log("parseInt('3.14') : " + parseInt('3.14'))
    console.log("----------")
    console.log("parseFloat('123')" + parseFloat('123'))
    console.log("parseFloat('3.14')" + parseFloat('3.14'))
    console.log("----------")
    console.log("Number('123') : " + Number('123'))
    console.log("Number('3.14') : " + Number('3.14'))
    console.log("----------")
})


// isNaN
const input1 = document.getElementById("input1")
const btn2 = document.getElementById("btn2")

btn2.addEventListener("click", function(){
    if(isNaN(input1.value)) {
        alert("숫자가 아닙니다.")
    } else {
        alert("숫자입니다.")
    }
})

// Math.
const input2 = document.getElementById("input2")
const btn3 = document.getElementById("btn3")

btn3.addEventListener("click", function(){
    console.log("Math.ceil: " + Math.ceil(input2.value))
    console.log("Math.floor: " + Math.floor(input2.value))
    console.log("Math.trunc: " + Math.trunc(input2.value))
    console.log("Math.round: " + Math.round(input2.value))
})

// Math.random()
const btn4 = document.getElementById("btn4")
btn4.addEventListener("click", function(){
    //rgb 색상 렌덤 대입 (0 ~ 255)
   const r =  Math.floor(Math.random() * 256) // 0 < random M 256
   const g =  Math.floor(Math.random() * 256) // 0 < random M 256
   const b =  Math.floor(Math.random() * 256) // 0 < random M 256

   document.querySelector("body").style.backgroundColor = `rgb(${r},${g},${b})`
})