import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const Junior = () => {
  return (
    <div className='flex flex-col h-screen'>
      <header className='flex justify-center py-10 bg-grayDark'>
        <h1 className='font-bold text-pinkLight'>Theory</h1>
      </header>
      <main className='flex flex-grow bg-graphite justify-center'>
        <div className='flex flex-col py-10 px-20'>
          <h2 className='font-bold text-pinkLight mb-4'>Java Script</h2>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel1a-content'
              id='panel1a-header'
            >
              <Typography>SOLID</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                SOLID — это аббревиатура пяти основных принципов проектирования
                в объектно-ориентированном программировании.
                <ul className='py-4'>
                  <li>
                    Single responsibility — принцип едининой ответственности.
                    Модуль должен отвечать за что-то одно.
                  </li>
                  <li>
                    Open-closed — принцип открытости / закрытости. Модуль открыт
                    для расширения и закрыт для изменения.
                  </li>
                  <li>
                    Liskov substitution — принцип подстановки Барбары Лисков.
                    Цель, чтобы классы-наследники могли бы использоваться вместо
                    родительских классов, от которых они образованы, не нарушая
                    работу программы.
                  </li>
                  <li>
                    Interface segregation — принцип разделения интерфейса.
                    Модули не должны зависеть от интерфейсов, которые не
                    используют.
                  </li>
                  <li>
                    Dependency inversion — принцип инверсии зависимостей. Модули
                    верхних уровней не должны зависеть от модулей нижних
                    уровней.
                  </li>
                </ul>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel2a-content'
              id='panel2a-header'
            >
              <Typography>Title</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Content</Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </main>
    </div>
  );
};
