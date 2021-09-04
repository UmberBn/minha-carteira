import React from 'react';
import {
  Container,
  SideLeft,
  LegendContainer,
  Legend,
  SideRight,
} from './styles';
import { PieChart , ResponsiveContainer, Pie, Cell} from 'recharts';

interface IPieChartBoxProps {
  data:{ 
    name: string,
    value: number | string,
    percent: number | string,
    color: string,
  }[];
}
const PieChartBox: React.FC<IPieChartBoxProps> = ({ data }) => (
    <Container>
      <SideLeft>
        <h2>Relações</h2>
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
        <ResponsiveContainer width={500}>
          <PieChart>
            <Pie
              data={data}
              dataKey="percent"
            >
              {
                data.map(({name, color}) => (
                  <Cell key={name} fill={color} />
                ))
              }
              { console.log(data)}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </SideRight>
    </Container>
);

export default PieChartBox;