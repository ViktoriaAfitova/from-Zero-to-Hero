import { allPosts } from '@/.contentlayer/generated';
import { notFound } from 'next/navigation';
import { useMDXComponent } from 'next-contentlayer/hooks';

interface PageProps {
  params: {
    url: string;
  };
}

export function generateStaticParams(): PageProps['params'][] {
  return allPosts.map(({ url }) => ({
    url: url,
  }));
}

export default function PostPage({ params }: PageProps) {
  const post = allPosts.find(({ url }) => url.endsWith(params.url));

  if (!post) {
    notFound();
  }

  const MDXContent = useMDXComponent(post.body.code);

  return (
    <div className='flex flex-col h-screen'>
      <header className='flex justify-center py-10 bg-grayDark'></header>
      <main className='flex flex-grow bg-graphite justify-around items-center'>
        <article className='prose my-10 mx-auto p-8 border-4 border-gray rounded-md shadow-md bg-white w-auto'>
          <div className='mb-8 text-center'>
            <h1 className='mt-0 text-3xl font-bold'>{post.title}</h1>
          </div>
          <MDXContent />
        </article>
      </main>
      <footer className='flex justify-center py-10 bg-grayDark'></footer>
    </div>
  );
}
