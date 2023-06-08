import { useState } from "react";
import QuizIntro from "./QuizIntro";
import QuizForm from "./QuizForm";
import QuizResult from "./QuizResult";

const Quiz = () => {
  const [isStart, setIsStart] = useState(true);
  const [isProgress, setIsProgress] = useState(false);
  const [isEnd, setIsEnd] = useState(false);
  const [questionData, setQuestionData] = useState([]);
  const [correctCount, setCorrectCount] = useState(0);

  return (
    <>
      {isStart && (
        <QuizIntro setIsStart={setIsStart} setIsProgress={setIsProgress} />
      )}
      {isProgress && (
        <QuizForm
          setIsProgress={setIsProgress}
          setIsEnd={setIsEnd}
          setQuestionData={setQuestionData}
          setCorrectCount={setCorrectCount}
          correctCount={correctCount}
        />
      )}
      {isEnd && (
        <QuizResult correctCount={correctCount} questionData={questionData} />
      )}
    </>
  );
};

export default Quiz;
