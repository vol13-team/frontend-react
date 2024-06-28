import React, { useState } from "react";
import ReactDOM from "react-dom";

const Question: React.FC = () => {
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);

  const handleChoiceClick = (choice: string) => {
    setSelectedChoice(choice);
  };

  const handleCheckAnswer = () => {
    if (selectedChoice) {
      console.log(`Selected choice: ${selectedChoice}`);
      window.location.href = "Answer.tsx"; // 解答ページに遷移(後で変更する)
    } else {
      alert("選択肢を選んでください");
    }
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <p style={styles.question}>上級者向け問題</p>
        <p style={styles.subQuestion}>Q.凝集度の高いプログラムの特徴は何ですか？</p>
        <div style={styles.choices}>
          {["A", "B", "C", "D"].map((choice) => (
            <div
              key={choice}
              style={{
                ...styles.choice,
                backgroundColor: selectedChoice === choice ? "#80c0ff" : "#f0f0f0",
              }}
              onClick={() => handleChoiceClick(choice)}
            >
              {choice === "A" ? "A.一つのモジュールが多くの異なる役割を果たす" : ""}
              {choice === "B" ? "B.同一の機能を果たす要素が分散されている" : ""}
              {choice === "C" ? "C.モジュールが互いに結結合である" : ""}
              {choice === "D" ? "D.モジュールが特定の機能に集中している" : ""}
            </div>
          ))}
        </div>
        <div style={styles.buttonContainer}>
          <button style={styles.button} onClick={handleCheckAnswer}>
            答え合わせ
          </button>
        </div>
      </div>
    </section>
  );
};

export default Question;

const styles = {
  section: {
    margin: "90px 20px", // セクションの余白
  },
  container: {
    textAlign: "center" as const,
    marginTop: "50px",
  },
  question: {
    fontSize: "24px",
    marginBottom: "10px",
  },
  subQuestion: {
    fontSize: "20px",
    marginBottom: "40px",
    backgroundColor: "#f9f9f9", // 背景色を追加
    padding: "20px", // パディングを追加
    borderRadius: "10px", // 角を丸くする
    border: "1px solid #ddd", // 境界線を追加
  },
  choices: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "20px",
    justifyItems: "center",
    alignItems: "center",
    maxWidth: "900px",
    margin: "0 auto",
  },
  choice: {
    backgroundColor: "#f0f0f0",
    padding: "30px",
    borderRadius: "10px",
    cursor: "pointer",
    width: "100%", // グリッドアイテムの全幅
    textAlign: "center" as const,
  },
  buttonContainer: {
    marginTop: "30px",
    textAlign: "right" as const, // ボタンコンテナを右揃え
    paddingRight: "200px", // ボタンを右に移動するためのパディング
  },
  button: {
    backgroundColor: "#ff4081",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
};

ReactDOM.render(<Question />, document.getElementById("root"));
