import React from 'react';
import { useState } from 'react';
import { useAuth } from '../../context';
import LogoSVG from '../../assets/logo.svg'
import { Container, Logo, Form, AntdInput, AntdInputPassword, FormTitle, LogoText, LoginButton } from './styles';
import 'antd/dist/antd.css';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { signIn } = useAuth()

  return (
    <Container>
      <Logo>
        <img src={LogoSVG} alt="Logo" />
        <LogoText>Minha Carteira</LogoText>
      </Logo>
      <Form>
        <FormTitle>
          Entrar
        </FormTitle>
        <Form.Item label="Email">
          <AntdInput
            placeholder="Digite seu e-mail"
            type="email"
            value={email}
            onChange={({target}) => setEmail(target.value)}
          />
        </Form.Item>
        <Form.Item label="Senha">
          <AntdInputPassword
            placeholder="Digite sua senha"
            value={password}
            onChange={({target}) => setPassword(target.value)}
          />
        </Form.Item>
        <LoginButton
          htmlType='submit'
          block
          onClick={() => signIn(email, password)}
          type="primary"
        >
          Acessar
        </LoginButton>
      </Form>
    </Container>
  );
}

export default SignIn;
