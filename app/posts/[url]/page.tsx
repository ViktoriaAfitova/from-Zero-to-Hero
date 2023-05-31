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
    <div className='bg-graphite h-screen'>
      <div className='mr-40 ml-40 rounded-md shadow-md bg-white'>
        <article className='mx-auto max-w-xl py-8'>
          <div className='mb-8 text-center'>
            <h1 className='text-3xl font-bold'>{post.title}</h1>
          </div>
          <div
            className='[&>*]:mb-0 [&>*:last-child]:mb-0'
            dangerouslySetInnerHTML={{ __html: post.body.html }}
          />
        </article>
      </div>
    </div>
  );
}
