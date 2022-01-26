import React, { FunctionComponent } from 'react';
import Story from "../../components/story/Story";

interface OwnProps {}

type Props = OwnProps;

const Home: FunctionComponent<Props> = (props) => {

  return (
      <Story/>
  );
};

export default Home;
