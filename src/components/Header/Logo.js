import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import profileImg from '@/public/profile-img.png';

const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-dark gap-4">
      <div className="w-16 rounded-full overflow-hidden border border-solid border-dark">
        <Image
          src={profileImg}
          alt="Logo"
          className="w-full h-auto rounded-full"
        />
      </div>
      <span className="font-bold text-xl">CodeBlogs</span>
    </Link>
  );
};

export default Logo;
