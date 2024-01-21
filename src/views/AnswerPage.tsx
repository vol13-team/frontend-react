import Answer from "../app/answer/components/Answer";
import CollectComponent from "../app/answer/components/CollectComponent";
import WrongComponent from "../app/answer/components/WrongComponent";
import ExplanationCard from "../app/answer/components/ExplanationCard";
import { Button } from "@chakra-ui/react";

const index = () => {
  // localhost:3001/article/articleID/issueID/answer
  // const router = useRouter();
  // const { articleId, issueId } = router.query;
  // console.log(articleId);
  // console.log(issueId);
  const bool = true;
  // if (issueId) {
  //   useEffect(() => {
  //     const fetchData = async (issueID: string) => {
  //       const result = await fetchByIssueID(issueID);
  //       console.log(result);
  //     };
  //     fetchData(issueId as string);
  //   }, []);

  // }

  return (
    <div>
      <Answer selectAnswer={"C"} />

      {bool === true ? <CollectComponent /> : <WrongComponent />}

      <ExplanationCard collectOption={"A"} explanation={"解説文"} />
      <Button>問題一覧に戻る</Button>
    </div>
  );
};

// const SButton = styled(Button)`
//   text-align: right;
//   margin-right: 20px;
//   margin-top: 20px;
//   margin-bottom: 20px;
// `;
export default index;
