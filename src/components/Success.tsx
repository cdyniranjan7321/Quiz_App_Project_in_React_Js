import Image from "next/image";
import React from "react";
import { AiOutlineClose as CloseIcon } from "react-icons/ai";
type SuccessProps = {
  onClose: () => void;
  showRapidFinalMessage:{
    message:string;
    totalcorrectanswer:number;
  }
  showGeneralMessage:{
    message:string;
  }
  isRapidFirePage:boolean | undefined
};
const Success: React.FC<SuccessProps> = ({onClose,showRapidFinalMessage,showGeneralMessage,isRapidFirePage}) => {
  const handleCloseButtonClick=()=>{
    onClose();
  }
  return (
    <div className="relative inline-block transition-all duration-600">
      <Image
        src="/images/greensuccessalert.svg"
        alt="green Success pic"
        width={800}
        height={800}
        className=""
      />
      <div className="absolute top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-center text-xl w-full">
        <div className="absolute inset-0 flex items-center justify-center w-full">
          <div className="pt-8">
            {!isRapidFirePage&&(
             <span className="text-2xl">{showGeneralMessage.message}</span>
            )}
           {isRapidFirePage && (
            <>
            <span className="text-2xl">{showRapidFinalMessage.message}</span>
            <span className="text-2xl">{`${showRapidFinalMessage.totalcorrectanswer}`}</span>
            </>          
           )} 
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
