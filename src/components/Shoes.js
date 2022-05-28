
import data from './data.js'//서버에서 데이터받아오기 지금은 파일에서 import했습니다.
import React, { useState } from "react";


function Shoes(){
    let [shoes] = useState(data);
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
        <Card shoes={shoes[i]} i={i}></Card>
      )
    })}

         </div>
     
    </div> 
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
