import { FC } from "react";
import Button from "../components/Button";
import Split from "../components/Split";

const Error: FC = () => {
  return (
    <main className="w-screen h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center w-1/2 h-1/2">
        <Split />
        <h1 className="text-emphasis text-5xl m-5">Error</h1>
        <p className="text-primary text-3xl m-5">Mislim da ste zalutali</p>
        <Split icon={true} />
        <Button href="/" className="mt-7">
          Početna
        </Button>
      </div>
    </main>
  );
};

export default Error;
