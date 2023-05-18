import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { IMAGES } from '../assets/images';
import { Footer } from '../components/Footer';

export const Home = () => {
  return (
    <div className='flex flex-col h-screen'>
      <Header />
      <main className='flex flex-grow bg-graphite justify-around items-center'>
        <nav className='flex gap-20'>
          <div className='flex flex-col items-center'>
            <img
              src={IMAGES.juniorImage}
              alt='junior'
              className='w-16 md:w-32 lg:w-48 rounded-full border-4 border-gray mb-12'
            />
            <div className='border-4 border-gray w-100'>
              <Link to='/junior' className='text-white px-6'>
                Junior
              </Link>
            </div>
          </div>
          <div className='flex flex-col items-center'>
            <img
              src={IMAGES.midleImage}
              alt='midle'
              className='w-16 md:w-32 lg:w-48 rounded-full border-4 border-pinkLight mb-12'
            />
            <div className='border-4 border-pinkLight w-100'>
              <Link to='/midle' className='text-white px-6'>
                Midle
              </Link>
            </div>
          </div>
          <div className='flex flex-col items-center'>
            <img
              src={IMAGES.seniorImage}
              alt='senior'
              className='w-16 md:w-32 lg:w-48 rounded-full border-4 border-violet mb-12'
            />
            <div className='border-4 border-violet w-100'>
              <Link to='/senior' className='text-white px-6'>
                Senior
              </Link>
            </div>
          </div>
        </nav>
      </main>
      <Footer />
    </div>
  );
};
