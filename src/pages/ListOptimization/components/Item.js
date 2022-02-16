import { memo } from 'react';

// const CARS_OBJ = {
//   audi: 'audi',
//   bmw: 'bmw'
// };

const car = '';

const CARS_ARR = [];

for (let i = 0; i < 250; i++) {
  CARS_ARR.push(i);
}

CARS_ARR.push({ audi: 'audi' }, { bmw: 'bmw' });

const Item = ({ index, type, updateYear }) => {
  // find car in obj
  // const car = useMemo(() => CARS_OBJ[type], [type]);
  // const car = CARS_OBJ[type];

  console.time('noMemo');
  // const carObj = {
  //   number: 23,
  //   type,
  //   description: {
  //     city: 'Varna',
  //     region: 'Varna',
  //     municipalities: ['Varna', 'Bourgas', 'Sofia']
  //   }
  // };
  //const car2 = CARS_ARR.find(car => car[type] === type)?.[type];
  console.timeEnd('noMemo');

  // find car in Array
  console.time('memo');
  // const carObjMemo = useMemo(
  //   () => ({
  //     number: 23,
  //     type,
  //     description: {
  //       city: 'Varna',
  //       region: 'Varna',
  //       municipalities: ['Varna', 'Bourgas', 'Sofia']
  //     }
  //   }),
  //   [type]
  // );
  // const car = useMemo(() => CARS_ARR.find(car => car[type] === type)?.[type], [
  //   type
  // ]);
  console.timeEnd('memo');

  return (
    <div>
      {car ? car : ''} {index} year {updateYear}
    </div>
  );
};

export default memo(Item);
