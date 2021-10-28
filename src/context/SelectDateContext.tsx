import React, { createContext, SetStateAction, useMemo, useState } from 'react';
import { useContext } from 'react';
import { expenses } from '../expenses';
import { gains } from '../gains';
import { MONTHS } from '../utils/months';

type Month = {
  value: number;
  label: string;
}

type Year = {
  value: number;
  label: number;
}
interface IDateContext {
  monthSelected: number;
  setMonthSelected: React.Dispatch<SetStateAction<number>>;
  yearSelected: number;
  setYearSelected: React.Dispatch<SetStateAction<number>>;
  months: Month[];
  years: Year[];
}
export const SelectedDateContext = createContext<IDateContext>({} as IDateContext);

const SelectdDateProvider: React.FC = ({children}) => {
  const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth() + 1);
  const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear());
  const months = useMemo(() => {
    const CurrentDate = new Date();
    // Pegamos o ano inicial para conseguir saber se vamos renderizar todos os meses, ou somente os meses do ano atual.
    const year = CurrentDate.getFullYear();
    // Armazena o mês atual para saber até que mês deve ser ter select no caso de o user está vendo o ano atual.
    const currentMonth = CurrentDate.getMonth() + 1;
    // Cria um array para armazenar todos os meses
    let monthsArray: { value: number, label: string }[] = [];
    
    // Faz o testes para saber se só vai ser armazenado os meses do ano atual.
      if (year === Number(yearSelected)) {
        MONTHS.forEach((month, index) => {
          if (index + 1 <= currentMonth) {
            monthsArray.push({value: index + 1, label: month})
          } 
        });
      } else {
        MONTHS.forEach((month, index) => {
          monthsArray.push({value: index + 1, label: month})
        })
      };
      return monthsArray;
    
  },[yearSelected]);

  const years = useMemo(() => {
    let uniqueYears: number[] = [];
    [...gains, ...expenses].forEach(({date}) => {
      const formatedDate = new Date(date);
      const year = formatedDate.getFullYear();
      if (!uniqueYears.includes(year)) {
        uniqueYears.push(year);
      }; 
    });
    return uniqueYears.map((year) => ({
      value: year,
      label: year,
    }));
  }, []);

  const data = {
    monthSelected,
    setMonthSelected,
    yearSelected,
    setYearSelected,
    months,
    years,
  };

  return (
    <SelectedDateContext.Provider value={data}>
      {children}
    </SelectedDateContext.Provider>
  );
}

function useSelectedDate(): IDateContext {
  const context = useContext(SelectedDateContext);
  return context;
}

export {SelectdDateProvider, useSelectedDate};
