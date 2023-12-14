import React from "react";

interface HelloProps {
  name?: String;
}

const Hello: React.FC<HelloProps> = ({ name }) => {
  return <div>Hello {name}</div>;
};

export default Hello;
