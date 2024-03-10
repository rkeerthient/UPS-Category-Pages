import { Disclosure, Transition } from "@headlessui/react";
import { FaChevronDown } from "react-icons/fa";

const MailingList = () => {
  return (
    <div className="w-full bg-[#ffd100] text-[#333] rounded p-10">
      <div className="grid grid-cols-3">
        <div className="flex flex-col gap-2 mr-14">
          <div className="text-2xl">Join Our Mailing List</div>
          <div className="text-lg">
            Sign up for insider access to The UPS Store® news and special
            offers and you’ll save 15% on your next online print order.
          </div>
        </div>
        <div className="flex flex-col gap-2  mr-14">
          <div className="font-bold">Provide Email</div>
          <div>
            <input
              type="email"
              name=""
              placeholder="Enter Email "
              id=""
              className="h-14 w-full rounded py-3 px-4"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 text-base ">
          <div className="font-bold">Are you a small business owner?</div>
          <div className="flex gap-4 font-bold">
            <div>
              <input type="radio" name="bus_owner" /> Yes
            </div>
            <div>
              <input type="radio" name="bus_owner" /> No
            </div>
          </div>
          <div className="w-full  inline-block ">
            <div>
              <input type="checkbox" name="" id="" /> I agree to the Terms &
              Conditions
            </div>
            <div className="mx-auto w-full  p-2">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full gap-2 items-center text-left text-sm font-medium  ">
                      <FaChevronDown
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-3 w-3 `}
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
                      {" "}
                      <Disclosure.Panel className=" pb-2 pt-4 text-xs ">
                        By signing up, you agree to receive emails from The UPS
                        Store with news, special offers, promotions and messages
                        tailored to your interests. You can unsubscribe at any
                        time. See our privacy policy for more information.
                        Retail locations are independently owned and operated by
                        franchisees. Various offers may be available at certain
                        participating locations only. Please contact your local
                        The UPS Store retail location for more details.
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
            </div>
          </div>

          <div className="w-fit rounded-full font-bold px-8 text-white py-4  bg-[#009cbd] hover:cursor-pointer hover:bg-[#404040]">
            Join
          </div>
        </div>
      </div>
    </div>
  );
};

export default MailingList;
