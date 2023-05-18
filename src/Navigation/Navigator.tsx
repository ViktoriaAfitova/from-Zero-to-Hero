import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Junior } from '../pages/Junior';
import { Midle } from '../pages/Midle';
import { Senior } from '../pages/Senior';

export const Navigator = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/junior' element={<Junior />} />
      <Route path='/midle' element={<Midle />} />
      <Route path='/senior' element={<Senior />} />
    </Routes>
  );
};
