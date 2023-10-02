import React from 'react';
import Image from 'next/image';
import AboutCoverPageImage from '../../../project files/character.png';

const AboutCoverPage = () => {
  return (
    <section className="w-full h-[75vh] flex items-center justify-center border-b-2 border-solid border-dark">
      <div className="w-1/2 h-full border-r-2 border-solid border-dark flex justify-center items-center">
        <Image
          src={AboutCoverPageImage}
          alt="Character"
          priority={true}
          className="w-[75%] h- object-center object-cover"
        />
      </div>
      <div className="w-1/2 h-full border-solid border-dark flex flex-col justify-center p-10">
        <h1 className="text-5xl font-bold font-in capitalize text-left">
          Dream Big, Work Hard, Achieve More!
        </h1>
        <p className="font-medium capitalize mt-4 text-base">
          This Mantra Drives My Work As A Passionate Freelancer. I Blend
          Innovative Technology With Timeless Design For Captivating Digital
          Experiences. Inspired By Nature And Literature, I'm A Perpetual
          Learner Embracing Challenges. With Each Project, I Aim To Leave A
          Lasting Impact—One Pixel At A Time.
        </p>
      </div>
    </section>
  );
};

export default AboutCoverPage;
