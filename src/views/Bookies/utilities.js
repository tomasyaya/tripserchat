export const SELECT_MATCH = 'SELECT_MATCH';
export const SELECT_MARKET = 'SELECT_MARKET';
export const SELECT_PICK = 'SELECT_PICK';
export const SELECT_ODD = 'SELECT_ODD';

export const initialState = {
  match: {},
  market: '',
  bet: {},
  odd: {}
}

export const reducer = (state = initialState, action) => {
  const {type, payload} = action;
  switch(type) {
    case SELECT_MATCH:
      return {
        ...state,
        match: payload
      }
    case SELECT_MARKET: 
      return {
        ...state,
        market: payload
      }
    case SELECT_PICK:
      const [bet, hill] = state.match.bets;
        return {
          ...state,
          bet: (payload > 1) ? hill : bet
        }
    case SELECT_ODD:
      return {
        ...state,
        odd: payload
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


