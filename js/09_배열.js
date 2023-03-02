// 배열확인 
document.getElementById("btn1").addEventListener("click", function(){
    const arr1 = new Array();
    const arr2 = new Array(3);
    const arr3 = [];
    const arr4 = ["사과", "포도", "수박"];

    console.log(arr1)
    console.log(arr2)
    console.log(arr3)
    console.log(arr4)
    
    console.log("------")

    // 배열에 존재하지 않는 인덱스에 값을 대입하면 자동으로 추가되면서 길이도 증가한다. 
    // 증가한 길이 중 값을 지정하지 않은 부분은 empty로 남아 있는다. 
    arr1[0] = '뽀로로'
    arr1[1] = 5000
    arr1[2] = true

    arr1[5] = 123
    console.log(arr1)

    console.log("------")

    //for문으로 배열 요소 반복 접근하기 
    //1. 일반 for문: 배열, 컬렉션에서 사용 
    for(let i = 0; i < arr1.length; i++){
        console.log(arr1[i])
    }

    //2. 배열.forEach(function(item, index){반복 수행될 코드}) - 배열에서만 가능
    //   - item: 현재 접근 중인 요소 
    //   - index: 현재 인덱스 
    // 여러 요소를 얻어오는 경우(HTMLCollection, NodeList)는 배열이 아니므로 사용 불가 
    arr4.forEach(function(a, i){
        console.log(i + " : " + a)
    })

    //3. for(item of 배열 또는 컬렉션) {} : '배열', 컬렉션
    // java의 향상된 for문과 비슷
    // (Symbol.iterator)가 존재하는 객체에 사용 가능)
    //  ㄴ> console.log(배열) 했을 때 결과창 Prototype을 열어보면 있음 
    for(let item of arr4) {
        console.log(item)
    }

    console.log("------")

    // li 태그에 작성된 값 얻어와서 합 구하기 
    const list = document.getElementsByTagName("li")
    console.log(list) // 결과: HTML컬렉션- for each문 제한 있음

    const list2 = document.querySelector("#test > li")
    console.log(list2) // 결과: NodeList(트리형태)- 자식과 부모형태로 가져왔기 때문 - for each문 제한 

    // -> 이런 애들은 일반 for문, for of문 사용(배열과 함께 사용할 땐 for of문을 사용하도록 하자) 
    let sum = 0;
    for(let item of list) {
        sum += Number(item.innerText)
    }
    console.log("sum: " +  sum) 


    // 4. for(let key in 객체) - JS'객체'용 for문
})


//배열 관련 함수 확인
document.getElementById("btn2").addEventListener("click", function(){

    // 비어있는 배열 생성 
    const arr = []; // == new Array()

    // 배열.push(값) : 배열 마지막 요소로 전달한 값이 추가 
    arr.push("슈슈버거")
    arr.push("베토디버거")
    arr.push("상하이버거")
    arr.push("1955버거")
    console.log(arr.toString())

    // 배열.pop() : 배열의 마지막 요소를 꺼내와 반환
    const temp = arr.pop();
    console.log("arr : " + arr.toString())
    console.log("temp: " + temp)

    // 배열.indexOf("값")
    console.log("슈슈버거 인덱스: " + arr.indexOf("슈슈버거"))
    console.log("배열에 스낵랩이 있는지?: " + (arr.indexOf("스낵랩") != -1))
    // 엄청 자주 사용! 


    //배열.sort()
    console.log(arr.sort() )

     // 숫자 정렬의 문제점과 해결방법 
     const numArr = [5, 3, 2, 10, 1]
     console.log(numArr.sort())
     // 마지막의 1을 읽어서 개부터 정렬을 해줌. 그래서 정렬기준을 넣어야 한다. 
     console.log(numArr.sort(function(a,b) {return a-b}))
     // a,b 순서대로 비교하여 a - b.. 네? ㅠㅠ? b -a ... 자료구조 정렬 알고리즘 공부 필요.... 

     // sort()는 원본을 훼손시키는 함수이다.(리액트에서 원본불변 중요..)
     // 나중에 다시 배열을 출력하면 원래 순서가 아닌, sort()에서 정렬된 순서로 바뀌어 있다. 
     // 원본 훼손 안하고 싶으면 깊은 복사 이용하여 해결..(똑같은 거 하나 더 만들어 사용..)


     // 배열.join("구분자")
     console.log(numArr.join("//"))

})

//  for(let item of arr4) {
//     console.log(item)
// }
// 실습
document.getElementById("lottery").addEventListener("click", function(){
    const lottoArr = [];

    for(let i = 0; i < 6; i++) {
        randomNum = (Math.floor(Math.random() * 45)) + 1
        if(lottoArr.indexOf(randomNum) === -1) {
            lottoArr.push(randomNum)
        } 
    }
    console.log("로또번호 : " + lottoArr.sort(function(a,b){return a-b}).join(","))

})

//풀이
document.getElementById("lottery2").addEventListener("click", function(){
    const lotto = [];

    while(lotto.length < 6) {
        // 1~45사이의 난수
        const random = Math.floor(Math.random() * 45 + 1)

        // 중복 검사, 배열에 중복값이 없을 때 마지막 요소로 추가
        if(lotto.indexOf(random) == -1) {
            lotto.push(random)
        }
    }
    lotto.sort(function(a,b){return a-b}) 
    console.log("로또번호2: " + lotto)
})