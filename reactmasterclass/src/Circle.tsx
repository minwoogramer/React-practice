import styled from "styled-components";
import {useState} from "react"

interface ContainnerProps{
    bgColor:string;
    borderColor:string;
}
//1.interface 는 object를 설명해주는거야
//TypeScript에게 Container가 bgColor를 받을거라 애기하려면 여기다 붙여주면돼
const Containner = styled.div<ContainnerProps>`
    width: 200px;
    height: 200px;
    background-color: ${(props) => props.bgColor};
    border-radius: 100px;
    border: 1px solid ${(props) => props.borderColor};
//Circleprops.borderColor is required 상태이기 떄문에 이쪽에서 색깔을 반드시 지정해줘야함
    `;
interface CircleProps{
    bgColor:string;
    borderColor?:string;//optional(없을수도있다)옵셔널체이닝하는이유^
    text?:string;
}

//components의 props에 type을 주는법
//만약 실수하거나 반드시보내야하는 props를 보내지않는다면 불평할꺼임
function Circle({bgColor, borderColor, text ="default text"}:CircleProps){
const[counter, setCounter] = useState<number| string | boolean>(0);
setCounter(2);
setCounter("hello");
setCounter(true);
return <Containner bgColor={bgColor}
 borderColor={borderColor ?? bgColor}>{text}</Containner>;//optional 체이닝할때 쓰는거
//undefined일수도 sting일수도있다는걸암
}

export default Circle;

// interface PlayerShape{
//     name:string;
//     age:number;
//     hello:number;
// }

// const sayHello = (playerObj:PlayerShape)=> `Hello ${playerObj.name} you are ${playerObj.age} years old.`
// sayHello({name:"hi", age:12, hello:1})