import { CLICK_UPDATE_VALUE } from '../constants/action-types'

export const clickButton = value => ({
  type: CLICK_UPDATE_VALUE,
  payload: {
    pokeId: value
  }
});