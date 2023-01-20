// 전역 변수 설정
let n ;



// 주사위 번호 선택
const showDice = () => {
    n =Math.floor(Math.random()* 6) +1;  // 6이하의 정수 난수로 반영
    const s1 = document.querySelector("#s1");

    s1.innerHTML = `<img src="./image/${n}.png" />`
    console.log("선택된 주사위 : ", n)  // 정답 보이기
    show("none", "block", "none" , "none", "block");
}

// 결과가 맞으면
const correct = () => {
    const c1 = document.querySelector("#s3");
    c1.innerHTML = `<img src="./image/o.png">`
    show("block", "none", "block" , "block", "none");
}

// 틀린 경우
const x = () => {
    const x = document.querySelector("#s3");
    x.innerHTML =  `<img src="./image/x.png">`
    show("block", "none", "block" , "block", "none");
}

// 주사위 결과 확인 
const showOk = () => {
    const radios = document.querySelectorAll("input[type=radio]") // 클래스로 정의 한다면 .radios

    // 사용자가 선택한 숫자
    let usern;
    for(let r of radios){
        if(r.checked){
            usern = r.value;
            // console.log(r)
            break;
        }
    } 
    // // console.log(n,usern);

    // 내 방법
    
    if(n == usern){   // 선택 숫자와 주사위가 맞다면 correct 함수
        correct();
    }else{              // 다르다면 x 함수
        x();
    }
    document.querySelector("form").reset();
    

    // 교수님 방법
    /*
    let tag;
    if(n == usern) tag = "o";
    else tag = "x";

    document.querySelector("form").reset();
    document.querySelector("#s1").innerHTML = `<img src="./image/${n}.png">`
    document.querySelector("#s3").innerHTML = `<img src="./image/${tag}.png">`
    show("block", "none", "block" , "block", "none");
    */

}

//요소 보이기 함수
const show = (dspS1,dspS2,dspS3,dspBt1,dspBt2) => {
    const s1 = document.querySelector("#s1") ;
    const s2 = document.querySelector("#s2") ;
    const s3 = document.querySelector("#s3") ;
    const bt1 = document.querySelector("#bt1") ;
    const bt2 = document.querySelector("#bt2") ;

    s1.style.display = dspS1 ;
    s2.style.display = dspS2 ;
    s3.style.display = dspS3 ;
    bt1.style.display = dspBt1 ;
    bt2.style.display = dspBt2 ;
}

//DOM 로드가 된 후 
document.addEventListener("DOMContentLoaded", ()=>{
    show("none", "none", "none" , "block", "none");
   
});