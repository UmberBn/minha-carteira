import styled from 'styled-components'
import { Button, Form as AntdForm, Input } from 'antd'

export const Container = styled.div`
  align-items: center;
  background-color: ${props => props.theme.colors.primary};
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
`

export const Logo = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  margin-bottom: 30px;
  
  img > {
    width: 40px;
    height: 40px;
  }
`
export const LogoText = styled.h2`
  color: ${props => props.theme.colors.white} !important;
  margin-left: 8px;
  margin-bottom: 0px !important;
  font-weight: bold;
`
export const Form = styled(AntdForm)`
  background-color: ${props => props.theme.colors.tertiary};
  border-radius: 5px;
  padding: 20px !important;
  flex-direction: column;
  width: 300px;
  
  > .ant-form-item .ant-form-item-label > label {
    color: ${props => props.theme.colors.white} !important;
  }

  > .ant-form-item {
    margin-bottom: 20px !important;
  }
`

export const FormTitle = styled.h1`
  color: ${props => props.theme.colors.white};
   &::after {
      content: '';
      border-bottom: 10px solid  ${ props => props.theme.colors.warning };
      display: block;
      width: 55px;
    }
`
export const AntdInput = styled(Input)`
  width: 260px;
`

export const AntdInputPassword = styled(Input.Password)`
  width: 260px;
  margin-bottom: 10px;
`
export const LoginButton = styled(Button)`
  background-color: ${props => props.theme.colors.warning};
  border-color: ${props => props.theme.colors.warning};
  opacity: 1;
  transition: all 0.5s;
  &:hover {
    background-color: ${props => props.theme.colors.warning};
    border-color: ${props => props.theme.colors.warning};
    opacity: 0.8;
  }
  &:focus {
    background-color: ${props => props.theme.colors.warning};
    border-color: ${props => props.theme.colors.warning};
  }
`