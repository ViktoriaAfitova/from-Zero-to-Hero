import { useState } from 'react';

export interface Props {
  title: string;
  content: string;
}

export const AccordionItem = ({ title, content }: Props) => {
  const [isOpenAccordion, setIsOpenAccordion] = useState(false);

  const toggleAccordion = () => {
    setIsOpenAccordion((prevState) => !prevState);
  };

  return (
    <div className='mb-4 border-2 border-gray'>
      <button
        type='button'
        className='w-full'
        onClick={toggleAccordion}
        aria-expanded={isOpenAccordion}
      >
        <div className='bg-white px-20 cursor-pointer'>{title}</div>
      </button>
      {isOpenAccordion && <div className='text-gray p-10'>{content}</div>}
    </div>
  );
};
