import Link from 'next/link';
import { allPosts, Post } from 'contentlayer/generated';

export async function getData() {
  const posts = allPosts.map((post) => {
    return post;
  });

  return posts;
}

function PostCard(post: Post) {
  return (
    <div className='p-8 mb-10 ml-20 mr-20 rounded-md shadow-md bg-white'>
      <h2 className='text-xl font-semibold'>
        <Link
          href={post.url}
          className='text-blue-700 hover:text-blue-900 dark:text-blue-400'
        >
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
      <main className='flex-grow bg-graphite justify-start'>
        <div className='pt-10 px-20 w-98'>
          <h2 className='font-bold text-pinkLight mb-4'>Java Script</h2>
        </div>
        <div>
          {posts.map((post, title) => (
            <PostCard key={title} {...post} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Basic;
