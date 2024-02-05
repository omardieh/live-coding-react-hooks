import { useEffect, useState } from "react";
import "./App.css";

const MyComponent = () => {
  useEffect(() => {
    console.log("inside useEffect");
    return () => {
      console.log("useEffect exited");
    };
  }, []);
  console.log("component render");

  console.log("after useEffect");

  return <div> Hello World </div>;
};

function App() {
  const [apiResp, setApiResp] = useState({});
  const [todoID, setTodoID] = useState(1);
  const [isHidden, setIsHidden] = useState(false);
  const apiURL = `https://jsonplaceholder.typicode.com/todos/${todoID}`;

  // fetch API with onClick
  // const handleClick = () => {
  //   console.log("clicked");
  //   fetch(apiURL)
  //     .then((resp) => resp.json())
  //     .then((data) => setApiResp(data));
  // };

  // infinite loop :
  // console.log("test");
  // fetch(apiURL)
  //   .then((resp) => resp.json())
  //   .then((data) => setApiResp(data));
  // useEffect(() => {}, [])

  // console.log("test");
  // fetch API without any user interaction
  // useEffect(() => {
  //   console.log("inside useEffect");
  //   fetch(apiURL)
  //     .then((resp) => {
  //       return resp.json();
  //     })
  //     .then((data) => setApiResp(data));
  // }, [apiURL]);

  // const handleNextTodo = () => {
  //   setTodoID(todoID + 1);
  // };

  // console.log(todoID);
  return (
    <>
      <h2>Main App</h2>
      <button onClick={() => setIsHidden(!isHidden)}>
        {" "}
        {isHidden ? "show" : "hide"}{" "}
      </button>
      {!isHidden && <MyComponent />}
      {/* <button onClick={handleClick}> fetch API </button> */}
      {/* <button onClick={handleNextTodo}> next TODO </button>
      <h2> {apiResp.title} </h2> */}
    </>
  );
}

export default App;
