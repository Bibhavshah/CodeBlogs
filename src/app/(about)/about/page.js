import React from 'react';
import AboutCoverPage from '@/src/components/About/AboutCoverPage';
import Skills from '@/src/components/About/Skills';
import Link from 'next/link';

const About = () => {
  return (
    <div>
      <AboutCoverPage />
      <Skills />
      <p className="mt-8 px-16 py-8 text-2xl font-semibold">
        Have a project in mind? Reach out to me 📞 from{' '}
        <span className="underline">
          <Link href={`/contact`}>here</Link>
        </span>{' '}
        and let's make it happen.
      </p>
    </div>
  );
};

export default About;
