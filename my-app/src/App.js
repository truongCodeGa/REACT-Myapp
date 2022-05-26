// import { ErrorBoundary } from "react-error-boundary";
import React, { useEffect, useState } from "react";
// import RouterMovieBackupApp from "./components/RouterMovieBackupApp";
import ContextBackupApp from "./context/ContextBackupApp";
// import AppBackUpModal from "./components/modal/AppBackUpModal";
// import Tooltip from "./components/Tooltip";
// import GameWithReducer from "./components/tictactoe/GameWithReducer";
// import SignUpForm from "./components/form/SignUpForm";

// function ErrorFallback({ error, resetErrorBoundary }) {
//   return (
//     <div role="alert" className="p-5 bg-red-100">
//       <p className="text-red-600">Không thể lấy data. Component đang lỗi</p>
//       {/* <pre>{error.message}</pre> */}
//       <button onClick={resetErrorBoundary}>Try again</button>
//     </div>
//   );
// }

// import ModalBase from "./components/modal/ModalBase";
// import Modal from "./components/modal/Modal";
// import SignUpFormFinal from "./components/form/SignUpFormFinal";
// import SignUpFormHook from "./components/form/SignUpFormHook";
// import SignUpFormV2 from "./components/form/SignUpFormV2";
// import Form from "./components/form/Form";
// import MoviSearchApp from "./components/MoviSearchApp";
// import Form2 from "./components/form/Form2";
// import WrapSidebar from "./components/sidebar/WrapSidebar";
// import Blog from "./components/Blog";
// import Dropdown from "./components/Dropdown";
// import HackerNews from "./components/news/HackerNews";
// import HackerNewsWithHook from "./components/news/HackerNewsWithHook";
// import Input from "./components/Input";
// import Stopwatch from "./components/stopwatch/Stopwatch";
// import TextareaAutoResize from "./components/TextareaAutoResize";
// import Header from "./components/Header";
// import HackerNews from "./components/news/HackerNews";
// import HackerWithReducer from "./components/news/HackerWithReducer";
// import Timer from "./components/Timer";
// import "./App.css";
// import Card from "./components/card/Card";
// import CardList from "./components/card/CardList";
// import { GlobalStyle } from "./GlobalStyles";
// import Card2 from "./components/card/Card2";
// import Game from "./components/tictactoe/Game";
// import DoubleCounter from "./components/counter/DoubleCounter";
// import Button from "./components/button/Button";
// import YoutubeList from "./components/youtube/YoutubeList"; // chuong 2
// import Toggle from "./components/toggle/Toggle";
// import Counter from "./components/counter/Counter";
// import { ThemeProvider } from "styled-components";
// import CardTailwind from "./components/card/CardTailwind";
// import Photos from "./components/photo/Photos";
// const theme = {
//   colors: {
//     blue: "#2979ff",
//   },
//   orange: "#ffa400",
// };

// Bài 12: Tìm hiểu 2 cách styles cơ bản trong React
// Bài 13: Rendering list phần 1
function App() {
  return (
    <div>
      {/* <RouterMovieBackupApp></RouterMovieBackupApp> */}
      {/* <div className="p-16 mt-16 overflow-hidden">
        <Tooltip text="Hover me">This is a tooltip</Tooltip>
      </div> */}
      <ContextBackupApp></ContextBackupApp>
      {/* <ModalBase></ModalBase> */}
      {/* <AppBackUpModal></AppBackUpModal> */}
      {/* <Modal></Modal> */}
      {/* <HackerNewsWithHook></HackerNewsWithHook> */}
      {/* <button onClick={handler}>Click mee</button> */}
      {/* <ThemeProvider theme={theme}>
       </ThemeProvider> */}
      {/* <div className="app"> */}
      {/* <GlobalStyle></GlobalStyle> */}
      {/* <h2>useState</h2> */}
      {/* <Game></Game> */}
      {/* <h3>Reducer</h3> */}
      {/* <ErrorBoundary FallbackComponent={ErrorFallback}>
        <GameWithReducer></GameWithReducer>
      </ErrorBoundary> */}
      {/* <DoubleCounter></DoubleCounter> */}
      {/* <Button>Primary</Button>
      <Button secondary>Secondary</Button>
      <Button green="button--green">green</Button> */}
      {/* <CardList>
        <CardTailwind></CardTailwind>
      </CardList> */}
      {/* </div> */}
      {/* <Photos></Photos> */}
      {/* <Counter></Counter> */}
      {/* <Timer></Timer> */}
      {/* <Header></Header> */}
      {/* <HackerNews></HackerNews> */}
      {/* <HackerWithReducer></HackerWithReducer> */}
      {/* <Stopwatch></Stopwatch> */}
      {/* <Input></Input> */}
      {/* <TextareaAutoResize></TextareaAutoResize> */}
      {/* <div className="p-5">
        <Dropdown></Dropdown>
      </div> */}
      {/* <Blog></Blog> */}
      {/* <WrapSidebar></WrapSidebar> */}
      {/* <MoviSearchApp></MoviSearchApp> */}
      {/* <SignUpForm></SignUpForm> */}
      {/* <SignUpFormV2></SignUpFormV2> */}
      {/* <SignUpFormFinal></SignUpFormFinal> */}
      {/* <SignUpFormHook></SignUpFormHook> */}
    </div>
  );
}
export default App;
//Bài 83: Tìm hiểu về ref cơ bản
// const inputRef, abcRef = useRef(initialValue)
//Bài 188: Giới thiệu Context
//Bài 189: Vấn đề thực tế
//context cung cấp phương pháp chia sẻ giá trị giữa các
//component với nhau
// app(status: false) -> header -> menu -> user -> profile
// Props drilling
// app(status : false ) -> profile: context => truyền trực tiếp
//props xuống profile mà ko cần thông qua bất cứ component nào
