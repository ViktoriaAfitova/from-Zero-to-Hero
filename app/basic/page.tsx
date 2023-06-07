import Link from 'next/link';
import { allPosts, Post } from 'contentlayer/generated';
import Image from 'next/image';

const ICON_SIZE = 50;

function PostCard(post: Post) {
  return (
    <Link href={post.url}>
      <div className='p-2 mb-2 ml-20 border-2 border-gray rounded-md shadow-md bg-white w-80 cursor-pointer'>
        <h2 className='hover:text-gray'>{post.title}</h2>
      </div>
    </Link>
  );
}

const Basic = () => {
  const posts = allPosts;

  return (
    <div className='flex flex-col h-screen'>
      <header className='flex justify-center py-10 bg-grayDark'>
        <h1 className='flex font-bold text-pinkLight'>Theory</h1>
      </header>
      <main className='flex flex-grow bg-graphite justify-around items-center'>
        <nav className='flex gap-20 mt-20'>
          <div className='flex flex-col items-center'>
            <h2 className='font-bold text-pinkLight mb-4'>JavaScript</h2>
            <Image
              src='/arrowDownIcon.png'
              alt='arrow'
              width={ICON_SIZE}
              height={ICON_SIZE}
              className='mb-10'
            />
            <div>
              {posts.map((post, title) => (
                <PostCard key={title} {...post} />
              ))}
            </div>
          </div>
          <div className='flex flex-col items-center'>
            <h2 className='font-bold text-pinkLight mb-4'>Browser</h2>
            <Image
              src='/arrowDownIcon.png'
              alt='arrow'
              width={ICON_SIZE}
              height={ICON_SIZE}
              className='mb-10'
            />
            <div className='p-2 mb-2 ml-20 border-2 border-gray rounded-md shadow-md bg-white w-80 cursor-pointer'>
              <h2 className='hover:text-gray'>...in progress</h2>
            </div>
          </div>
          <div className='flex flex-col items-center'>
            <h2 className='font-bold text-pinkLight mb-4'>TypeScript</h2>
            <Image
              src='/arrowDownIcon.png'
              alt='arrow'
              width={ICON_SIZE}
              height={ICON_SIZE}
              className='mb-10'
            />
            <div className='p-2 mb-2 ml-20 border-2 border-gray rounded-md shadow-md bg-white w-80 cursor-pointer'>
              <h2 className='hover:text-gray'>...in progress</h2>
            </div>
          </div>
        </nav>
      </main>
    </div>
  );
};

export default Basic;
