import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Layout from '../../components/layout'
import { ResponsiveLine } from '@nivo/line'
import { Wrapper, Title, Button } from './styled'
import DataContext from '../../state/data/context'
import * as dataActions from '../../state/data/actions'

export default () => {
  const history = useHistory()
  const { data, dispatchToData } = useContext(DataContext)
  useEffect(() => {
    if (!data.length) {
      history.push('/')
    }
  }, [data, history])
  return (
    <Layout>
      {data.length ? (
        <Wrapper>
          <Button onClick={() => {
            dispatchToData(dataActions.removeData)
          }}>
            Fazer nova pesquisa
          </Button>
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
                legend: 'Dia',
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
        </Wrapper>
      ) : (
        <Wrapper>
          <Title>Não há dados a serem mostrados</Title>
        </Wrapper>
      )}
    </Layout>
  )
}