import fs from 'fs';
import Link from 'next/link';
import matter from 'gray-matter';
import { CardMetadata } from '@/types';

const getCardMetadata = (): CardMetadata[] => {
  const folder = 'content/';
  const files = fs.readdirSync(folder);
  const mdxCards = files.filter((file) => file.endsWith('.mdx'));
  // const slugs = mdxCards.map((file) => file.replace('.mdx', ''));
  // return slugs;

  const cards = mdxCards.map((fileName) => {
    const fileContents = fs.readFileSync(`content/${fileName}`, 'utf-8');
    const matterResult = matter(fileContents);

    return {
      title: matterResult.data.title,
      content: matterResult.data.content,
      slug: fileName.replace('.mdx', ''),
    };
  });

  return cards;
};

const Basic = () => {
  const cardMetadata = getCardMetadata();
  const cardPreview = cardMetadata.map((card, title) => (
    <div className='flex gap-6 mt-6' key={title}>
      <div className='p-8 rounded-md shadow-md bg-white'>
        <Link href={`/content/${card.slug}`}>
          <h3 className='text-xl font-semibold'>{card.title}</h3>
        </Link>
      </div>
    </div>
  ));

  return (
    <div className='flex flex-col h-screen'>
      <header className='flex justify-center py-10 bg-grayDark'>
        <h1 className='flex font-bold text-pinkLight'>Theory</h1>
      </header>
      <main className='flex-grow bg-graphite justify-start'>
        <div className='pt-10 px-20 w-98'>
          <h2 className='font-bold text-pinkLight mb-4'>Java Script</h2>
        </div>
        <div>{cardPreview}</div>
      </main>
    </div>
  );
};

export default Basic;
