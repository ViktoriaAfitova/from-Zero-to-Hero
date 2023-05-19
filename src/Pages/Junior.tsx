import { Accordion } from '../components/Accordion';

export const Junior = () => {
  return (
    <div className='flex flex-col h-screen'>
      <header className='flex justify-center py-10 bg-grayDark'>
        <h1 className='flex font-bold text-pinkLight'>Theory</h1>
      </header>
      <main className='flex-grow bg-graphite justify-start'>
        <div className='py-10 px-20 w-98'>
          <h2 className='font-bold text-pinkLight mb-4'>Java Script</h2>
          <Accordion />
        </div>
      </main>
    </div>
  );
};
