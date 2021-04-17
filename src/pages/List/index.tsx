import React from 'react';
import ContentHeader from '../../components/ContentHeader';
import HistoryCard from '../../components/HistoryCard';
import SelectInput from '../../components/SelectInput';
import { Container, Content } from './styles';

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
      <Content>
        <HistoryCard
          tagColor="#e44c4e"
          title="Qualquer"
          subtitle="27/07/2020"
          amount="R$ 130"
        />
        <HistoryCard
          tagColor="#e44c4e"
          title="Qualquer"
          subtitle="27/07/2020"
          amount="R$ 130"
        />
        <HistoryCard
          tagColor="#e44c4e"
          title="Qualquer"
          subtitle="27/07/2020"
          amount="R$ 130"
        />
        <HistoryCard
          tagColor="#e44c4e"
          title="Qualquer"
          subtitle="27/07/2020"
          amount="R$ 130"
        />
        <HistoryCard
          tagColor="#e44c4e"
          title="Qualquer"
          subtitle="27/07/2020"
          amount="R$ 130"
        />
        <HistoryCard
          tagColor="#e44c4e"
          title="Qualquer"
          subtitle="27/07/2020"
          amount="R$ 130"
        />
        <HistoryCard
          tagColor="#e44c4e"
          title="Qualquer"
          subtitle="27/07/2020"
          amount="R$ 130"
        />
        <HistoryCard
          tagColor="#e44c4e"
          title="Qualquer"
          subtitle="27/07/2020"
          amount="R$ 130"
        />
        <HistoryCard
          tagColor="#e44c4e"
          title="Qualquer"
          subtitle="27/07/2020"
          amount="R$ 130"
        />
      </Content>
    </Container>
  );
}

export default List;