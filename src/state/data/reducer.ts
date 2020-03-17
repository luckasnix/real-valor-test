import * as dataTypes from './types'

interface Action {
  type: string
  payload: {
    investment: number,
    period?: number,
    data?: [{
      time: number,
      close: number,
    }]
  }
}

export default (_: any, action: Action) => {
  switch (action.type) {
    case dataTypes.ADD_BITCOIN_DATA:
      let bitcoinChartData: { x: string, y: string }[] = []
      action.payload.data!.forEach((cur) => {
        // O timestamp vindo da API deve ser multiplicado por mil
        // porque ele está em segundo e o objeto Date do Javascript
        // trabalha com milissegundos
        const date = new Date(cur.time * 1000)
        const formatedDate = `${date.getDate()}/${date.getMonth() + 1}`
        // quantidade de bitcoin
        const bitcoinAmount = action.payload.investment / action.payload.data![0].close
        const money = cur.close * bitcoinAmount
        bitcoinChartData.push({ x: formatedDate, y: money.toFixed(2) })
      })
      return [{
        id: 'bitcoin',
        data: bitcoinChartData
      }]
    case dataTypes.ADD_TREASURE_DATA:
      let treasureChartData: { x: string, y: string }[] = []
      // Laço FOR usando o índice para simular os meses
      for (let idx = 0; action.payload.period! >= idx; idx++) {
        // Fórmula do juros composto
        let total = action.payload.investment * Math.pow(1 + 10 / 100, idx)
        treasureChartData.push({ x: idx.toString(), y: total.toFixed(2) })
      }
      return [{
        id: 'treasure',
        data: treasureChartData
      }]
    case dataTypes.REMOVE_DATA:
      return []
  }
}