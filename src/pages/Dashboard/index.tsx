import React, { useMemo, useState } from 'react';
import ContentHeader from '../../components/ContentHeader';
import MessageBox from '../../components/MessageBox';
import PieChartBox from '../../components/PieChartBox';
import SelectInput from '../../components/SelectInput';
import WalletBox from '../../components/WalletBox';
import { expenses } from '../../expenses';
import { gains } from '../../gains';
import { MONTHS } from '../../utils/months';
import { Container, Content } from './styles';

const Dashboard: React.FC = () => {
  const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth() + 1);
  const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear());
  
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

  const totalGains = useMemo(()=> {
    let total: number = 0;
    gains.forEach((gain) => {
      const date = new Date(gain.date);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
        if (month === monthSelected && year === yearSelected) {
          total += Number(gain.amount);
       };
    });
    return total;
  },[monthSelected, yearSelected])

  const totalExpenses = useMemo(()=> {
    let total: number = 0;
    expenses.forEach((expense) => {
      const date = new Date(expense.date);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
        if (month === monthSelected && year === yearSelected) {
          total += Number(expense.amount);
       };
    });
    return total;
  },[monthSelected, yearSelected])

  const relationExpensesVersusGains = useMemo(() => {
    const total = totalGains + totalExpenses;
    const percentGains = totalGains ? Number(((totalGains/total) * 100).toFixed(1)) : 0;
    const percentExpenses = totalExpenses ? Number(((totalExpenses/total) * 100).toFixed(1)) : 0;
    const data = [
      {
        name: 'Entradas',
        value: totalExpenses,
        percent: percentGains,
        color: '#F7931B'
      },
      {
        name: 'Saídas',
        value: totalExpenses,
        percent: percentExpenses,
        color: '#E44C4E'

      },
    ];
    return data;
  },[totalGains, totalExpenses])

  const totalAmount = totalGains - totalExpenses;
  
  return (
    <Container>
      <ContentHeader title='Dasboard' lineColor='#F7931B'>
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
      <Content>
        <WalletBox
          title='Saldo'
          amount={totalAmount}
          footerLabel='atualizado com base nas entradas e saídas'
          icon="dolar"
          color="#4E41F0"
        />
        <WalletBox
          title='Entradas'
          amount={totalGains}
          footerLabel='última movimentação em 18/07/2020 às 11h40'
          icon="arrowUp"
          color="#F7931B"
        />
        <WalletBox
          title='Saídas'
          amount={totalExpenses}
          footerLabel='última movimentação em 18/07/2020 às 11h40'
          icon="arrowDown"
          color="#E44C4E"
        />
        <MessageBox totalAmount={totalAmount} />
        <PieChartBox data={relationExpensesVersusGains} />
      </Content>
    </Container>
  );
}

export default Dashboard;