"use client";
import React from "react";
import { MdClose as CloseIcon } from "react-icons/md";
const CloseIconButton: React.FC = () => {
  return (
    <div className="font-white-300 text-gray-200 text-bold text-4xl">
      <button>
        <CloseIcon />
      </button>
    </div>
  );
};

export default CloseIconButton;