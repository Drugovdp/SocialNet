import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {state} from "./component/State";

let m1 = state.profilePage.posts[0].message
let m2 = state.profilePage.posts[1].message

const App = () => {
  return (
    <BrowserRouter>

      <div className="App">
        <h2>Hello Samurai</h2>
        <Routes>
          <Route path={"/hello"} element={<HelloMassage message={'Hello guys'} />} />
          <Route path={"/bye"} element={<ByeMessage message={'Bye guys'} />} />
          <Route path={"/"} element={<Mess />} />
        </Routes>
      </div>

    </BrowserRouter>
  );
}

const Mess = () => {
    return (
        <>
            <div>{m1}</div>
            <div>{m2}</div>
        </>
    )
}

type MessageType = {
  message: string
}

const HelloMassage: React.FC<MessageType> = (props) => {
  return (
    <>
      <h4>{props.message}</h4>
    </>
  )
}

const ByeMessage: React.FC<MessageType> = (props) => {
  return (
    <>
      <h4>{props.message}</h4>
    </>
  )
}

export default App;