import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='flex flex-col h-screen'>
      <Header />
      <main className='flex flex-grow bg-graphite justify-around items-center'>
        <nav className='flex gap-20'>
          <div className='flex flex-col items-center'>
            <Image
              src='/monkeyJuniorImage.png'
              alt='junior'
              width={300}
              height={200}
              className='w-16 md:w-32 lg:w-48 rounded-full border-4 border-gray mb-12'
            />
            <div className='border-4 border-gray w-100'>
              <Link href='/basic' className='text-white px-6'>
                Basic
              </Link>
            </div>
          </div>
          <div className='flex flex-col items-center'>
            <Image
              src='/monkeyMidleImage.jpg'
              alt='midle'
              width={300}
              height={200}
              className='w-16 md:w-32 lg:w-48 rounded-full border-4 border-pinkLight mb-12'
            />
            <div className='border-4 border-pinkLight w-100'>
              <Link href='/midle' className='text-white px-6'>
                Midle
              </Link>
            </div>
          </div>
          <div className='flex flex-col items-center'>
            <Image
              src='/monkeySeniorImage.jpg'
              alt='senior'
              width={300}
              height={200}
              className='w-16 md:w-32 lg:w-48 rounded-full border-4 border-violet mb-12'
            />
            <div className='border-4 border-violet w-100'>
              <Link href='/advanced' className='text-white px-6'>
                Advanced
              </Link>
            </div>
          </div>
        </nav>
      </main>
      <Footer />
    </div>
  );
}
