import React, { useContext } from 'react'
import DataContext from '../../state/data/context'
import Layout from '../../components/layout'
import { ResponsiveLine } from '@nivo/line'

export default () => {
  const { data } = useContext(DataContext)
  return (
    <Layout>
      {data.length ? (
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
              legend: 'Data',
              legendOffset: 40,
              legendPosition: 'middle'
          }}
          axisLeft={{
              orient: 'left',
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'Preço',
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
      ) : (
        <h1>Não há dados...</h1>
      )}
      
    </Layout>
  )
}