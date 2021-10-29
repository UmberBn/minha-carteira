import React, { useMemo } from 'react';
import ContentHeader from '../../components/ContentHeader';
import HistoryBox from '../../components/HistoryBox';
import MessageBox from '../../components/MessageBox';
import PieChartBox from '../../components/PieChartBox';
import SelectInput from '../../components/SelectInput';
import WalletBox from '../../components/WalletBox';
import BarChartBox from '../../components/BarChartBox';
import { expenses } from '../../expenses';
import { gains } from '../../gains';
import { Container, Content } from './styles';
import { useSelectedDate } from '../../context/SelectDateContext'
import moment from 'moment';

const Dashboard: React.FC = () => {
  const {
    monthSelected,
    yearSelected,
    months,
    years,
    setMonthSelected,
    setYearSelected
  } = useSelectedDate();

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
  
  const relationExpenses = useMemo(() => {
    let amountRecurrent = 0;
    let amountEventual = 0;

    expenses.filter((expense) => {
      const date = new Date(expense.date);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;

      return month === monthSelected && year === yearSelected;
    }).forEach((expense) => {
      if(expense.frequency === 'recorrente') {
        return amountRecurrent += Number(expense.amount);
      };
      if(expense.frequency === 'eventual') {
        return amountEventual += Number(expense.amount);
      };
    });
    const total = amountRecurrent + amountEventual;
    const EventualPercent = Number(((amountEventual / total) * 100).toFixed(1));
    const RecurrentPercent = Number(((amountRecurrent / total) * 100).toFixed(1));

    return [
      {
        name: "Recorrentes",
        amount: amountRecurrent || 0,
        percent: RecurrentPercent || 0,
        color: "#F7931B",
      },
      {
        name: "Eventuais",
        amount: amountEventual || 0,
        percent: EventualPercent || 0,
        color: "#E44C4E",
      },
    ];
  }, [monthSelected, yearSelected]);

  const relationGains = useMemo(() => {
    let amountRecurrent = 0;
    let amountEventual = 0;

    gains.filter((gain) => {
      const date = new Date(gain.date);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;

      return month === monthSelected && year === yearSelected;
    }).forEach((gain) => {
      if(gain.frequency === 'recorrente') {
        return amountRecurrent += Number(gain.amount);
      };
      if(gain.frequency === 'eventual') {
        return amountEventual += Number(gain.amount);
      };
    });

    const total = amountRecurrent + amountEventual;
    const EventualPercent = Number(((amountEventual / total) * 100).toFixed(1));
    const RecurrentPercent = Number(((amountRecurrent / total) * 100).toFixed(1));

    return [
      {
        name: "Recorrentes",
        amount: amountRecurrent || 0,
        percent: RecurrentPercent || 0,
        color: "#F7931B",
      },
      {
        name: "Eventuais",
        amount: amountEventual || 0,
        percent: EventualPercent || 0,
        color: "#E44C4E",
      },
    ];
  }, [monthSelected, yearSelected]);

  const historyData = useMemo(() => {
    return months.map((_, month) => {
      let amountEntry = 0;
      gains.forEach(gain => {
        const date = new Date(gain.date);
        const gainMonth = date.getMonth();
        const gainYear = date.getFullYear();

        if (gainMonth === month && gainYear === yearSelected) {
          amountEntry += Number(gain.amount);
        }
      })

      let amountOutput = 0;
      expenses.forEach(expense => {
        const date = new Date(expense.date);
        const expenseMonth = date.getMonth();
        const expenseYear = date.getFullYear();

        if (expenseMonth === month && expenseYear === yearSelected) {
          amountOutput += Number(expense.amount);
        }
      })
      
      const subMonths = (months[month].label)?.toString().substr(0,3);
      return {
        monthNumber: month,
        month: subMonths,
        amountEntry,
        amountOutput,
      }
    });
  }, [yearSelected, months]);

  const percentPerYear = useMemo(() => {
    let totalGains = 0;
    gains.forEach((gain) => {
      const date = new Date(gain.date);
      const year = date.getFullYear();
      if(yearSelected === year) {
        totalGains += Number(gain.amount);
      };
    });

    let totalExpenses = 0;
    expenses.forEach((expense) => {
      const date = new Date(expense.date);
      const year = date.getFullYear();
      if(yearSelected === year) {
        totalExpenses += Number(expense.amount);
      }
    });

    const total = totalExpenses + totalGains;
    const percentGains = Number(((totalGains / total) * 100).toFixed(1))
    const percentExpenses = Number(((totalExpenses / total) * 100).toFixed(1))
    return {
      percentGains,
      percentExpenses,
    };
  }, [yearSelected]);

  const lastUpdates = useMemo(() => {
    const sortedGains = gains.sort((a, b) => moment(a.date, 'YYYY-MM-DD').diff(moment(b.date, 'YYYY-MM-DD')));
    const sortedExpenses = expenses.sort((a, b) => moment(a.date, 'YYYY-MM-DD').diff(moment(b.date, 'YYYY-MM-DD')));

    return {
      lastGain: moment(sortedGains[sortedGains.length-1].date).format("DD/MM/YYYY"),
      lastExpense: moment(sortedExpenses[sortedExpenses.length-1].date).format("DD/MM/YYYY"),
    }
  }, [])
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
          footerLabel={`última movimentação em ${lastUpdates.lastGain}`}
          icon="arrowUp"
          color="#F7931B"
        />
        <WalletBox
          title='Saídas'
          amount={totalExpenses}
          footerLabel={`última movimentação em ${lastUpdates.lastExpense}`}
          icon="arrowDown"
          color="#E44C4E"
        />
        <MessageBox totalAmount={totalAmount} />
        <PieChartBox data={relationExpensesVersusGains} />
        <HistoryBox
          data={historyData}
          lineColorAmountEntry={"#F7931B"}
          lineColorAmountOutput={"#E44C4E"}
          percentData={percentPerYear}
        />
        <BarChartBox title="Saídas" data={relationExpenses} />
        <BarChartBox title="Entradas" data={relationGains} />
      </Content>
    </Container>
  );
}

export default Dashboard;