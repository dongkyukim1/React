import React from 'react';

const Basic = () => {
    let text = 'hello world';
    const num = 15;
    const obj = {key: 0, a: 1, b: 2};
    const arr = ['a', 'b', 'c'];
    const imageurl = 'https://i.pinimg.com/236x/d5/33/dc/d533dc133da25358d19c5e2c55f03556.jpg';

    return (
        <div>
            <h1>변수 넣기</h1>
            <ul>
                <li>{text}</li>
                <li>{text + 'text'}</li>
            </ul>
            <ul>
                <li>{num}</li>
                <li>{num}+15</li>
            </ul>
            <ul>
                <h1>
                 Boolean,Nulish 값 넣기
                </h1>
            </ul>
            <ul>
                <li>{arr}</li>
                <li>{[<div>111</div>,<div>222</div>,<div>333</div>]}</li>
            </ul>
            <h2> 태그 속성에 넣기</h2>
            <ul>
                <li>
                    <img src ={imageurl} alt={"logo"} />
                </li>
            </ul>
        </div>
    );
};

export default Basic;

// const
// 용도: 재할당이 불가능한 상수를 선언할 때 사용
// 스코프: 블록 스코프
// 특징:
// 선언과 동시에 초기화해야 함
// 값을 변경할 수 없음 (단, 객체나 배열의 내부 속성은 변경 가능)
// 재선언 불가능
//
// let
// 용도: 재할당이 필요한 변수를 선언할 때 사용
// 스코프: 블록 스코프
// 특징:
// 선언 후 나중에 값 할당 가능
// 재할당 가능
// 같은 스코프 내에서 재선언 불가능
//
// var
// 용도: ES6 이전의 변수 선언 방식 (현재는 사용을 권장하지 않음)
// 스코프: 함수 스코프 또는 전역 스코프
// 특징:
// 호이스팅(hoisting)으로 인해 선언 전에 사용 가능
// 재선언과 재할당 모두 가능
// 블록 스코프를 무시함
//
// 주요 차이점
// 스코프:
// const와 let: 블록 스코프
// var: 함수 스코프
//
// 재할당:
// const: 불가능
// let과 var: 가능
//
// 재선언:
// const와 let: 같은 스코프 내에서 불가능
// var: 가능
//
// 초기화:
// const: 선언과 동시에 필수
// let과 var: 선택적
//
// 호이스팅:
// const와 let: 선언만 호이스팅되고, TDZ(Temporal Dead Zone) 적용
// var: 선언과 초기화가 호이스팅됨
//
// 사용 권장사항
// 기본적으로 const를 사용하여 변수를 선언하세요.
// 재할당이 필요한 경우에만 let을 사용하세요.
// var의 사용은 가능한 피하세요.