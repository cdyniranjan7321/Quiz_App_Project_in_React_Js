"use client";
import React from "react";
import { AiOutlineClose, AiOutlineClose as CloseIcon } from "react-icons/ai";
const CloseIconButton: React.FC = () => {
  return (
    <div className="text-red-600 text-8xl">
      <button>
        <CloseIcon />
      </button>
    </div>
  );
};

export default CloseIconButton;