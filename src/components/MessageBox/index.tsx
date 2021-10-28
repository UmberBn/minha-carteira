import React from 'react';
import { Container } from './styles';
import happy from '../../assets/happy.svg';
import sad from '../../assets/sad.svg';
import grinning from '../../assets/grinning.svg';

interface IMessageBoxProps {
  totalAmount: number;
}

interface IMessages {
  title: string;
  icon: string;
  description: string;
  footerText: string;
}

const MessageBox: React.FC<IMessageBoxProps> = ({totalAmount}) => {
  const positiveMessage: IMessages = {
    title: 'Mandou bem',
    icon: happy,
    description: 'Sua carteira está com o saldo positivo!',
    footerText: 'Continue assim, você está indo bem!'
  }

  const negativeMessage: IMessages = {
    title: 'Opa, parece que você que não estamos bem',
    icon: sad,
    description: 'Sua carteira está com o saldo negativo!',
    footerText: 'Tente cortar gastos desnecessários.'
  }

  const zeroMessage: IMessages = {
    title: 'Ufa!, essa foi por pouco',
    icon: grinning,
    description: 'você quase fica com o saldo negativo esse mês.',
    footerText: 'Cuidado, esse é um sinal para economizar mais.',
  }

  return (
    <Container>
      <header>
        <h1>
          {
            totalAmount > 0 ? positiveMessage.title
            : totalAmount === 0 ? zeroMessage.title
            : negativeMessage.title
          }
          <img
            src={
                  totalAmount > 0 ? positiveMessage.icon
                  : totalAmount === 0 ? zeroMessage.icon
                  : negativeMessage.icon
                }
              alt="Emoji do status da carteira" />
        </h1>
        <p>
          {
            totalAmount > 0 ? positiveMessage.description
            : totalAmount === 0 ? zeroMessage.description
            : negativeMessage.description
          }
        </p>
      </header>
      <footer>
        { 
          totalAmount > 0 ? positiveMessage.footerText
          : totalAmount === 0 ? zeroMessage.footerText
          : negativeMessage.footerText
        }
      </footer>
    </Container>
  );
}

export default MessageBox;
