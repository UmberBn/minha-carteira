import React from 'react';
import LogoSVG from '../../assets/logo.svg'
import { Container, Logo, Form, AntdInput, AntdInputPassword, FormTitle, LogoText, LoginButton } from './styles';

const SignIn: React.FC = () => {
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
          />
        </Form.Item>
        <Form.Item label="Senha">
          <AntdInputPassword
            placeholder="Digite sua senha"
          />
        </Form.Item>

        <LoginButton
          typeof="submit"
          block
          type="primary"
        >
          Acessar
        </LoginButton>
      </Form>
    </Container>
  );
}

export default SignIn;
