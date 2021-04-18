import React, { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router';
import ContentHeader from '../../components/ContentHeader';
import HistoryCard from '../../components/HistoryCard';
import SelectInput from '../../components/SelectInput';
import { expenses } from '../../expenses';
import { gains } from '../../gains';
import { formatCurrency } from '../../utils/formatCurrency';
import { formatDate } from '../../utils/formatDate';
import { MONTHS } from '../../utils/months';
import { Container, Content, Filters } from './styles';

const List: React.FC = () => {
  
  interface IData {
    description: string;
    amountFormatted: string;
    frequency: string;
    dataFormatted: string;
  };
  
  interface ParamTypes {
    type: string
  };

  const [data, setData] = useState<IData[]>([]);
  const [monthSelected, setMonthSelected] = useState<string>(String(new Date().getMonth() + 1));
  const [yearSelected, setYearSelected] = useState<string>(String(new Date().getFullYear()));
  const { type } = useParams<ParamTypes>();
  const title: string = type === 'entry-balance' ? 'Entradas' : 'Saidas';
  const lineColor: string = type === 'entry-balance' ? '#F7931B': '#E44C4E'
  const typeList = type === 'entry-balance' ? gains : expenses;
  useEffect(() => {
    const filteredDate = typeList.filter(({ date }) => {
      const formatedDate = new Date(date);
      const month = String(formatedDate.getMonth() + 1 );
      const year = String(formatedDate.getFullYear());

      return month === monthSelected && year === yearSelected;
    })
    const response = filteredDate.map(({description, amount, frequency, date}) => {
      return {
        description: description,
        amountFormatted: formatCurrency(Number(amount)),
        frequency: frequency,
        dataFormatted: formatDate(date),
      }
    })
    setData(response)
  },[typeList, monthSelected, yearSelected])

  const months = useMemo(() => {
    const CurrentDate = new Date();
    // Pegamos o ano inicial para conseguir saber se vamos renderizar todos os meses, ou somente os meses do ano atual.
    const year = CurrentDate.getFullYear();
    // Armazena o mês atual para saber até que mês deve ser ter select no caso de o user está vendo o ano atual.
    const currentMonth = CurrentDate.getMonth() + 1;
    // Cria um array para armazenar todos os meses
    let monthsArray: { value?: string | number, label?: string | number }[] = [{}];
    // Dropa o primeiro objeto do array que estava vazio
    monthsArray.pop();
    // Faz o testes para saber se só vai ser armazenado os meses do ano atual.
      if (year === Number(yearSelected)) {
        MONTHS.forEach((month, index) => {
          if (index + 1 <= currentMonth) {
            monthsArray.push({value: index + 1, label: month})
          } 
        })
      } else {
        MONTHS.forEach((month, index) => {
          monthsArray.push({value: index + 1, label: month})
        })
      };
      return monthsArray;
    
  },[yearSelected])

  const years = useMemo(() => {
    let uniqueYears: number[] = [];
    typeList.forEach(({date}) => {
      const formatedDate = new Date(date);
      const year = formatedDate.getFullYear();
      if (!uniqueYears.includes(year)) {
        uniqueYears.push(year);
      } 
    });
    return uniqueYears.map((year) => ({
      value: year,
      label: year,
    }))
  }, [typeList])

  return (
    <Container>
      <ContentHeader title={ title } lineColor={ lineColor }>
        <SelectInput
          options={ months }
          onChange={(e) => setMonthSelected(e.target.value)}
          defaultValue={ monthSelected }  
        />
        <SelectInput
          options={ years }
          onChange={(e) => setYearSelected(e.target.value)}
          defaultValue={ yearSelected }
        />  
      </ContentHeader>
      <Filters>
        <button
          type="button"
          className="tag-filter recurrent"
        >
            Recorrentes
        </button>
        <button
          type="button"
          className="tag-filter eventual"
        >
            Eventuais
        </button>
      </Filters>
      <Content>
        { data.map(({ description, amountFormatted, frequency, dataFormatted }, index,
        ) => {
          return (
            <HistoryCard
              key={ index }
              tagColor={ frequency === 'recorrente' ? '#E44C4E' : '#4E41F0' }
              title={description}
              subtitle={dataFormatted}
              amount={amountFormatted}
            />)
        })}
      </Content>
    </Container>
  );
}

export default List;