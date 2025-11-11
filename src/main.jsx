// React本体を読み込む（コンポーネントを使うために必要）
import React from "react";
// Reactをブラウザ画面（DOM）に描画するためのライブラリ
import ReactDOM from "react-dom/client";
// アプリのメインコンポーネント（App.jsx）を読み込む
import App from "./App.jsx";
// 全体のスタイルを読み込む
import "./styles.css";

// createRoot → React18以降の新しい書き方
// index.html内の<div id="root"></div> にReactアプリを描画してる
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
