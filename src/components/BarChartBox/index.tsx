import React from 'react';
import {
  Container,
  SideRight,
  SideLeft,
  LegendContainer,
  Legend,
} from './styles';
import {
  ResponsiveContainer,
  Bar,
  BarChart,
  Cell,
  Tooltip,
} from 'recharts';
import { formatCurrency } from '../../utils/formatCurrency';

interface IBartChartBoxProps {
  title: string;
  data: {
    name: string;
    amount: number;
    percent: number;
    color: string;
  }[];
};

const BarChartBox: React.FC<IBartChartBoxProps> = ({
  title, data
}) => {
  return (
    <Container>
      <SideLeft>
        <h2> {title} </h2>
        <LegendContainer>
          { data.map(({name, percent, color}) => (
            <Legend color={color} key={name}>
              <div>
                {`${percent}%`}
              </div>
              <span>{name}</span>
            </Legend>

          ))
          }
        </LegendContainer>
      </SideLeft>
      <SideRight>
        <ResponsiveContainer>
          <BarChart data={data}>
            <Bar dataKey="amount" name="Valor">
              {
                data.map((indicator) => (
                  <Cell
                    key={indicator.name}
                    fill={indicator.color}
                    cursor="pointer"
                  />
                ))
              }
            </Bar>
            <Tooltip formatter={formatCurrency} cursor={{fill: 'none'}}/>
          </BarChart>
        </ResponsiveContainer>
      </SideRight>
    </Container>
  );
}

export default BarChartBox;