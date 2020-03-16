import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useFormik } from 'formik'
import * as yup from 'yup'
import DataContent from '../../state/data/context'
import * as dataActions from '../../state/data/actions'
import Layout from '../../components/layout'
import { Form, Label, Input, Small, Button } from './styled'

// Dados necessário para acessar a API da CryptoCompare
const baseUrl: string = 'https://min-api.cryptocompare.com/data/v2/histoday'
const apiKey: string = 'b4793d95abc2ed1a558d39b6f494dba677bfd638f4f52ad52ea43dd76a248b36'

export default () => {
  const history = useHistory()
  const { data, dispatchToData } = useContext(DataContent)
  // Formulário com o Formik e validação com o Yup
  const { getFieldProps, touched, errors, handleSubmit } = useFormik({
    // Campos do formulário
    initialValues: {
      investment: 0,
      period: 0,
    },
    // Esquema de validação
    validationSchema: yup.object({
      investment: yup.number().moreThan(0, 'O valor deve ser maior que zero.'),
      period: yup.number().moreThan(0, 'O valor deve ser maior que zero.'),
    }),
    // Função de envio do formlário
    onSubmit: (values) => {
      // URL com os parâmetro para a conversão
      const fullUrl = `${baseUrl}?fsym=BTC&tsym=BRL&limit=${values.period}`
      let myHeaders = new Headers()
      myHeaders.append('authorization', `Apikey ${apiKey}`)
      fetch(fullUrl, {
        headers: myHeaders
      })
        .then((res) => {
          return res.json()
        })
        .then(({ Data: { Data } }) => {
          dispatchToData(dataActions.addData('bitcoin', values.investment, Data))
        })
        .catch((err) => {
          console.log(err)
        })
    }
  })
  useEffect(() => {
    if (data.length) {
      history.push('/dashboard')
    }
  }, [data, history])
  return (
    <Layout>
      <Form onSubmit={handleSubmit}>
        <Label>
          Valor do investimento:
          <Input type='number' {...getFieldProps('investment')}/>
        </Label>
        {touched.investment && errors.investment ? (
          <Small>{errors.investment}</Small>
        ) : null}
        <Label>
          Dias do rendimento:
          <Input type='number' {...getFieldProps('period')}/>
        </Label>
        {touched.period && errors.period ? (
          <Small>{errors.period}</Small>
        ) : null}
        <Button type='submit'>Calcular</Button>
      </Form>
    </Layout>
  )
}