import Image from "next/image";
import React from "react";
import { AiOutlineClose as CloseIcon } from "react-icons/ai";
type SuccessProps = {
  onClose: () => void;
};
const Success: React.FC<SuccessProps> = ({onClose}) => {
  const handleCloseButtonClick=()=>{
    onClose();
  }
  return (
    <div className="relative inline-block">
      <Image
        src="/images/greensuccessalert.svg"
        alt="green Success pic"
        width={800}
        height={800}
        className=""
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-center text-xl">
        <div className="absolute inset-0 flex items-center justify-center w-32">
          <div className="pt-8">
            Congratulations<br />
            Team Blue got five points
          </div>
        
        </div>
      </div>
      <div className="absolute top-14 right-4 mt-12 text-white text-3xl">
          <button onClick={handleCloseButtonClick}>
            <CloseIcon />
            </button>
        </div>
    </div>
  );
};

export default Success;
