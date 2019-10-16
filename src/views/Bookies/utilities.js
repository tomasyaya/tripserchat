export const SELECT_MATCH = 'SELECT_MATCH';
export const SELECT_MARKET = 'SELECT_MARKET';
export const SELECT_PICK = 'SELECT_PICK';
export const SELECT_ODD = 'SELECT_ODD';

export const initialState = {
  match: {},
  market: '',
  bet: {},
  odd: {},
  disabled: {
    market: true,
    pick: true,
    odds: true,
    button: true,
  }
}

export const reducer = (state = initialState, action) => {
  const {type, payload} = action;
  switch(type) {
    case SELECT_MATCH:
      return {
        ...state,
        match: payload,
        disabled: {
          ...state.disabled,
          market: false
        }
      }
    case SELECT_MARKET: 
      return {
        ...state,
        market: payload,
        disabled: {
          ...state.disabled,
          pick: false
        }
      }
    case SELECT_PICK:
      const [bet, hill] = state.match.bets;
        return {
          ...state,
          bet: (payload > 1) ? hill : bet,
          disabled: {
            ...state.disabled,
            odds: false,
          }
        }
    case SELECT_ODD:
      return {
        ...state,
        odd: payload,
        disabled: {
          ...state.disabled,
          button: false
        }
      }
    default:
      return {
        ...state,
      }
  }
}

export const actionCreator = (type, payload) => ({
  type,
  payload,
})


