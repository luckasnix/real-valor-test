import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useFormik } from 'formik'
import * as yup from 'yup'
import DataContent from '../../state/data/context'
import * as dataActions from '../../state/data/actions'
import Layout from '../../components/layout'
import { Form, Label, Input, Small, Button } from './styled'

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
      dispatchToData(dataActions.addTreasureData(values.investment, values.period))
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
          Anos do rendimento:
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