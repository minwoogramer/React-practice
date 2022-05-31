import {useState, useEffect } from "react";
import {useParams} from "react-router-dom"
// //옛날 컴포넌트만드는법
// class Detail2 extends React.Component {
//   componentDidMount(){
//   //컴포넌트 mount시 여기 코드 실행됌
//   }
//   componentDidUpdate(){
//   //컴포넌트 update시 실행됌
//   }
// }

function Detail(props){
    let [count,setCount]= useState(0)
    let [alert, setAlert] = useState(true)
    let [num, setNum] = useState('')
    let {id} = useParams();
    let getShoes = props.shoes.find((shoes)=>{
      return shoes.id === id;
    })
    useEffect(()=>{
        //mount,update시 여기 코드 실행됌
       let timer = setTimeout(()=>{setAlert(false)}, 1000)

        return ()=>{//useEffect 동작전에 실행되는 코드를 이렇게 넣으면됍니다.
            //cleanup function///실행하기전에 깨끗하게 해준다고 생각하면됍니다.
            //그래서 기존타이머는 제거해주세요~ 이런거넣으면될것같습니다.
            //기존코드 치우는거 여기에 많이 작성합니다.
            //기존 데이터치우는거 같은것도 여기다쓰면가능
            clearTimeout(timer)//이렇게하면 좀더 안전하게 코드를 작성할 수 있습니다.

        }
    },[])//실행조건 넣을 수 있는곳 [] 1회만 하고싶으면 안에를 비워두면됍니다
   
 //하나 만들고 거기에 유저가 숫자 말고 다른걸 입력하면
// "그러지마세요"라는 안내메세지를 출력해봅시다.
    useEffect(()=>{
      if (isNaN(num) === true){
        alert('그러지마세요')
      }
    }, [])

    return (
        
        <div className="container">
            {
             alert === true ?
            <div className="alert alert-warning">2초 이내 구매시 할인</div>
            : null}{count}
            <button onClick={()=>{ setCount(count+1)}}></button>
            <div className="row">
                <div className="col-md-6">
                  <img src={'https://codingapple1.github.io/shop/shoes.jpg'}
         width="100%" />
                </div>
                <input onChange={((e)=>{ setNum(e.target.value) })} />
                <div className="col-md-6 mt-4">
                    <h4 className ="pt-5">{getShoes.title}</h4>
                    <p>{getShoes.content}</p>
                    <p>{getShoes.price}</p>
                    <button className="btn btn-primary">주문하기</button>
                </div>
            </div>
            </div>
       

    )
}
export default Detail;