import { allBlogs } from '../../.contentlayer/generated/index.mjs';
import FeaturedPost from '../components/Home/FeaturedPost';
import Hero from '../components/Home/Hero';
import RecentPost from '../components/Home/RecentPost';

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center justify-center">
      <Hero blogs={allBlogs} />
      <FeaturedPost blogs={allBlogs} />
      <RecentPost blogs={allBlogs} />
    </main>
  );
}
