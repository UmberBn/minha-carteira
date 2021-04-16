import React from 'react';
import { Container } from './styles';

interface ISelectInputProps {
  options: {
    value: string | number;
    label: string | number;
  }[],
}
const SelectInput: React.FC<ISelectInputProps> = ({options}) => {
  return (
    <Container>
      <select>
       {
         options.map(({value, label}) => (
           <option value={ value }>
             { label }
           </option>
         ))
       }
      </select>
    </Container>
  );
}

export default SelectInput;