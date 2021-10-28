import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ContentHeader from '../../components/ContentHeader';
import HistoryCard from '../../components/HistoryCard';
import SelectInput from '../../components/SelectInput';
import { useSelectedDate } from '../../context';
import { expenses } from '../../expenses';
import { gains } from '../../gains';
import { formatCurrency } from '../../utils/formatCurrency';
import { formatDate } from '../../utils/formatDate';
import { Container, Content, Filters } from './styles';

const List: React.FC = () => {
  const {
    monthSelected,
    yearSelected,
    months,
    years,
    setMonthSelected,
    setYearSelected
  } = useSelectedDate();
  interface IData {
    description: string;
    amountFormatted: string;
    frequency: string;
    dateFormatted: string;
  };
  
  interface ParamTypes {
    type: string
  };

  const [data, setData] = useState<IData[]>([]);
  const [filterByButton, setFilterByButton] = useState<string[]>(['recorrente', 'eventual']);
  const { type } = useParams<ParamTypes>();
  const title: string = type === 'entry-balance' ? 'Entradas' : 'Saidas';
  const lineColor: string = type === 'entry-balance' ? '#F7931B': '#E44C4E';
  const typeList = type === 'entry-balance' ? gains : expenses;

  useEffect(() => {
    const filteredDate = typeList.filter(({ date, frequency }) => {
      const formatedDate = new Date(date);
      const month = Number(formatedDate.getMonth() + 1 );
      const year = Number(formatedDate.getFullYear());

      return month === monthSelected && year === yearSelected && filterByButton.includes(frequency);
    });
    const response = filteredDate.map(({description, amount, frequency, date}) => {
      return {
        description: description,
        amountFormatted: formatCurrency(Number(amount)),
        frequency: frequency,
        dateFormatted: formatDate(date),
      }
    });
    setData(response)
  },[typeList, monthSelected, yearSelected, filterByButton]);

  const handleClick = (filterType: string) => {
    if (filterByButton.includes(filterType) && filterByButton.length !== 1) {
      const filtered = filterByButton.filter((item) => item !== filterType);
      setFilterByButton(filtered);
    } else if(!filterByButton.includes(filterType)) {
      setFilterByButton((prev) => [...prev, filterType]);
    };
  };

  return (
    <Container>
      <ContentHeader title={ title } lineColor={ lineColor }>
        <SelectInput
          options={ months }
          onChange={(e) => setMonthSelected(Number(e.target.value))}
          defaultValue={ monthSelected }  
        />
        <SelectInput
          options={ years }
          onChange={(e) => setYearSelected(Number(e.target.value))}
          defaultValue={ yearSelected }
        />  
      </ContentHeader>
      <Filters>
        <button
          type="button"
          className={`tag-filter recurrent ${filterByButton.includes('recorrente') && 'tag-actived'}`}
          onClick={ () => handleClick('recorrente')}
        >
            Recorrentes
        </button>
        <button
          type="button"
          className={`tag-filter eventual ${filterByButton.includes('eventual') && 'tag-actived'}`}
          onClick={ () => handleClick('eventual')}
        >
            Eventuais
        </button>
      </Filters>
      <Content>
        { data.map(({ description, amountFormatted, frequency, dateFormatted }, index,
        ) => {
          return (
            <HistoryCard
              key={ index }
              tagColor={ frequency === 'recorrente' ? '#E44C4E' : '#4E41F0' }
              title={description}
              subtitle={dateFormatted}
              amount={amountFormatted}
            />)
        })}
      </Content>
    </Container>
  );
}

export default List;