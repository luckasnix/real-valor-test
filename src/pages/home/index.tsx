import React from 'react'
import Layout from '../../components/layout'
import { Wrapper, Title, List, Item, Link } from './styled'
import { ReactComponent as Bitcoin } from '../../assets/images/bitcoin.svg'
import { ReactComponent as Treasure } from '../../assets/images/treasure.svg'

export default () => {
  return (
    <Layout>
      <Wrapper>
        <Title>Escolha um ativo para a simulação</Title>
        <List>
          <Item>
            <Link to='/config/bitcoin'>
              <Bitcoin/>
            </Link>
          </Item>
          <Item>
            <Link to='/config/treasure'>
              <Treasure/>
            </Link>
          </Item>
        </List>
      </Wrapper>
    </Layout>
  )
}