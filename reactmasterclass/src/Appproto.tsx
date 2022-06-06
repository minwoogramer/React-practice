import React, { useState } from "react";
import styled,{keyframes} from "styled-components";
import Circle from "./Circle";
import Router from"./Router"

const Container = styled.div`
  background-color:${(props) => props.theme.bgColor};
`

const H1 = styled.h1`
  color: ${(props) => props.theme.textColor};
`
// const Title = styled.h1`
// color: ${(props)=> props.theme.textColor};`


// const Wrapper = styled.div`
// display: flex;`

// const rotationAnimation = keyframes
// /* from */
// 0%{
//   transform:rotate(0deg);
//   border-radius:0px;
// }
// /* to */
// 50%{
//   border-radius:100px;
// }
// 100%{
//   transform: rotate(360deg);
//   border-radius:0px;
// }`
// const Emoji = styled.span`
// font-size: 36px;`

// const Box = styled.div`
// width: 200px;
// height: 200px;
// background-color: tomato;
// display:flex;
// justify-content: center;
// align-items: center;
// background-color: ${(props)=> props.theme.backgroundColor};
// /* animation:${rotationAnimation} 1s linear infinite;
// ${Emoji} */
/* 이렇게해주면 tag종류에 상관없이 css가 작동함
다만 Box라는 컴포넌트안에있어야만 작동함
span{
  font-size:36px;
  &:hover
    font-size:48px;
  }
  &:active{
    opacity: 0;
  }
} */

//스타일 컴포넌트 사용법과 확장하는법
// const Father = styled.div`
//   display: flex;
// `
// const Btn=styled.button`
// color:white;
// background-color:tomato;
// border:0;
// border-radius: 15px;
// `
// //button 컴포넌트의 요소를 바꾸고싶다면 as를사용한다.
// const Link = styled(Btn)``

// const Box = styled.div`
// //props를통해 확장하기
// background-color: ${(props)=>props.bgcolor};
// width:100px;
// height:100px;`
//pros이름을 전달해서 확장하기
//기존컴포넌트의 속성을 가져와서 복붙해주는걸 말함
// const Circle = styled(Box)`
// border-radius: 50px;`

// const Text = styled.span`
// color:white;
// `

// const Input = styled.input.attrs({required: true})`
// background-color:tomato;
// `
//만약 여러개의 input이 있다면 required를 사용해야해 여러번
//이렇게 하면 후에 input에 전달될 모든 속성을 가진 오브젝트를 담을 수 있어
//default가 required:true가됌

function App() {
   return 

  // const [ value, setValue] = useState("")
  // const onChange = (event: React.FormEvent<HTMLInputElement>)=>{
  //   const{
  //     currentTarget:{ value },
  //   } = event;
  //   setValue(value);
  //   console.log(event.currentTarget.value);
  // };
  // const onSubmit = (event: React.FormEvent<HTMLFormElement>) =>{
  //   event.preventDefault();
  // console.log("hello", value);
  // };
  
  // return (
  //   <div>
  //     <form onSubmit={onSubmit}>
  //     <input
  //      value={value}
  //      onChange={onChange}
  //      type="text"
  //      placeholder="username"/>
  //     <button>Log in</button>
  //     </form>
  //   {/* <Circle borderColor="yellow" bgColor="teal"/>
  //   <Circle text="im here" bgColor="tomato"/> */}
  //   </div>
    // <Wrapper>
    // <Box/>
    // <Title>Hello</Title>
    // {//이모지는 스타일컴포넌트안에 있지않지만 꼭 모든 컴포넌트에 스타일컴포넌트처리를 안해줘도됌 
    // /* // <Father >
    // //   <Input/>
    // //   {/* <Btn as= "a" href="/">
    // //     Log in
    // //     </Btn>
        
    // //   <Box bgcolor="teal"/>
    // //   <Text>Hello</Text>
    // //   <Circle bgcolor="tomato"/> */}
    // {/* // </Father> */}
    // </Wrapper>
  
}

