import React from "react";

// 子要素（props.children）をネオン文字風に表示するコンポーネント
export default function NeonText({ children }) {
  return <h1 className="neonText">{children}</h1>;
}
