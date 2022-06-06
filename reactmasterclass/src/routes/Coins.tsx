import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components" ;

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
    color:${props =>props.theme.bgColor};
    padding:20px;
    border-radius: 15px;
    margin-bottom: 10px;
    a{  
        display:flex;
        align-items: center;
        padding:20px;//링크 누르는 범위가 늘어나게하고싶으면 padding을 쓰자
        transition:color 0.2s ease-in ;
        display: block;//글씨 밖 까지 클릭되게하려면 이걸쓰자
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
interface CoinInterface {
    id: string,
    name: string,
    symbol: string,
    rank: number,
    is_new: boolean,
    is_active: boolean,
    type: string,
}

function Coins(){
    //typescript에게 배열인거 알려주는 방법
    const [coins, setCoins] = useState<CoinInterface[]>([]);
    const [loading, setLoading] = useState(true)
    //중간에 끼어서 실행시키기!
    useEffect(()=>{
     //페이지가실행될때 바로 함수가 실행되게하는법
      (async()=>{
      const response = await fetch("https://api.coinpaprika.com/v1/coins")
      const json = await response.json();
      setCoins(json.slice(0,100));
      setLoading(false)
      })();
    },[])
    return <Container>
        <Header>
            <Title>코인</Title>
        </Header>
       {
       loading ?(
          <Loader>Loading...</Loader>
       ) :<CoinsList>
            {coins.map((coin) =>(
            <Coin key={coin.id}>
                <Link to={{
                    pathname :`/${coin.id}`,

                }}>
                <Img
                 src={`https://coinicons-api.vercel.app/${coin.symbol.toLowerCase()}`}/>
                 {coin.name} &rarr;
                 </Link>
                  </Coin>))}
        </CoinsList>}
    </Container>
}
export default Coins;