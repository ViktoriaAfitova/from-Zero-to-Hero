import Link from 'next/link';
import { allPosts, Post } from 'contentlayer/generated';
import Image from 'next/image';

export async function getData() {
  const posts = allPosts.map((post) => {
    return post;
  });

  return posts;
}

function PostCard(post: Post) {
  return (
    <div className='p-2 mb-2 ml-20 border-2 border-gray rounded-md shadow-md bg-white w-80 bg-opacity-20'>
      <h2 className='text-m font-semibold'>
        <Link href={post.url} className='text-black hover:text-gray'>
          {post.title}
        </Link>
      </h2>
    </div>
  );
}

const Basic = async () => {
  const posts = await getData();

  return (
    <div className='flex flex-col h-screen'>
      <header className='flex justify-center py-10 bg-grayDark'>
        <h1 className='flex font-bold text-pinkLight'>Theory</h1>
      </header>
      <main className='flex flex-grow bg-graphite justify-around items-center'>
        <nav className='flex gap-20 mt-20'>
          <div className='flex flex-col items-center'>
            <h2 className='font-bold text-pinkLight mb-4'>Java Script</h2>
            <Image
              src='/arrowDownIcon.png'
              alt='arrow'
              width={50}
              height={50}
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
              width={50}
              height={50}
              className='mb-10'
            />
            <div className='p-2 mb-2 ml-20 border-2 border-gray rounded-md shadow-md bg-white w-80 bg-opacity-20'>
              <h2 className='text-m font-semibold'>...in progress</h2>
            </div>
          </div>
          <div className='flex flex-col items-center'>
            <h2 className='font-bold text-pinkLight mb-4'>Type Script</h2>
            <Image
              src='/arrowDownIcon.png'
              alt='arrow'
              width={50}
              height={50}
              className='mb-10'
            />
            <div className='p-2 mb-2 ml-20 border-2 border-gray rounded-md shadow-md bg-white w-80 bg-opacity-20'>
              <h2 className='text-m font-semibold'>...in progress</h2>
            </div>
          </div>
        </nav>
      </main>
    </div>
  );
};

export default Basic;
