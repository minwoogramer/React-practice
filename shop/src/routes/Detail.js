import { useState,useEffect } from "react";
import {useParams} from "react-router-dom"
import{Nav} from "react-bootstrap"
import data from '../data.js'
import styled from 'styled-components'
import '../App.css';
// //옛날 컴포넌트만드는법
// class Detail2 extends React.Component {
//   componentDidMount(){
//   //컴포넌트 mount시 여기 코드 실행됌
//   }
//   componentDidUpdate(){
//   //컴포넌트 update시 실행됌
//   }
// }
let YellowBtn = styled.button`
background-image: ${props => props.bg};
color : black;
padding : 10px;`


function Detail(props){
    
 
    
    let [탭, 탭변경] = useState(0)
    let {id} = useParams();
    
    let [count, setCount] = useState(0)
    let [alert, setAlert] = useState(true)
    let [fade, setFade] = useState(false)   


    useEffect(()=>{
      let timer= setTimeout(() => {setAlert(false)}, 2000)
       return ()=>{
           clearTimeout(timer)
       }
    },[])
    
    
    let 찾은상품 = props.shoes.find(function(x){
        return x.id == id
      });
    
    return (
        <div className={`container `}>
            {
                alert === true
                ? <div className="alert alert-warning">2초이내 구매시 할인</div>:null
            }
        {count}
        <YellowBtn bg="blue"></YellowBtn>
        <YellowBtn bg="orange"></YellowBtn>
            <button className="btn btn-primary" onClick={setCount(count + 1)}>버튼</button>
            <div className="row">
                <div className="col-md-6">
                  <img src={'https://codingapple1.github.io/shop/shoes1.jpg'}
         width="100%" alt="profile" />
                </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{찾은상품.title}</h4>
                    <p>{찾은상품.content}</p>
                    <p>{찾은상품.price}</p>
                    <button className="btn btn-primary">주문하기</button>
                </div>
            </div>
            <Nav variant="tabs"  defaultActiveKey="link0">
    <Nav.Item>
      <Nav.Link onClick={()=>{ 탭변경(0) }} eventKey="link0">버튼0</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link onClick={()=>{ 탭변경(1) }} eventKey="link1">버튼1</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link onClick={()=>{ 탭변경(2) }} eventKey="link2">버튼2</Nav.Link>
    </Nav.Item>
</Nav>
<TabContent 탭={탭}/>
            </div>
       

    )
    function TabContent({탭,props}){
        let [fade, setFade] = useState('')
       
        //automatic batching기능
        //state 변경이 다끝난후 실행시켜줌
        //리액트 18버젼부터 이렇게바뀜
        useEffect(()=>{
        let timer= setTimeout(()=>{setFade('end')}, 10)
         return ()=>{
             clearTimeout(timer)
             setFade('')
         }
        }, [탭])
        
        return (<div className={`start ${fade}`}>{[ <div>{props.shoes.title}</div>, <div>{props.shoes.content}</div>, <div>{props.shoes.price}</div> ][탭]}
      </div>)
      }
}
export default Detail;