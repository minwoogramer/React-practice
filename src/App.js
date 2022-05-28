
import './App.css';
import data from './data.js'//서버에서 데이터받아오기 지금은 파일에서 import했습니다.
import { Navbar, Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route , Link, useNavigate, Outlet} from 'react-router-dom'
import Shoes from './components/Shoes.js';
import Detail from './routes/Detail.js';
import { useState } from 'react';


function App() {
  let [shoes]= useState(data)
 let navigate= useNavigate();//페이지이동을 도와줌
 
  return (
    <div className="App">

      
      <Navbar bg="dark" variant="dark">
        <Container className="nav-body">
          <Navbar.Brand href="#home" className='title'>INEVITABLE</Navbar.Brand>
          <Nav className="menu">
          {/* <Nav.Link onClick={()=>{navigate('-1')}}>NFT</Nav.Link>이렇게하면 뒤로가기됌! */}
            <Nav.Link onClick={()=>{navigate('/')}}>NFT</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail')}}>DFI</Nav.Link>
            <Nav.Link href="#pricing">DAO</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
      <Route path="/" element={<Shoes/>}/>
      <Route path="/detail/:id" element={<Detail shoes={shoes}/>}/>

        <Route path="/about" element={<About/>}>
         <Route path="member" element={<div>멤버임</div>}/>
         <Route path="location" element={<About/>}/>
        </Route>
        <Route path="/events" element={<EventPage/>}>
         <Route path="one" element={<p>첫 주문시 양배추즙 서비스</p>}/>
         <Route path="two" element={<p>생일기념 쿠폰받기</p>}/>
        </Route>
      
        <Route path="*" element={<div>없는페이지에요</div>}/>
      </Routes>
    </div>
  );
}
//안에있는 거보여주고 싶으면 <Outlet></Outlet>
//nested routs 언제씀? 여러 유사한 페이지필요할때
function About(){
  return (
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </div>
  )
}
function EventPage(){
  return(
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
}
export default App;
