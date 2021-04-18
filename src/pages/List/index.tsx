import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ContentHeader from '../../components/ContentHeader';
import HistoryCard from '../../components/HistoryCard';
import SelectInput from '../../components/SelectInput';
import { expenses } from '../../expenses';
import { gains } from '../../gains';
import { formatCurrency } from '../../utils/formatCurrency';
import { formatDate } from '../../utils/formatDate';
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
  const months = [
    { value: 4, label: 'Abril'},
    { value: 7, label: 'Julho'},
    { value: 8, label: 'Agosto'},
    { value: 9, label: 'Setembro'},
  ];

  const years = [
    { value: 2021, label: 2021 },
    { value: 2020, label: 2020 },
    { value: 2019, label: 2019 },
    { value: 2018, label: 2018 },
  ];

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