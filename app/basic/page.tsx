import Link from 'next/link';
import { allDocJs, DocJS } from 'contentlayer/generated';
import Image from 'next/image';

const ICON_SIZE = 50;

function DocCard(doc: DocJS) {
  return (
    <Link href={`/js-core/${doc.slugAsParams}`}>
      <div className='p-2 mb-2 border-2 border-gray rounded-md shadow-md bg-white w-80 cursor-pointer'>
        <h2 className='hover:text-gray'>{doc.title}</h2>
      </div>
    </Link>
  );
}

const Basic = () => {
  const docs = allDocJs;

  return (
    <div className='flex flex-col h-screen'>
      <header className='flex justify-center py-10 bg-grayDark'>
        <h1 className='flex font-bold text-pinkLight'>Theory</h1>
      </header>
      <main className='flex flex-grow bg-graphite justify-around items-center'>
        <nav className='flex mt-20 gap-10'>
          <div className='flex flex-col'>
            <div className='flex flex-col items-center'>
              <h2 className='font-bold text-pinkLight mb-4'>JavaScript</h2>
              <Image
                src='/arrowDownIcon.png'
                alt='arrow'
                width={ICON_SIZE}
                height={ICON_SIZE}
                className='mb-10'
              />
            </div>
            <div>
              {docs.map((doc, title) => (
                <DocCard key={title} {...doc} />
              ))}
            </div>
          </div>
          <div className='flex flex-col'>
            <div className='flex flex-col items-center'>
              <h2 className='font-bold text-pinkLight mb-4'>Browser</h2>
              <Image
                src='/arrowDownIcon.png'
                alt='arrow'
                width={ICON_SIZE}
                height={ICON_SIZE}
                className='mb-10'
              />
            </div>
            <div className='p-2 mb-2 border-2 border-gray rounded-md shadow-md bg-white w-80 cursor-pointer'>
              <h2 className='hover:text-gray'>...in progress</h2>
            </div>
          </div>
          <div className='flex flex-col'>
            <div className='flex flex-col items-center'>
              <h2 className='font-bold text-pinkLight mb-4'>TypeScript</h2>
              <Image
                src='/arrowDownIcon.png'
                alt='arrow'
                width={ICON_SIZE}
                height={ICON_SIZE}
                className='mb-10'
              />
            </div>
            <div className='p-2 mb-2 border-2 border-gray rounded-md shadow-md bg-white w-80 cursor-pointer'>
              <h2 className='hover:text-gray'>...in progress</h2>
            </div>
          </div>
        </nav>
      </main>
    </div>
  );
};

export default Basic;
