// 정규표현식 객체 생성 및 확인하기 

document.getElementById("check1").addEventListener("click", function(){

     // 정규표현식 객체 생성 
     const regEx1 = new RegExp("script")
     const regEx2 = /java/
     
     // 검사할 문자열 
     const str1 = "javascript 정규표현식"
     const str2 = "java, html, css, js 사용중"
     const str3 = "heyjava, java, java"

    // 확인1 "string" 문자열을 가졌나? 
    console.log("1. regEx1.test(str1): " + regEx1.test(str1));
    console.log("2. regEx1.exec(str1): " + regEx1.exec(str1));

    console.log("3. regEx1.test(str2): " + regEx1.test(str2));
    console.log("4. regEx1.exec(str2): " + regEx1.exec(str2));

    console.log("5. regEx1.test(str3): " + regEx1.test(str3));
    console.log("6. regEx1.exec(str3): " + regEx1.exec(str3));

    console.log("-----")

    // 확인2 "java" 문자열을 가졌나? 
    console.log("1. regEx2.test(str1): " + regEx2.test(str1));
    console.log("2. regEx2.exec(str1): " + regEx2.exec(str1));

    console.log("3. regEx2.test(str2): " + regEx2.test(str2));
    console.log("4. regEx2.exec(str2): " + regEx2.exec(str2));

    console.log("5. regEx2.test(str3): " + regEx2.test(str3));
    console.log("6. regEx2.exec(str3): " + regEx2.exec(str3));


    console.log(regEx2.exec(str1));
    console.log(regEx2.exec(str2));
    console.log(regEx2.exec(str3))
})


// 메타문자 확인하기 

// document.getElementById("check2").addEventListener("click", function(){

    // 결과 출력용 div 
    const div1 = document.getElementById("div1")

    // 이전 내용 삭제 : div 안에 내용을 작성할 것인데 이전내용 삭재하지 않으면 클릭할 때마다 누적 
    div1.innerHTML = ""; 

    // [abcd]: 문재열 내에 a, b, c, d 중 하나라도 일치하는 문자가 있는지 검색
    const regEx1 = /[abcd]/

    div1.innerHTML += "/[abcd]/, apple : " + regEx1.test("apple") + "<br>"
    div1.innerHTML += "/[abcd]/, qwerty : " + regEx1.test("qwerty") + "<hr>"

    // ^(캐럿): 문자열의 시작 
    const regEx2 = /^group/
    div1.innerHTML += "/^group/, group100 : " + regEx2.test("group100") + "<br>"
    div1.innerHTML += "/^group/, 100group : " + regEx2.test("100group") + "<hr>"

    //^[abcd] : 문자열이 a, b, c, d 중 하나로 시작하는지 검색 
    const regEx3 = /^[abcd]/
    div1.innerHTML += "/^[abcd]/, group : " + regEx3.test("group") + "<br>"
    div1.innerHTML += "/^[abcd]/, car : " + regEx3.test("car") + "<br>"
    div1.innerHTML += "/^[abcd]/, dark : " + regEx3.test("dark") + "<hr>"

    //$(달러) : 문자열의 끝
    const regEx4 = /team$/
    div1.innerHTML += "/team4/, A-team : " + regEx4.test("A-team") + "<br>"
    div1.innerHTML += "/team4/, team-A : " + regEx4.test("team-A") + "<hr>"

    // A~D-team이 모두 true이려면? : /[a,b,c,d]-team$/
    // 시작은 영어 대문자, 끝은 숫자 : /^[A-Z][0-9]$/
    // 특수문자를 제외한 문자 하나 : /^[a-zA-Z0-9ㄱ-힣]$/
//  })


 // 실습
 const nameTest = /^[가-힣]{2,6}$/
 document.getElementById("input1").addEventListener("keyup", function(){

    const result1 = document.getElementById("result1")
    if(nameTest.test(input1.value)) { // this도 가능
        result1.innerHTML = "유효한 이름입니다."
        
        // document.getElementById("result1").style.color = "green"
        // 요소에 클래스 변경하기 : 요소.classList(요소가 가진 클래스를 배열로 반환)
        // 요소.classList.add("클래스명"): 요소에 특정 클래스 추가 
        // 요소.classList.remove("클래스명"): 요소에 특정 클래스 삭제
        // 요소.classList.toggle("클래스명"): 클래스가 요소에 있으면 제거, 없으면 추가 
        result1.classList.add("confirm")
        result1.classList.remove("error")

        } else {
            result1.innerHTML = "잘못된 이름입니다."

            // document.getElementById("result1").style.color = "red"
            result1.classList.add("error")
            result1.classList.remove("confirm")
        }
        
    })