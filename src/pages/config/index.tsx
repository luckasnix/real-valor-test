import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useHistory } from 'react-router-dom'
import Layout from '../../components/layout'
import { Form, Label, Input, Button } from './styled'
import getFullUrl from '../../utils/get-full-url'
import { baseUrl, apiKey } from '../../utils/api-data'

export default () => {
  let history = useHistory()
  const { getFieldProps, touched, errors, handleSubmit } = useFormik({
    initialValues: {
      investment: 0,
      period: 0,
    },
    validationSchema: yup.object({
      investment: yup.number().moreThan(0, 'O valor deve ser maior que zero.'),
      period: yup.number().moreThan(0, 'O valor deve ser maior que zero.'),
    }),
    onSubmit: (values) => {
      const fullUrl = getFullUrl(baseUrl, {
        fsym: 'BTC',
        tsym: 'BRL',
        limit: values.period,
        extraParams: 'real-valor-test',
      })
      let myHeaders = new Headers()
      myHeaders.append('authorization', `Apikey ${apiKey}`)
      fetch(fullUrl, {
        headers: myHeaders
      })
        .then((res) => {
          return res.json()
        })
        .then((res) => {
          const data: { x: number, y: number }[] = []
          res.Data.Data.forEach((cur: { time: number, close: number }) => {
            data.push({ x: cur.time, y: cur.close * values.investment })
          })
          console.log(data)
          const fullData = [
            {
              id: 'bitcoin',
              data: data
            }
          ]
          history.push('/dashboard', { data: fullData })
        })
        .catch((err) => {
          console.log(err)
        })
    }
  })
  return (
    <Layout>
      <Form onSubmit={handleSubmit}>
        <Label>
          Investimento:
          <Input type='number' {...getFieldProps('investment')}/>
        </Label>
        {touched.investment && errors.investment ? (
          <small>{errors.investment}</small>
        ) : null}
        <Label>
          Período:
          <Input type='number' {...getFieldProps('period')}/>
        </Label>
        {touched.period && errors.period ? (
          <small>{errors.period}</small>
        ) : null}
        <Button type='submit'>Calcular</Button>
      </Form>
    </Layout>
  )
}