import React from "react";
import ToastShelf from "../ToastShelf/ToastShelf";
import ToastPlayground from "../ToastPlayground";
import Footer from "../Footer";
import ToastProvider from "../ToastProvider/ToastProvider";

function App() {
  return (
    <>
      <ToastProvider>
        <ToastShelf />
        <ToastPlayground />
      </ToastProvider>
      <Footer />
    </>
  );
}

export default App;
