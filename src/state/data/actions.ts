import * as dataTypes from './types'

export const addData = (
  asset: 'bitcoin' | 'treasure',
  investment: number,
  data?: [{
    time: number,
    close: number,
  }]
) => {
  return {
    type: dataTypes.ADD_DATA,
    payload: {
      asset,
      investment,
      data,
    }
  }
}