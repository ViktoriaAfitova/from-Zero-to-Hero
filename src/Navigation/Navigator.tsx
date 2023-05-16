import { Route, Routes } from 'react-router-dom';
import { Home } from '../Pages/Home';
import { Junior } from '../Pages/Junior';
import { Midle } from '../Pages/Midle';
import { Senior } from '../Pages/Senior';

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
