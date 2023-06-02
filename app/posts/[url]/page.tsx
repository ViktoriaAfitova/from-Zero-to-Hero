import { allPosts } from '@/.contentlayer/generated';

interface PageProps {
  params: {
    url: string;
  };
}

export async function generateStaticParams(): Promise<PageProps['params'][]> {
  return allPosts.map(({ url }) => ({
    url: url,
  }));
}

export default function PostPage({ params }: PageProps) {
  const post = allPosts.find(
    ({ url }) => url.replaceAll('/posts/', '') === params.url,
  );

  if (!post) {
    return null;
  }

  return (
    <div className='bg-graphite p-12'>
      <article className='mx-auto max-w-xl p-8 border-2 border-gray rounded-md shadow-md bg-white bg-opacity-40 w-auto h-screen'>
        <div className='mb-8 text-center'>
          <h1 className='mt-10 text-3xl font-bold'>{post.title}</h1>
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.body.html }} />
      </article>
    </div>
  );
}
