document.getElementById("btn1").addEventListener("click", function(){

    // 부모 
    // 요소.parentNode: 요소의 부모 노드를 탐색하여 반환 

    // 자식(여러개 가능)
    // 요소.childNodes: 요소의 자식 노드를 모두 반환(NodeList 형태) 
    // 요쇼.firstChild: 첫번째 자식 노드를 탐색해서 반환 
    // 요소.lastChild: 마지막 자식 노드 탐색해서 반환 
    // 요소.childNodes[인덱스]: 인덱스 x번째 자식 노드를 탐색헤서 반환 

    // 형제 
    // 요소.previousSibling: 요소의 이전 형제 노드 반환 
    // 요소.nextSibling: 요소의 다음 형제 노드 반환 

    // test의 자식 노드를 모두 얻어와 확인하기 
   const testNodeList = document.getElementById("test").childNodes
   console.log(testNodeList)
   // * text: 요소와 요소 사이의 공백 

   // 노드 탐색 
   const li1 = document.getElementById("li1")
   console.log(li1.parentNode)

   // 노드 탐색 활용: #li1 부모의 배경색을 orange로 변경 
   li1.parentNode.style.backgroundColor = "orange"

   // #li1 부모노드의 마지막 부분에 "ABCD"라는 text node 추가 
   // 요소.append(요소 OR 노드) : 마지막 자식으로 추가 
   li1.parentNode.append("ABCD")


   console.log("실습------")
   // 실습
   const test = document.getElementById("test")
   // #test의 첫번째 자식 노드 찾기
   console.log("1. " + test.firstChild)
   
   // #test의 마지막 자식 노드 찾기 
   console.log("2. " + test.lastChild)

   // #test의 자식 노드 중 5번째 인덱스 노드 찾기 
   console.log("3. " + test.childNodes[5]) 

   // #test의 자식 노드 중 5번째 인덱스 노드의 마지막 자식으로 "Zzz"추가 
   console.log("4. ") + test.childNodes[5].append("ZZZ")

   // #test의 자식 노드 중 5번째 인덱스의 이전 형제 노드 
   console.log("5. " + test.childNodes[5].previousSibling)

   // #test의 자식 노드 중 5번째 인덱스의 다음 형제 노드
   console.log("6. " + test.childNodes[5].nextSibling)  

   // #test의 자식 노드 중 5번째 인덱스의 이전 형제 노드의 이전 형제 노드  
   console.log("7. " + test.childNodes[5].previousSibling.previousSibling) 

})

//요소 탐색 확인용 
document.getElementById("btn2").addEventListener("click", function(){
    const test = document.getElementById("test") // 부모
    const li1 = document.getElementById("li1")   // 자식

    // #li1의 부모 요소 탐색
    console.log(li1.parentElement)

    // #li1의 부모 요소의 부모요소 탐색
    console.log(li1.parentElement.parentElement)

    // #test의 모든 자식 요소 탐
    console.log(test.children)

    // #test의 첫번째 자식 요소 탐색
    console.log(test.firstElementChild)

    // #test의 마지막 자식 요소 탐색
    console.log(test.lastElementChild)

    // #test의 자식 요소 중 2번 인덱스 탐색
    console.log(test.children[2])

    // #test의 자식 요소 중 2번 인덱스의 이전 형제 요소 클릭 시 작성된 내용을 alert로 출력 
    test.children[2].previousElementSibling.addEventListener("click", function(){

    // this == 이벤트가 발생한 요소 
    // == #test의 자식 요소 중 2번 인덱스의 이전 형제 요소 
    alert(this.innerText)
    // 이벤트가 발생한 요소 다음 다음 형제 요소의 배경색을 red로 변경
    this.nextElementSibling.nextElementSibling.style.red.backgroundColor = "red"
    })

})

//-------

// innerHTML
const btn3 = document.getElementById("btn3")
const div3 = document.getElementById("div3")
let count3 = 1;

btn3.addEventListener("click", function(){

    if(count3 <= 10) {
        const input = "<input type = 'text'>"
        div3.innerHTML += "<div>" + count3 + input + "</div>"
        count3++
    }
})


// createElement()
const btn4 = document.getElementById("btn4")
const div4 = document.getElementById("div4")
let count4 = 1;

btn4.addEventListener("click", function(){
    
    if(count4 <= 10) {
        // document.getElement("태그명")은 해당 태그 요소를 생성하여 반환 
        // 즉, 요소를 생성할 뿐 화면에 추가되지 않음 

        const div = document.createElement("div")
        const input = document.createElement("input")

        // <div id = "div4">
        //      <div>
        //           count4
        //           <input type = "text">
        //      </div>
        //      <div>
        //           count4
        //           <input type = "text">
        //      </div>
        //      (클릭할 때마다 늘어남... )
        // </div>
        
        div.innerText = count4
        count4++

        // input을 요소 div의 마지막 자식으로 추가 
        div.append(input)

        // div4의 마지막 자식으로 추가 
        div4.append(div)
    }
})








