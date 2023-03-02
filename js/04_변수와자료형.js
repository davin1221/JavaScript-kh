var str = "js코드는 함수가 아닌 js파일 또는 script태그 내부에 바로 작성 시 HTML 랜더링 시 바로 수행된다."
console.log(str)
// 함수 안에 만들면 함수를 호출해야 실행되나, 전역변수는 페이지 랜더링 시 바로 실행이 된다. 

        
let funTest = ()=> {
    var num1 = 300;
    num2 = 200;

    console.log("함수 안의 변수 num1: " + num1)
    console.log("함수 안의 변수 num2: " + num2)


    if(true) {
        var num3 = 500
        var num3 = 3000
        num4 = 600
    }
    console.log("if문 안의 변수 num3: " + num3)
    console.log("if문 안의 변수 num4: " + num4)
}

funTest();
// console.log(num1) -> 지역변수: 함수 밖에서 사용 불가   ** 스크립트언어는 중간에 에러 발생 시 해석 멈춤. 
console.log("함수 안의 변수 num2: " + num2)    // -> 전역변수: 함수 밖에서도 사용 가능 

console.log("----")

//--자료형 확인
function typeTest() {

    let temp1 = 100;
    // let temp1 = 200; let은 중복 선언 불가

    if(true){
    // 블록 범위 확인
    let temp2 = 200; 
    const temp3 = 300;
    // temp3 = 3000; const는 값을 재할당 할 수 없음
    }
    console.log(temp1)
    // console.log(temp2)
    // console.log(temp3) -> let, const는 지역 안에서만 사용 가능하다.(블록 범위)


    //--- 자료형 확인 
    const typeBox =  document.getElementById("typeBox")

    typeBox.innerHTML = "";

    // const name; 상수는 선언과 동시에 초기화 필수 
    let name; // 이 상태에서 출력하면 undefine
    typeBox.innerHTML += `name: ${name} / ${typeof name}`
    // typeof 변수명: 해당 변수의 자료형을 반환하는 연산자 

    name = "홍길동"
    typeBox.innerHTML += `<br>name: ${name} / ${typeof name}`

    // number
    const age = 20;
    const height = 179.9
    typeBox.innerHTML += `<br>age: ${age} / ${typeof age}`
    typeBox.innerHTML += `<br>height: ${height} / ${typeof height}`


    // boolean
    const isTrue = true
    typeBox.innerHTML += `<br>isTrue: ${isTrue} / ${typeof isTrue}`

    // object(배열, js객체)
    const arr = [10, 20, 30]
    typeBox.innerHTML += `<br>arr: ${arr} / ${typeof arr}`
    for(let i = 0; i < arr.length; i++) {
        typeBox.innerHTML += `<br>arr[i]: ${arr[i]} / ${typeof arr[i]}`
    }

    // ** JS 객체 ** 
    // key : value 쌍으로 이루어짐(Map형태)
    // key는 무조건 string, value는 아무거나 상관 없음
    // 리터럴 표기법 : {}
    const user = {
        "name" : "홍길동",
        "age" : 20,
        "hobby" : ["운동", "음악듣기", "영화감상"]  
    }
    typeBox.innerHTML += `<br>user: ${user} / ${typeof user}`
    console.log(user)
    typeBox.innerHTML += `<br>user.id: ${user.name} / ${typeof user.name}`
    typeBox.innerHTML += `<br>user.age: ${user.age} / ${typeof user.age}`
    typeBox.innerHTML += `<br>user.age: ${user.age} / ${typeof user.age}`
    typeBox.innerHTML += `<br>user.hobby: ${user.hobby} / ${typeof user.hobby}`
    typeBox.innerHTML += `<br>user.hobby[2]: ${user.hobby[2]} / ${typeof user.hobby[2]}`


    // function 
    // 1. 변수명 == 함수명 
    const fnSum = function(n1, n2) { // 익명함수
        return n1 + n2;
    }
    typeBox.innerHTML += `<br>fnSum: ${fnSum} / ${typeof fnSum}` // 함수명만 작성하면 코드자체가 반환
    typeBox.innerHTML += `<br>fnSum: ${fnSum(1,2)} / ${typeof fnSum(1,2)}`

    // 2. 함수를 매개변수로 전달하는 형태 
    function plusFn(num, fn) {
        return num + fn()
    }

    const result = plusFn(100, function() {
        return 30 - 10 ;
    })
    typeBox.innerHTML += `<br>result: ${result}`

}



