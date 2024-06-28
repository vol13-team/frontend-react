import React, { useEffect } from "react";

const Answer: React.FC = () => {
  useEffect(() => {
    const userAnswer: string = "A";
    const correctAnswer: string = "D";
    const isCorrect = userAnswer === correctAnswer;

    document.getElementById("userAnswer")!.textContent = userAnswer;
    document.getElementById("correctAnswer")!.textContent = correctAnswer;
    document.getElementById("resultText")!.textContent = isCorrect ? "⭕ 正解！" : "❌ 不正解";
    document.getElementById("resultText")!.style.color = isCorrect ? "blue" : "blue";
  }, []);

  const handleBackButton = () => {
    window.history.back();
  };

  return (
    <section style={{ margin: 90 }}>
      <div style={styles.container}>
        <p>
          あなたの解答： <span id="userAnswer"></span>
        </p>
        <div style={styles.result} id="resultText">
          不正解 ✖️
        </div>
        <br />
        <div style={styles.explanation}>
          <h2>
            <b>解説</b>
          </h2>
          <p>
            ここには解説文が入ります。解説文はプログラム内のモジュールがどれだけ特定の機能や目的に集中しているかを示します。必要以上に短い場合、モジュール内の要素は同じ機能や目的に密接に関連しておらず、モジュールは単一の意味を持ったようなものになっていません。この意味がプログラムの保守性や理解性を向上させる一因となります。
          </p>
          <br />
          <h2>
            <b>正解：</b>
            <span id="correctAnswer"></span>
          </h2>
        </div>
        <div style={styles.buttonContainer}>
          <button style={styles.button} onClick={handleBackButton}>
            問題一覧に戻る
          </button>
        </div>
      </div>
    </section>
  );
};

const styles = {
  container: {
    textAlign: "center" as const,
    marginTop: "50px",
  },
  result: {
    color: "blue",
    fontSize: "24px",
    margin: "20px 0",
    backgroundColor: "#e0f0ff",
    padding: "10px",
    borderRadius: "5px",
  },
  explanation: {
    backgroundColor: "#f0f0f0",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "left" as const,
    margin: "0px auto",
    width: "80%",
    maxWidth: "600px",
  },
  buttonContainer: {
    marginTop: "20px",
    textAlign: "center" as const,
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

export default Answer;
