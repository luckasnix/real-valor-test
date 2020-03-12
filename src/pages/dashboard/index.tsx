import React from 'react'
import Layout from '../../components/layout'
import { ResponsiveLine } from '@nivo/line'

let data = [
  {
    'id': 'japan',
    'color': 'red',
    'data': [
      { 'x': 'plane', 'y': 19 },
      { 'x': 'helicopter', 'y': 28 },
      { 'x': 'boat', 'y': 275},
      { 'x': 'train', 'y': 167 },
      { 'x': 'subway', 'y': 78 },
      { 'x': 'bus', 'y': 52 },
      { 'x': 'car', 'y': 134 },
      { 'x': 'moto', 'y': 54 },
      { 'x': 'bicycle', 'y': 47 },
      { 'x': 'horse', 'y': 63 },
      { 'x': 'skateboard', 'y': 100 },
      { 'x': 'others', 'y': 186 }
    ]
  },
  {
    'id': 'france',
    'color': 'blue',
    'data': [
      { 'x': 'plane', 'y': 198 },
      { 'x': 'helicopter', 'y': 40 },
      { 'x': 'boat', 'y': 93 },
      { 'x': 'train', 'y': 257 },
      { 'x': 'subway', 'y': 137 },
      { 'x': 'bus', 'y': 71 },
      { 'x': 'car', 'y': 185 },
      { 'x': 'moto', 'y': 42 },
      { 'x': 'bicycle', 'y': 42 },
      { 'x': 'horse', 'y': 102 },
      { 'x': 'skateboard', 'y': 202 },
      { 'x': 'others', 'y': 278 }
    ]
  },
]

export default () => {
  return (
    <Layout>
      <ResponsiveLine
        // fonte dos dados
        data={data}
        // distância com relação ao contêiner
        margin={{ top: 40, right: 120, bottom: 80, left: 80 }}
        xScale={{ type: 'point' }}
        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
        // estilo da linha
        curve='linear'
        // informação que ficam em volta do gráfico
        axisTop={null}
        axisRight={null}
        axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'tempo',
            legendOffset: 40,
            legendPosition: 'middle'
        }}
        axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'preço',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        // cor para as linhas
        // pode ser string com uma cor, lista ou paletas do Nivo
        colors={['#e1b12c', '#44bd32']}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabel='y'
        pointLabelYOffset={-12}
        useMesh={true}
    />
    </Layout>
  )
}