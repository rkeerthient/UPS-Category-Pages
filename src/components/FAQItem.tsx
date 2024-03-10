import { Disclosure, Transition } from "@headlessui/react";
import { FaChevronDown } from "react-icons/fa";

type FAQSProps = {
  question: String;
  answer: String;
};

const FAQItem = ({ question, answer }: FAQSProps) => {
  return (
    <div className=" px-8 my-4">
      <Disclosure className="">
        {({ open }) => (
          <>
            <Disclosure.Button className=" flex w-full gap-2 items-center text-left  text-lg font-bold  text-[#009cbd] justify-between ">
              <span>{question}</span>
              <FaChevronDown
                className={`${open ? "rotate-180 transform" : ""} h-3 w-3 `}
              />
            </Disclosure.Button>
            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel className="mt-4 pr-6 text-sm">
                {answer}
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default FAQItem;
