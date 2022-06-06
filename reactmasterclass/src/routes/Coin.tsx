import { useParams } from "react-router-dom";
import  styled  from 'styled-components';

import  {useState } from 'react';
import { useLocation } from "react-router-dom";

const Container = styled.div`
    padding:0px 20px;
    //아래 두개를 추가하면 화면을 크게했을때도 ,모바일화면처럼 가운데에 위치하게됌
    max-width: 480px;
    margin:0 auto;
`
const Header = styled.header`
    height:10vh;
    display:flex;
    justify-content: center;
    align-items:center;

`
const Title = styled.h1`
 font-size:48px;
 color:${props => props.theme.accentColor};
`
const Loader = styled.div`
    text-align:center;
    display: block;
`
interface RouteParams {
    coinId: string;
   }
   
interface LocationParams {
    state: {
    name: string;
    };
   }
function Coin(){
    const { coinId } = useParams<keyof RouteParams>() as RouteParams;
    const [loading, setLoading] = useState(true)
    const { state } = useLocation() as LocationParams;;//이런식으로 state로 받아오면 일일이 api에서 정보를 받아오지않아 빨라짐
    return<Container>
    <Header>
        <Title>{state?.name || "Loading.."}</Title>
    </Header>
   {
   loading ?(
      <Loader>Loading...</Loader>
   ) :null}</Container>;
}
export default Coin;