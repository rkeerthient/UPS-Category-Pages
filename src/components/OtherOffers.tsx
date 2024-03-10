import { BsChevronRight } from "react-icons/bs";
import { FaBell, FaPhoneAlt } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";

const OtherOffers = () => {
  return (
    <div className="w-full bg-transparent">
      <div className="flex flex-col gap-2">
        <div
          className="text-4xl w-1/2 flex justify-center text-center mx-auto"
          style={{ lineHeight: "3.5rem" }}
        >
          Didn't find what you were looking for or want to see our other
          offerings?
        </div>
        <div className="w-24 border-t-4 border-[#ffd100] mx-auto"></div>
        <div className="grid grid-cols-3 gap-8 mt-4 ">
          <div
            className="flex justify-center items-center h-56"
            style={{ boxShadow: "0 0.125rem 0.375rem rgba(0,0,0,.15);" }}
          >
            <div className="flex flex-col gap-4 items-center">
              <div className="bg-[#333333] rounded-full p-4 h-16 w-16 flex items-center justify-center">
                <FaPhoneAlt color="white" className="h-8 w-8" />
              </div>
              <div>123 4566789</div>
            </div>
          </div>
          <div
            className="flex justify-center items-center h-56"
            style={{ boxShadow: "0 0.125rem 0.375rem rgba(0,0,0,.15);" }}
          >
            <div className="flex flex-col gap-4 items-center">
              <div className="bg-[#333333] rounded-full p-4 h-16 w-16 flex items-center justify-center">
                <FaBell color="white" className="h-8 w-8" />
              </div>
              <a
                href="#"
                className="font-bold hover:underline uppercase text-[#008198] text-lg flex gap-2 items-center"
              >
                Contact Us <BsChevronRight />
              </a>
            </div>
          </div>
          <div
            className="flex justify-center items-center h-56"
            style={{ boxShadow: "0 0.125rem 0.375rem rgba(0,0,0,.15);" }}
          >
            <div className="flex flex-col gap-4 items-center">
              <div className="bg-[#333333] rounded-full p-4 h-16 w-16 flex items-center justify-center">
                <IoMdHome color="white" className="h-8 w-8" />
              </div>
              <a
                href="#"
                className="font-bold hover:underline uppercase text-[#008198] text-lg flex gap-2 items-center"
              >
                View store page <BsChevronRight />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherOffers;
