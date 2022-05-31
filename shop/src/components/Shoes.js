
import data from '../data.js'//서버에서 데이터받아오기 지금은 파일에서 import했습니다.
import React, { useState } from "react";
import axios from 'axios';


function Shoes(){
    let [shoes, setShoes] = useState(data);
    return (
       //shoes 갯수만큼 돌려주세요~
      //파라미터는 두개까지 작명가능
      //i ={i}로 props 받아왔음
    <>
      <div className="main-bg"></div>
    <div className="container">
         <div className="row">
    {
      //shoes 갯수만큼 돌려주세요~
      //파라미터는 두개까지 작명가능
      //i ={i}로 props 받아왔음
    shoes.map((a, i) =>{
      return (
        <Card shoes={shoes[i]} i={i} key={i}></Card>
      )
    })}

         </div>
     
    </div> 
    <button onClick={()=>{
      axios.get('https://codingapple1.github.io/shop/data2.json')
      .then((result)=>{
       console.log(result.data) 
       console.log(shoes)
       //가져온 데이터를 state에 집어넣었음
       let copy = [...shoes, ...result.data];//구조분해할당으로 합치기
       setShoes(copy)
         })
      .catch((error)=>{
        console.log(error)})
    }}>버튼</button>
    </> 
    )}
 
  //컴포넌트만들기
//상품다르게 보여주고 싶다면 문자 중간에변수 넣는 문법을사용해서 넣어주기
   function Card(props){
    return (
      <div className="col-md-4">
        <img src={'https://codingapple1.github.io/shop/shoes' + (props.i+1) + '.jpg'}
         width="80%" />
        <h4>{ props.shoes.title }</h4>
        <p>{ props.shoes.price }</p>
      </div>
    )
}
export default Shoes ;
