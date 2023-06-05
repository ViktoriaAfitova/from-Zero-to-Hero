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
    <div className='bg-graphite p-12'>
      <article className='mx-auto max-w-xl p-8 border-2 border-gray rounded-md shadow-md bg-white bg-opacity-40 w-auto h-screen'>
        <div className='mb-8 text-center'>
          <h1 className='mt-0 text-3xl font-bold'>{post.title}</h1>
        </div>
        <MDXContent />
      </article>
    </div>
  );
}
