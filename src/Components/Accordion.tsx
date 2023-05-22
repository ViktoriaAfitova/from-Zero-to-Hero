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
    title: 'Use Strict',
    content:
      'Strict mode включает более строгую интерпретацию и проверку кода, код выполняется в соответствии с современными стандартами языка JavaScript. 1. Заменяет исключениями некоторые ошибки. 2. Исправляет ошибки, которые мешали движкам JS выполнять оптимизацию ("eval" или "arguments.caller"). 3. Запрещает использовать некоторые элементы синтаксиса.',
  },
  {
    title: 'SOLID',
    content:
      'SOLID - аббревиатура пяти основных принципов проектирования в объектно-ориентированном программировании. Single responsibility — принцип едининой ответственности. Модуль должен отвечать за что-то одно. Open-closed — принцип открытости / закрытости. Модуль открыт для расширения и закрыт для изменения.     Liskov substitution — принцип подстановки Барбары Лисков. Цель, чтобы классы-наследники могли бы использоваться вместо родительских классов, от которых они образованы, не нарушая работу программы. Interface segregation — принцип разделения интерфейса. Модули не должны зависеть от интерфейсов, которые не используют. Dependency inversion — принцип инверсии зависимостей. Модули верхних уровней не должны зависеть от модулей нижних уровней',
  },
  {
    title: 'Falsy',
    content: 'false, "", 0, null, undefined, NaN, Bigint',
  },
  {
    title: 'var, let, const',
    content:
      'var - глобальная или ф-ная область видимости; let, const - блочная область видимости. Var могут быть обновлены и переопределены, поднятие наверх undefined, можно объявить и не инициализировать. Let могут быть обновлены, но не могут быть переопределены, поднятие наверх ReferenceError, можно объявить и не инициализировать. Const - не могут быть обновлены или переопределены, поднятие наверх ReferenceError, необходимо инициализировать во время объявления',
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
