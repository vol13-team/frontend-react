interface Props {
  name: string;
  age: number;
}

const Welcome = (props: Props): JSX.Element => {
  return (
    <>
      <h1>Hello, {props.name}</h1>
      <p>Age: {props.age}</p>
    </>
  );
};

export default Welcome;
