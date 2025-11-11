// アプリ全体の外側を管理するファイル
import "./styles.css"; // スタイルを読み込み
import MusicPlayer from "./components/MusicPlayer"; // 音楽プレイヤーの本体を読み込み

// Reactコンポーネント（App関数）を定義
export default function App() {
  // returnの中が実際に画面に表示される部分
  return (
    <div className="wrap center">
      {" "}
      {/* 全体を中央寄せにするためのクラス */}
      <MusicPlayer /> {/* 音楽プレイヤーのUIをここに配置 */}
    </div>
  );
}
