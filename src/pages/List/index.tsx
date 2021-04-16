import React from 'react';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import { Container } from './styles';

const List: React.FC = () => {
  const options = [{
    value: 'teste', label: 'teste',
  }, {
    value: 'teste', label: 'teste',
  }, {
    value: 'teste', label: 'teste',
  }];
  return (
    <Container>
      <ContentHeader title='Entradas' lineColor="#E44C4E">
        <SelectInput options={ options }/>
        <SelectInput options={ options }/>
        <SelectInput options={ options }/>
      </ContentHeader>
    </Container>
  );
}

export default List;