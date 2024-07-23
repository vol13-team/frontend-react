import React, { useEffect } from "react";
import { Box, Button, Container, Text, Heading } from "@yamada-ui/react";

// ダミーデータ
const dummyData = {
  userAnswer: "A",
  correctAnswer: "D",
  explanation:
    "ここには解説文が入ります。解説文はプログラム内のモジュールがどれだけ特定の機能や目的に集中しているかを示します。必要以上に短い場合、モジュール内の要素は同じ機能や目的に密接に関連しておらず、モジュールは単一の意味を持ったようなものになっていません。この意味がプログラムの保守性や理解性を向上させる一因となります。",
};

const Answer: React.FC = () => {
  useEffect(() => {
    const { userAnswer, correctAnswer } = dummyData;
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
    <Box as="section" sx={{ margin: 10 }}>
      <Container sx={{ textAlign: "center", marginTop: "50px" }}>
        <Text as="p">
          あなたの解答： <Text as="span" id="userAnswer"></Text>
        </Text>
        <Box
          id="resultText"
          sx={{
            color: "blue",
            fontSize: "24px",
            margin: "0 0",
            backgroundColor: "#e0f0ff",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          不正解 ✖️
        </Box>
        <Box
          sx={{
            backgroundColor: "#f0f0f0",
            padding: "20px",
            borderRadius: "10px",
            textAlign: "left",
            margin: "0px auto",
            width: "80%",
            maxWidth: "600px",
          }}
        >
          <Heading as="h2" fontSize="20px">
            <b>解説</b>
          </Heading>
          <Text as="p">{dummyData.explanation}</Text>
          <br />
          <Heading as="h2" fontSize="20px">
            <b>正解：</b>
            <Text as="span" id="correctAnswer"></Text>
          </Heading>
        </Box>
        <Box sx={{ marginTop: "5px", textAlign: "center" }}>
          <Button
            sx={{
              backgroundColor: "#ff4081",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "16px",
              "&:hover": {
                backgroundColor: "#e60073",
              },
            }}
            onClick={handleBackButton}
          >
            問題一覧に戻る
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Answer;
