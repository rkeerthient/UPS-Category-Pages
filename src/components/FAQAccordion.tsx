import FAQItem from "./FAQItem";

const FAQAccordion = ({ FAQs }: any) => {
  const {
    faqGroupTitle,
    question1,
    answer1,
    question2,
    answer2,
    question3,
    answer3,
    question4,
    answer4,
    question5,
    answer5,
  } = FAQs;
  return (
    <div
      className="p-8 flex flex-col gap-2 w-3/4 mx-auto mt-8"
      style={{ boxShadow: "0 0.125rem 0.375rem rgba(0,0,0,.15);" }}
    >
      <div className="mx-auto text-2xl pb-4">{faqGroupTitle}</div>
      <div className={`border-t-2   border-b-2`}>
        {question1 && <FAQItem question={question1} answer={answer1} />}
        {question2 && (
          <>
            <div className={`border-t-2  `} />
            <FAQItem question={question2} answer={answer2} />
          </>
        )}
        {question3 && (
          <>
            <div className={`border-t-2  `} />
            <FAQItem question={question3} answer={answer3} />
          </>
        )}
        {question4 && (
          <>
            <div className={`border-t-2 `} />
            <FAQItem question={question4} answer={answer4} />
          </>
        )}
        {question5 && (
          <>
            <div className={`border-t-2 `} />
            <FAQItem question={question5} answer={answer5} />
          </>
        )}
      </div>
    </div>
  );
};

export default FAQAccordion;
