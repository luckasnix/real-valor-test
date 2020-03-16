import * as dataTypes from './types'

interface Action {
  type: string
  payload: {
    asset: 'bitcoin' | 'treasure',
    investment: number,
    data?: [{
      time: number,
      close: number,
    }]
  }
}

export default (_: any, action: Action) => {
  switch (action.type) {
    case dataTypes.ADD_DATA:
      if (action.payload.asset === 'bitcoin') {
        let chartData: { x: string, y: string }[] = []
        action.payload.data!.forEach((cur) => {
          // O timestamp vindo da API deve ser multiplicado por mil
          // porque ele está em segundo e o objeto Date do Javascript
          // trabalha com milissegundos
          const date = new Date(cur.time * 1000)
          const formatedDate = `${date.getDate()}/${date.getMonth() + 1}`
          // quantidade de bitcoin
          const bitcoinAmount = action.payload.investment / action.payload.data![0].close
          const money = cur.close * bitcoinAmount
          const formatedMoney = money.toFixed(2)
          chartData.push({ x: formatedDate, y: formatedMoney })
        })
        return [{
          id: action.payload.asset,
          data: chartData
        }]
      } else if (action.payload.asset === 'treasure') {}
  }
}