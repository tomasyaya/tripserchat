const bookies = [ 
  { 
    id: 'bet365', 
    name: 'Bet 365', 
  }, 
  { 
    id: 'hill', 
    name: 'William Hill' 
  }, 
]; 
const countries = [ 
    { 
      id: 'fr', 
      name: 'France'
    }, 
    { 
      id: 'es', 
      name: 'Spain'
    }, 
  ]; 
const matches = [ 
  { 
    name: 'Barcelona - Madrid', 
    sport: 'Fútbol', 
    country: 'es', 
    competition: 'La Liga', 
    bets: [ 
      { 
        bookieId: 'bet365', 
        market: '12', 
        picks: ['1, 2'], 
        odds: [
          { 
            id: '1', 
            value: 1.4 
          }, 
          { 
            id: '2', 
            value: 3.4 
          }
        ], 
      }, 
      { 
        bookieId: 'hill', 
        market: '12', 
        picks: ['1, 2'], 
        odds: [
          { 
            id: '1', 
            value: 1.6 
          }, 
          { 
            id: '2', 
            value: 3.6 
          }
        ], 
      }, 
    ], 
  }, 
  { 
    name: 'Nadal - Federer', 
    sport: 'Tennis', 
    country: 'fr', 
    competition: 'Roland-Garros', 
    bets: [ 
      { 
        bookieId: 'bet365',  
        market: '12', 
        picks: ['1, 2'], 
        odds: [
          { 
            id: '1', 
            value: 1.4 
          }, 
          { 
            id: '2', 
            value: 1.4 
          }
        ], 
      }, 
      { 
        bookieId: 'hill', 
        market: '12', 
        picks: ['1, 2'], 
        odds: [
          { 
            id: '1', 
            value: 0.8 
          }, 
          { 
            id: '2', 
            value: 0.9 
          }
        ], 
      }, 
    ], 
  }, 
]; 

export const fetchData = () => new Promise(res => setTimeout(() => {
  res({
    bookies,
    countries,
    matches
  })
}, 2000))

export const manageData = (data) => new Promise(res => setTimeout(() => {
  const json = {
    match: data.match.name,
    country: data.match.country,
    competition: data.match.competition,
    sport: data.match.sport,
    bet: data.bet.bookieId,
    market: data.bet.market,
    odd: data.odd
  }
  res(json)
}, 2000))
  