
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useQuery } from "react-query";
import { fetchCoins } from "../api";
import { Helmet } from "react-helmet";
import { useSetRecoilState } from "recoil";
import { isDarkAtom } from "../atom";

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
const CoinsList =styled.ul`
    
`
const Coin = styled.li`
    background-color: white;
    color:${props =>props.theme.textColor};
    border-radius: 15px;
    margin-bottom: 10px;
    a{  
        display: flex;
        align-items: center;
        padding:20px;//링크 누르는 범위가 늘어나게하고싶으면 padding을 쓰자
        transition:color 0.2s ease-in ;
    }
    &:hover{
        a{//여기서 anchor를 쓴이유는 모든 react router link들이 결국에는 anchor로 바뀌기 때문이고 react router dom이 우리 대신에 설정을 도와줄 특별한 event listener들이 있기도하기때문
            color:${(props)=>props.theme.accentColor};
        }
    }
`
const Title = styled.h1`
 font-size:48px;
 color:${props => props.theme.accentColor};
 font-weight: 600;
`

const Loader = styled.div`
    text-align:center;
    display: block;
`
const Img= styled.img`
    width:35px;
    height:35px;
    margin-right:10px;

`
const CheckBoxWrapper = styled.div`
  margin: 0px 0px 0px 10px;
  position: relative;
  display: flex;
`;
const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;
const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${CheckBoxLabel} {
    background: ${(props) => props.theme.accentColor};
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
      background-color: black;
    }
  }
`;
// const coins = [
//     {
//         id: "btc-bitcoin",
//         name: "Bitcoin",
//         symbol: "BTC",
//         rank: 1,
//         is_new: false,
//         is_active: true,
//         type: "coin",
//         },
//         {
//         id: "eth-ethereum",
//         name: "Ethereum",
//         symbol: "ETH",
//         rank: 2,
//         is_new: false,
//         is_active: true,
//         type: "coin",
//         },
//         {
//         id: "hex-hex",
//         name: "HEX",
//         symbol: "HEX",
//         rank: 3,
//         is_new: false,
//         is_active: true,
//         type: "token",
//         },
// ]
//우리 코인이 어떻게생겼는지 Typescript에게 말해주는 방법
interface ICoin {
    id: string,
    name: string,
    symbol: string,
    rank: number,
    is_new: boolean,
    is_active: boolean,
    type: string,
}

const Coins= ()=>{
  const{ isLoading, data } = useQuery<ICoin[]>("allCoins", fetchCoins)
  const setDarkAtom = useSetRecoilState(isDarkAtom);
  const changeTheme = () => {
    setDarkAtom((cur) => !cur);
  };
    // //typescript에게 배열인거 알려주는 방법 안알려주면 불평함;
    // const [coins, setCoins] = useState<CoinInterface[]>([]);
    // const [loading, setLoading] = useState(true)
    // //중간에 끼어서 실행시키기!
    // useEffect(()=>{
    //  //페이지가실행될때 바로 함수가 실행되게하는법
    //   (async()=>{
    //   const response = await fetch("https://api.coinpaprika.com/v1/coins")
    //   const json = await response.json();
    //   setCoins(json.slice(0,100));
    //   setLoading(false);
    //   })();
    // },[]);
    return (<Container>
         <Helmet>
      <Title>
      GreatCoin
        </Title>
      </Helmet>
      
        <Header>
            <Title>GreatCoin</Title>
        </Header>
        <CheckBoxWrapper>
          <CheckBox id="checkbox" type="checkbox" onClick={changeTheme} />
          <CheckBoxLabel htmlFor="checkbox" />
        </CheckBoxWrapper>
       {
       isLoading ?(
          <Loader>Loading...</Loader>
       ) :<CoinsList>
            {data?.slice(0,50).map((coin) =>(
            <Coin key={coin.id}>
                <Link
                to={`/${coin.id}`}
                state= {{name: coin.name}}>
                <Img
                 src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}
                 />
                 {coin.name} &rarr;
                 </Link>
                  </Coin>))}
        </CoinsList>}
    </Container>)
}
export default Coins;