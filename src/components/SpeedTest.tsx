import { FunctionComponent, useEffect } from "react";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { setText } from "../slices/textSlice";

const Test: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const numOfSentences = useAppSelector((state) => state.testSlice.numOfSentenses);

  useEffect(() => {
    axios
      .get("https://fish-text.ru/get", {
        params: {
          type: "sentence",
          number: numOfSentences,
          format: "html",
        },
      })
      .then((responce) => {
        const text = responce.data.slice(3, -4);
        dispatch(setText(text));
      });
  }, []);

  return <div>{useAppSelector((state) => state.textSlice.text)}</div>;
};

export default Test;
