"use client";

import React from "react";

interface CustomCheckBoxProps {
  value: boolean;
  label?: string;
  handleChange: () => void;
  className?: string;
}

const CustomCheckBox: React.FC<CustomCheckBoxProps> = ({
  value,
  label,
  handleChange,
  className = "",
}) => {
  return (
    <label
      className={`relative flex items-center gap-2 cursor-pointer ${className}`}
    >
      <input
        type="checkbox"
        checked={value}
        onChange={handleChange}
        className="peer h-4 w-4 appearance-none border-2 border-gray-400 rounded-full 
                   checked:bg-primary checked:border-primary
                   transition-all duration-200 cursor-pointer"
      />

      <span
        className="absolute left-1 w-2 h-2 bg-white rounded-full 
                   scale-0 peer-checked:scale-100 transition-transform duration-200"
      ></span>

      {label && <span className="text-sm text-gray select-none">{label}</span>}
    </label>
  );
};

export default CustomCheckBox;
