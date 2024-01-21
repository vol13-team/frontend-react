import FormProvider from "../../../components/FormProvider";
import TextFieldComponent from "../../../components/TextFieldComponent";
import SingleSelectComponent from "../../../components/SingleSelectComponent";
import InputComponent from "../../../components/InputComponent";
import styled from "styled-components";

type FormData = {
  issue_name: string;
  issue_detail: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  correct_option: string;
  visibility: string;
  explanation: string;
};

const IssueForm = () => {
  const onSubmit = async () => {
    console.log("onSubmit");
  };
  // data: FormData

  {
    //   console.log(data);

    //   const { articleId } = router.query;
    //   try {
    //     if (articleId) {
    //       const response = await createIssue(articleId as string, data as any);
    //       console.log(response);
    //     }
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };

    return (
      <FormProvider<FormData>
        defaultValues={{
          issue_name: "",
          issue_detail: "",
          option1: "",
          option2: "",
          option3: "",
          option4: "",
          correct_option: "",
          visibility: "",
          explanation: "",
        }}
        onSubmit={onSubmit}
      >
        <SInputContainer>
          <InputComponent
            name='issue_name'
            label='問題タイトル'
            validationRules={{
              required: "問題タイトルは必須です",
            }}
          />
        </SInputContainer>
        <SInputContainer>
          <TextFieldComponent
            name='issue_detail'
            label='問題説明'
            validationRules={{ required: "問題説明は必須です" }}
          />
        </SInputContainer>
        <SGlid>
          <InputComponent
            name='option1'
            label='選択肢1'
            validationRules={{ required: "選択肢は必須です" }}
          />
          <InputComponent
            name='option2'
            label='選択肢2'
            validationRules={{ required: "選択肢は必須です" }}
          />
          <InputComponent
            name='option3'
            label='選択肢3'
            validationRules={{ required: "選択肢は必須です" }}
          />
          <InputComponent
            name='option4'
            label='選択肢4'
            validationRules={{ required: "選択肢は必須です" }}
          />
          <SingleSelectComponent
            options={["選択肢1", "選択肢2", "選択肢3", "選択肢4"]}
            name='correct_option'
            label='正解選択肢'
            validationRules={{ required: "選択肢は必須です" }}
          />
          <SingleSelectComponent
            options={["公開", "非公開"]}
            name={"visibility"}
            label={"公開設定"}
            validationRules={{ required: "公開設定は必須です" }}
          />
        </SGlid>
        {/* TODO シングルセレクトの変更 */}
        <SInputContainer>
          <TextFieldComponent
            name='explanation'
            label='解説'
            validationRules={{ required: "解説は必須です" }}
          />
        </SInputContainer>
        <button type='submit'>送信</button>
      </FormProvider>
    );
  }
};
const SInputContainer = styled.div`
  margin-bottom: 16px;
`;

const SGlid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 16px;
`;

export default IssueForm;
