import { AccordionItem } from './AccordionItem';

interface AccordionData {
  title: string;
  content: string;
}

const accordionData: AccordionData[] = [
  {
    title: 'Data Types',
    content:
      '1. String 2. Number 3. Bigint 4. Boolean 5. Undefined 6. Null 7. Symbol 8. Object . Объект (Object): состоит из коллекции пар "ключ-значение" и может содержать любые типы данных в качестве значений. Примитивные типы данных в JavaScript хранятся по значению (value types), тогда как объекты хранятся по ссылке (reference types). Это означает, что при присваивании примитивного значения создается копия значения, а при присваивании объекта создается копия ссылки на объект.',
  },
  {
    title: 'SOLID',
    content:
      'SOLID - аббревиатура пяти основных принципов проектирования в объектно-ориентированном программировании. Single responsibility — принцип едининой ответственности. Модуль должен отвечать за что-то одно. Open-closed — принцип открытости / закрытости. Модуль открыт для расширения и закрыт для изменения.     Liskov substitution — принцип подстановки Барбары Лисков. Цель, чтобы классы-наследники могли бы использоваться вместо родительских классов, от которых они образованы, не нарушая работу программы. Interface segregation — принцип разделения интерфейса. Модули не должны зависеть от интерфейсов, которые не используют. Dependency inversion — принцип инверсии зависимостей. Модули верхних уровней не должны зависеть от модулей нижних уровней',
  },
  {
    title: 'IIFE',
    content:
      'Immediatly Invoked Function Expression (немедленно вызываемое функциональное выражение). Самовызывающаяся функция обеспечивает коду собственный блок видимости',
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
