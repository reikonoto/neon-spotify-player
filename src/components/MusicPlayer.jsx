import React, { useState } from "react"; // React本体と、状態を管理するuseStateフックを読み込み
import NeonText from "../NeonText.jsx"; // ネオン風タイトルのコンポーネントを読み込み

// Spotifyの通常URLを埋め込み用URLに変換する関数
function toEmbedUrl(normalUrl) {
  if (!normalUrl) return "";

  // SpotifyのURLから「track」「album」「playlist」などを抜き出す
  const types = ["track", "album", "playlist", "artist", "episode", "show"];
  const match = normalUrl.match(
    new RegExp(`open\\.spotify\\.com\\/(${types.join("|")})\\/([a-zA-Z0-9]+)`)
  );
  if (!match) return ""; // マッチしなければ空文字を返す

  // 抜き出した要素を変数に代入
  const [, kind, id] = match;
  return `https://open.spotify.com/embed/${kind}/${id}?utm_source=generator`;
}

// 音楽プレイヤー本体
export default function MusicPlayer() {
  const [inputUrl, setInputUrl] = useState(""); // 入力欄の内容を保存
  const [embedUrl, setEmbedUrl] = useState(""); // 埋め込み用URLを保存
  const [error, setError] = useState(""); // エラーメッセージを保存

  // Applyボタンが押されたときの処理
  const handleApply = () => {
    const url = toEmbedUrl(inputUrl.trim());
    if (!url) {
      setError(
        "It looks like the URL format is different. Please paste the regular Spotify URL."
      );
      setEmbedUrl("");
      return;
    }
    setError("");
    setEmbedUrl(url); // 正常なら埋め込みURLを保存
  };

  // ここからが実際の画面描画部分
  return (
    <div className="card">
      {" "}
      {/* 外枠（暗い背景＋ネオン風装飾） */}
      <NeonText>Neon Spotify Player</NeonText>
      {/* 入力欄とボタン */}
      <div className="row">
        <input
          className="urlInput"
          type="text"
          placeholder="Paste a Spotify URL (track / album / playlist)"
          value={inputUrl}
          onChange={(e) => setInputUrl(e.target.value)} // 入力のたびにstate更新
        />
        <button className="applyBtn" onClick={handleApply}>
          Apply
        </button>
      </div>
      {/* 注意書き */}
      <p className="note">
        Just paste the regular Spotify URL and click “Apply.” It’ll
        automatically turn into an embed.
      </p>
      {/* エラー表示 */}
      {error && <p className="error">{error}</p>}
      {/* Spotifyプレイヤーを埋め込み */}
      {embedUrl && (
        <div className="playerWrap">
          <iframe
            className="player"
            src={embedUrl}
            width="100%"
            height="352"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
          <p className="hint">
            Due to Spotify’s autoplay restrictions, please press the play button
            on Spotify to start playback.
          </p>
        </div>
      )}
    </div>
  );
}
