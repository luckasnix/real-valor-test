import * as dataTypes from './types'

export const addBitcoinData = (
  investment: number,
  data: [{
    time: number,
    close: number,
  }]
) => {
  return {
    type: dataTypes.ADD_BITCOIN_DATA,
    payload: {
      investment,
      data,
    }
  }
}

export const addTreasureData = (
  investment: number,
  period: number,
) => {
  return {
    type: dataTypes.ADD_TREASURE_DATA,
    payload: {
      investment,
      period,
    }
  }
}

export const removeData = {
  type: dataTypes.REMOVE_DATA
}