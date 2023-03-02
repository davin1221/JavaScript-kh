// 추가 버튼 클릭 시 동작 
document.getElementById("add").addEventListener("click", function(){

    // <div class="row">
    //     <input type="text" class="in">
    //     <span class="remove">&times;</span>
    // </div>

    // div 요소 생성 및 클래스 추가 
    const div = document.createElement("div")
    div.classList.add("row")

    // --- 
    
    // input 요소 생성 및 클래스 추가 
    const input = document.createElement("input")
    input.classList.add("in")

    // 요소에 속성을 추가하거나 변경할 때 사용하는 함수 
    // 요소.setAttribute("속성명", "속성값")
    // 지우기: 요소.removeAttribute("속성명") : 속성 제거 

    // input type = "number" 추가
    input.setAttribute("type", "number")

    //-- 

    // span 요소 생성 및 클래스, &times; 추가 
    const span = document.createElement("span")
    span.classList.add("remove")
    span.innerHTML = "&times;"

    // span에 클릭 이벤트 동작 추가(동적 요소에 동적으로 이벤트 추가) 
    span.addEventListener("click", function(){
        // 클릭된 x버튼의 부모요소 삭제 
        this.parentElement.remove()
    })

    //-- 조립 
    div.append(input, span)

    // container 클래스의 마지막 자식으로 추가 
    document.querySelector(".container").append(div)

    input.focus();

})


// 계산버튼이 클릭되었을 때 input요소에 작성된 값을 모두 얻어와 합한 후 출력 
document.getElementById("calc").addEventListener("click", function(){

    // 함수는 호출된 시점의 HTML 화면을 기반으로 하여 해석 진행 
    const inputList = document.getElementsByClassName("in")

    let sum = 0; 

    for(let input of inputList) {
       sum += Number(input.value)
    }

    alert("합계: " + sum)
})