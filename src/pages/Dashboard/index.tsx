import React, { useMemo, useState } from 'react';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import WalletBox from '../../components/WalletBox';
import { expenses } from '../../expenses';
import { gains } from '../../gains';
import { MONTHS } from '../../utils/months';
import { Container, Content } from './styles';

const Dashboard: React.FC = () => {
  const [monthSelected, setMonthSelected] = useState<string>(String(new Date().getMonth() + 1));
  const [yearSelected, setYearSelected] = useState<string>(String(new Date().getFullYear()));
  
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

  return (
    <Container>
      <ContentHeader title='Dasboard' lineColor='#F7931B'>
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
      <Content>
        <WalletBox
          title='Saldo'
          amount={150}
          footerLabel='atualizado com base nas entradas e saídas'
          icon="dolar"
          color="#4E41F0"
        />
        <WalletBox
          title='Entradas'
          amount={5000}
          footerLabel='última movimentação em 18/07/2020 às 11h40'
          icon="arrowUp"
          color="#F7931B"
        />
        <WalletBox
          title='Saídas'
          amount={4850}
          footerLabel='última movimentação em 18/07/2020 às 11h40'
          icon="arrowDown"
          color="#E44C4E"
        />
      </Content>
    </Container>
  );
}

export default Dashboard;