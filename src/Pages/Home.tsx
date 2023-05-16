import { Link } from 'react-router-dom';
import { Header } from '../Components/Header';
import { IMAGES } from '../assets/images';
import { Footer } from '../Components/Footer';

export const Home = () => {
  return (
    <>
      <Header />
      <main>
        <nav className='flex justify-around items-center py-20 bg-graphite'>
          <div>
            <img
              src={IMAGES.juniorImage}
              alt='junior'
              className='w-16 md:w-32 lg:w-48 rounded-full border-4 border-gray'
            />
            <Link to='/junior' className='text-white'>
              Junior
            </Link>
          </div>
          <div>
            <img
              src={IMAGES.midleImage}
              alt='midle'
              className='w-16 md:w-32 lg:w-48 rounded-full border-4 border-pinkLight'
            />
            <Link to='/midle' className='text-white'>
              Midle
            </Link>
          </div>
          <div>
            <img
              src={IMAGES.seniorImage}
              alt='senior'
              className='w-16 md:w-32 lg:w-48 rounded-full border-4 border-violet'
            />
            <Link to='/senior' className='text-white'>
              Senior
            </Link>
          </div>
        </nav>
      </main>

      <Footer />
    </>
  );
};
