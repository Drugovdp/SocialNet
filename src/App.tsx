import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>

      <div className="App">
        <h2>Hello Samurai</h2>
        <Routes>
          <Route path={"/hello"} element={<HelloMassage message={'Hello guys'} />} />
          <Route path={"/bye"} element={<ByeMessage message={'Bye guys'} />} />
        </Routes>
      </div>

    </BrowserRouter>
  );
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