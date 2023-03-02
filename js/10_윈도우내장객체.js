// setTimeout(함수, 지연시간)
const btn1 = document.getElementById("btn1")

btn1.addEventListener("click", function(){

    // 클릭 하자마자 변경 = 0초 
    this.style.backgroundColor = "red" // 이벤트 리스너에서 this는 이벤트 핸들러


    // 3초 후 코랄 색상으로 변경 
    window.setTimeout(function(){
        btn1.style.backgroundColor = "orange" // 여기서 this를 쓰면 window 객체임 
    }, 3000)

    console.log("중간 출력")

      // 6초 후 코랄 색상으로 변경 
      window.setTimeout(function(){
        btn1.style.backgroundColor = "yellow" // 여기서 this를 쓰면 window 객체임 
    }, 6000)

      // 9초 후 코랄 색상으로 변경 
      window.setTimeout(function(){
        btn1.style.backgroundColor = "green" // 여기서 this를 쓰면 window 객체임 
    }, 9000)
})

// 비동기: 3초-> 6초-> 9초 순이 아니라 3초-> 3초-> 3초로 바뀐다. 이것이 비동기 
// 시작점이 모두 같기 때문.. 


//window.setInterval()
// 1. 현재시간 반환하는 함수 
function currentTime() {
    //a. 현재 시간 정보를 저장하고 있는 객체 생성 
    const now = new Date();

    let hour = now.getHours() 
    let minute = now.getMinutes()
    let second = now.getSeconds()

    //b. 얻어온 시간이 10미만인 경우 앞에 0 추가 
    if(hour < 10) hour = "0" + hour
    if(minute < 10) minute = "0" + minute
    if(second < 10) second = "0" + second

    return `${hour} : ${minute} : ${second}`
}

// 2. 페이지가 로딩되자마자 #clock에 현재 시간 출력
const clock = document.getElementById("clock")
clock.innerText = currentTime();


// 3. #clock에 1초마다 현재시간을 출력하도록 하는 코드 작성 
const interval1 = window.setInterval(function(){
    clock.innerText = currentTime();
},1000)


// 4. clearInterval() 이용하여 시계 멈추게 하기 
document.getElementById("stop").addEventListener("click", function(){
    window.clearInterval(interval1)
})


// ----- 

// 팝업창 열기 
const openPopup1 = document.getElementById("openPopup1")
const openPopup2 = document.getElementById("openPopup2")
const openPopup3 = document.getElementById("openPopup3")

openPopup1.addEventListener("click", function(){
    // 새탭에서 열기 
    window.open("09_배열.html")
})

openPopup2.addEventListener("click", function(){
    // 최소한의 팝업창 형태로 열기 
    window.open("09_배열.html", "_blank", "popup")
})

openPopup3.addEventListener("click", function(){
    // 옵션이 지정된 팝업창
    // 옵션 작성 방법: "K=V, K=V, K=V", 크기 단위 작성X(px고정)
    const options = "width=400, height=500, top=50. left=400"
    window.open("09_배열.html", "popupWindow", options)
})


// 팝업창(자식) 열기 
document.getElementById("sendChild").addEventListener("click", function(){
    const options = "width=400, height=500, top=50. left=400"
    window.open("10-1_popup.html", "popupWindow", options)
})


