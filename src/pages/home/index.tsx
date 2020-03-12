import React, { useState, useCallback } from 'react'
import Layout from '../../components/layout'

const API_URL = 'https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=BRL'
const API_KEY = 'b4793d95abc2ed1a558d39b6f494dba677bfd638f4f52ad52ea43dd76a248b36'

export default () => {
  const [investment, setInvestment] = useState(1000)
  const handleInvestmentChange = useCallback((evt) => {
    setInvestment(evt.target.value)
  }, [setInvestment])
  // -----------------------------------------------------------------
  const [period, setPeriod] = useState(1)
  const handlePeriodChange = useCallback((evt) => {
    setPeriod(evt.target.value)
  }, [setPeriod])
  // function to fetch data from CryptoCompare API
  const handleSubmit = useCallback((evt) => {
    evt.preventDefault()
    let myHeaders = new Headers()
    myHeaders.append('authorization', `Apikey ${API_KEY}`);
    fetch(API_URL, {
      headers: myHeaders
    })
      .then((res) => {
        return res.json()
      })
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        <select value={investment} onChange={handleInvestmentChange}>
          <option value={1000}>R$ 1.000,00</option>
          <option value={2000}>R$ 2.000,00</option>
        </select>
        <select value={period} onChange={handlePeriodChange}>
          <option value={1}>1 ano</option>
          <option value={2}>2 ano</option>
        </select>
        <button type='submit'>Calcular</button>
      </form>
    </Layout>
  )
}