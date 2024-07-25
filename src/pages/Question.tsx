import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Box, Container, Button } from "@yamada-ui/react"; //YamadaUIコンポーネント

// ダミーデータの定義
const dummyData = {
  question: "Q.凝集度の高いプログラムの特徴は何ですか？",
  choices: [
    { id: "A", text: "A.一つのモジュールが異なる役割を果たす" },
    { id: "B", text: "B.同一の機能を果たす要素が分散されている" },
    { id: "C", text: "C.モジュールが互いに結結合である" },
    { id: "D", text: "D.モジュールが特定の機能に集中している" },
  ],
};

const Question: React.FC = () => {
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);

  const handleChoiceClick = (choice: string) => {
    setSelectedChoice(choice);
  };

  const handleCheckAnswer = () => {
    if (selectedChoice) {
      console.log(`Selected choice: ${selectedChoice}`);
      window.location.href = "Answerページ"; // 解答ページに遷移(書き方は変更)
    } else {
      alert("選択肢を選んでください");
    }
  };

  return (
    <Box margin="15px 20px">
      <Container>
        <Box textAlign="center" marginTop="50px">
          <Box as="h1" marginBottom="10px" fontSize="28px" fontWeight="bold">
            上級者向け問題
          </Box>
          <Box
            as="h2"
            backgroundColor="#f9f9f9"
            padding="20px"
            borderRadius="10px"
            border="1px solid #ddd"
            fontSize="22px"
          >
            {dummyData.question}
          </Box>
        </Box>
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          alignItems="center"
          maxWidth="900px"
          margin="0 auto"
        >
          {dummyData.choices.map((choice) => (
            <Box
              key={choice.id}
              flex="1 1 calc(50% - 20px)"
              m="10px"
              p="30px"
              sx={{
                backgroundColor: selectedChoice === choice.id ? "#80c0ff" : "#f0f0f0",
                borderRadius: "10px",
                cursor: "pointer",
                textAlign: "center",
                fontSize: "18px",
                transition: "background-color 0.3s ease",
                "&:hover": {
                  backgroundColor: selectedChoice === choice.id ? "#80c0ff" : "#e0e0e0",
                },
              }}
              onClick={() => handleChoiceClick(choice.id)}
            >
              {choice.text}
            </Box>
          ))}
        </Box>
        <Box marginTop="px" textAlign="right" paddingRight="200px">
          <Button
            variant="contained"
            color="primary"
            sx={{
              backgroundColor: "#ff4081",
              color: "white",
              padding: "10px 20px",
              borderRadius: "5px",
              fontSize: "16px",
              "&:hover": {
                backgroundColor: "#e60073",
              },
            }}
            onClick={handleCheckAnswer}
          >
            答え合わせ
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Question;

ReactDOM.render(<Question />, document.getElementById("root"));
