
import Router from"./Router"


function App() {
   return <Router/>

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

export default App;
