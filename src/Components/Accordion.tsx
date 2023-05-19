import { AccordionItem } from './AccordionItem';

interface AccordionData {
  title: string;
  content: string;
}

const accordionData: AccordionData[] = [
  {
    title: 'SOLID',
    content:
      'SOLID - аббревиатура пяти основных принципов проектирования в объектно-ориентированном программировании. Single responsibility — принцип едининой ответственности. Модуль должен отвечать за что-то одно. Open-closed — принцип открытости / закрытости. Модуль открыт для расширения и закрыт для изменения.     Liskov substitution — принцип подстановки Барбары Лисков. Цель, чтобы классы-наследники могли бы использоваться вместо родительских классов, от которых они образованы, не нарушая работу программы. Interface segregation — принцип разделения интерфейса. Модули не должны зависеть от интерфейсов, которые не используют. Dependency inversion — принцип инверсии зависимостей. Модули верхних уровней не должны зависеть от модулей нижних уровней',
  },
  {
    title: 'Title',
    content: 'Content',
  },
];

export const Accordion = () => {
  return (
    <div className='accordion'>
      {accordionData.map((item) => (
        <AccordionItem
          key={item.title}
          title={item.title}
          content={item.content}
        />
      ))}
    </div>
  );
};
