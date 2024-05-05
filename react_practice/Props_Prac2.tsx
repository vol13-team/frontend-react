import Welcome from "./PropsPrac";

const PropsTest: React.FC = () => {
  return (
    <>
      <Welcome name="React" age={13} />
      <Welcome name="TypeScript" />
      <Welcome name="JavaScript" />
    </>
  );
};

export default PropsTest;
