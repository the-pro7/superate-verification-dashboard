import React from "react";

interface DetailType {
  icon: React.ReactNode;
  detailName: string;
  detailValue: string;
}

const Detail: React.FC<DetailType> = ({ icon, detailName, detailValue }) => {
  return (
    <p className="inline-flex gap-2 items-center">
      <span className="inline-flex items-center gap-3">
        {icon} {detailName}-
      </span>
      {detailValue}
    </p>
  );
};

export default Detail;
