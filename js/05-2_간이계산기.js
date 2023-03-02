let num1 = document.getElementById("num1")
let num2 = document.getElementById("num2")
let result = document.getElementById("result")


function calc(btn) {

    const op = btn.innerText;

    // 현재 input 요소에 작성된 값을 얻어 변수에 저장 
    const n1 = Number(num1.value)
    const n2 = Number(num2.value)

    // 자.스 내장객체: 
    // eval("코드형식의 문자열")
    //  -> 매개변수의 문자열을 JS코드로 해석/수행하는 함수 
    //  -> 속도 느림 + 보안이슈로 현재는 사용 안함 
    //  -> eval(n1 + op + n2)
    
    result.innerText = new Function("return " + n1 + op + n2)();
                                     // 띄어쓰기를 안하면 문자열 바로 뒤에 숫자가 붙는다.
    
}
