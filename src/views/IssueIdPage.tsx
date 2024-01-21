// // import SelectionCard from "../app/issueId/_components/SelectionCard";
// import QuestionCard from "../app/issueId/_components/QuestionCard";
// import { Box, Button } from "@chakra-ui/react";
// import { useSelect } from "../hooks/useSelect";
// //問題表示
// const index = () => {
//   const { select, setSelect } = useSelect();
//   const handleSubmit = () => {
//     console.log(select);
//   };
//   return (
//     <div>
//       <Box
//         style={{
//           marginTop: "30px",
//         }}
//       >
//         <QuestionCard />
//       </Box>
//       <Box
//         style={{
//           paddingTop: "30px",
//           width: "80%",
//           margin: "auto",
//         }}
//       >
//         <SelectionCard
//           options={["選択肢1", "選択肢2", "選択肢3", "選択肢4"]}
//           selectState={select}
//           setSelectState={setSelect}
//         />
//       </Box>

//       <Box
//         style={{
//           textAlign: "right",
//           marginRight: "10%",
//         }}
//       >
//         <Button
//           style={{
//             marginTop: "30px",
//           }}
//           type='submit'
//           onClick={handleSubmit}
//         >
//           答え合わせ
//         </Button>
//       </Box>
//     </div>
//   );
// };

// export default index;
