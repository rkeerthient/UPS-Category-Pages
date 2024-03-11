import FAQItem from "./FAQItem";

const FAQAccordion = ({ FAQs }: any) => {
  const { fAQs, title } = FAQs;
  const { question, answer } = fAQs;
  return (
    <div
      className="p-4 md:p-8 flex flex-col gap-2 w-full md:w-3/4 mx-auto mt-8"
      style={{ boxShadow: "0 0.125rem 0.375rem rgba(0,0,0,.15);" }}
    >
      <div className="mx-auto text-2xl pb-4">{title}</div>
      <div className={`border-t-2 md:border-b-2`}>
        {fAQs.map((item: any, index: any) => (
          <span key={index}>
            {index !== 0 && <div className={`border-t-2  `} />}
            <FAQItem question={item.question} answer={item.answer} />
          </span>
        ))}
      </div>
    </div>
  );
};

export default FAQAccordion;
