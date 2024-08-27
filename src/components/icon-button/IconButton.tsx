import React from "react";

interface IconButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  buttonText: string;
  color: string;
  onClick?: () => void
}

const IconButton = ({ icon, buttonText, color, onClick }: IconButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-fit px-4 py-2 rounded-md ${color} inline-flex gap-2 items-center justify-center`}
    >
      {buttonText}
      {icon}
    </button>
  );
};

export default IconButton;
