import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../components/layout'

export default () => {
  return (
    <Layout>
      <h1>Início</h1>
      <Link to='/config/bitcoin'>Configurações</Link>
    </Layout>
  )
}