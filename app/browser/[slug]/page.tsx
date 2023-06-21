import { allDocBrowsers } from '@/.contentlayer/generated';
import { notFound } from 'next/navigation';
import { useMDXComponent } from 'next-contentlayer/hooks';

interface PageProps {
  params: {
    slug: string;
  };
}

export function getDocBrowserParams(slug: string) {
  const article = allDocBrowsers.find((doc) => doc.slugAsParams === slug);
  if (!article) notFound();

  return article;
}

export default function PostPage({ params }: PageProps) {
  const doc = getDocBrowserParams(params.slug);

  const MDXContent = useMDXComponent(doc.body.code);

  return (
    <div className='flex flex-col h-screen'>
      <header className='flex justify-center py-10 bg-grayDark'></header>
      <main className='flex flex-grow bg-graphite justify-around items-center'>
        <article className='prose my-10 mx-auto p-8 border-4 border-gray rounded-md shadow-md bg-white w-auto'>
          <div className='mb-8 text-center'>
            <h1 className='mt-0 text-3xl font-bold'>{doc.title}</h1>
          </div>
          <MDXContent />
        </article>
      </main>
      <footer className='flex justify-center py-10 bg-grayDark'></footer>
    </div>
  );
}
