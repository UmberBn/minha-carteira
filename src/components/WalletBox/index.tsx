import React, { useMemo } from 'react';
import CountUp from 'react-countup';
import { Container } from './styles';
import arrowDown from '../../assets/arrow-down.svg';
import arrowUp from '../../assets/arrow-up.svg';
import dolar from '../../assets/dolar.svg';

interface IWalletBoxProps {
  title: string;
  amount: number;
  footerLabel: string;
  icon: 'dolar' | 'arrowUp' | 'arrowDown';
  color: string;
}

const WalletBox: React.FC<IWalletBoxProps> = ({
  title, amount, footerLabel, icon, color,
}) => {

  const iconSelected = useMemo(() => {
    if (icon === 'dolar') {
      return dolar;
    } else if (icon === 'arrowUp') {
      return arrowUp
    } else {
      return arrowDown
    };
  }, [])
  
  return (
    <Container color={ color }>
      <span>{title}</span>
      <h1>
        <CountUp
          end={ amount }
          prefix={'R$ '}
          separator='.'
          decimal=","
          decimals={2}
        />
      </h1>
      <small>{footerLabel}</small>
      <img src={iconSelected} alt='informações da carteira' />
    </Container>
  );
}

export default WalletBox;