import React, { FC } from "react";

interface SectionTitleProps {
  title: string;
}

const SectionTitle: FC<SectionTitleProps> = ({ title }) => {
  return (
    <div className='flex gap-10 items-center'>
      <h1 className="text-3xl text-white font-semibold">{title}</h1>
      <div className="w-60 h-[1px] bg-tertiary"></div>
    </div>
  );
};

export default SectionTitle;
