import React, { FC } from "react";

const Intro: FC = () => {
  return (
    <section className='h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 py-10 text-white'>
      <header>
        <h1>Hi, I am</h1>
        <h2 className="text-7xl sm:text-3xl text-secondary font-semibold">Esmail Shahid Arshad</h2>
        <h3 className="text-7xl sm:text-3xl font-semibold">I like to build products</h3>
      </header>
      <p className="mt-[-60px] w-2/3">
        I am an Industrial Engineer with a passion for building products. I am currently pursuing my bachelors in Engineering Management from Purdue.
      </p>
      <button className="border-2 border-tertiary text-tertiary px-10 py-3 rounded bg-transparent">
        Get Started
      </button>
    </section>
  );
};

export default Intro;
