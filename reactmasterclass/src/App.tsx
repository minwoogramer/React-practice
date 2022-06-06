
import { createGlobalStyle, } from "styled-components";
import  styled from "styled-components"
import Router from"./Router"

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@1,300&display=swap');
  body{
    color:red;
  }
  table{
    border-collapse: collapse;
    border-spacing: 0;
    background-color: ${props =>props.theme.bgColor};
    color:${(props)=> props.theme.textColor}
  }
  a{
    text-decoration: none;
    color:inherit;//부모로부터 색상을가져와서 링크를 눌러도 색깔이 바뀌지않음 개꿀;
  }
  *{
    box-sizing:border-box;
  }
`

function App() {
   return <>
   <GlobalStyle/>
   <Router/>

   

   </>
}

export default App;
