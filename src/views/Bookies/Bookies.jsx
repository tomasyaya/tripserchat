import React, {useEffect, useReducer} from 'react';
import {connect} from 'react-redux';
import {getData, printData} from '../../redux/actions/actions';
import {
  reducer,
  actionCreator,
  initialState,
  SELECT_MATCH,
  SELECT_MARKET,
  SELECT_PICK,
  SELECT_ODD,
} from './utilities';
import CustomForm from '../../components/CustomForm/CustomForm';
import Dropdown from '../../components/Dropdown/Dropdown';
import CustomButton from '../../components/CustomButton/CustomButton';
import CustomInput from '../../components/CustomInput/CustomInput';
import TextArea from '../../components/TextArea/TextArea';
import {styles} from './styles';

const Bookies = props => {
  const {
    getData,
    printData, 
    showData,
    data: {
      matches,
    }
  } = props;

  useEffect(() => {
    getData()
  },[getData])

  const [state, dispatch] = useReducer(reducer, initialState);
  const {match, bet} = state;
  const [NAME, MARKET,PICK,VALUE] = ['name', 'market', 'pick', 'value'];
  
console.log(showData)
  return(    
    <div style={styles.container}>
      <Dropdown
        options={matches || []}
        value={NAME}
        title={NAME}
        id={NAME}
        defaultTitle={'Select a match'}
        name={'matches'}
        onChange={(e) => dispatch(
          actionCreator(
            SELECT_MATCH,
            matches.find(match => match.name === e.target.value),
          )
        )}
        style={styles.dropdown}
      />
      <div style={styles.inputContainer}>
        <CustomInput
          type={'text'}
          value={match.sport || 'sport'}
          disabled={true}
          style={styles.input}
        />
        <CustomInput
          type={'text'}
          value={match.country || 'country'}
          disabled={true}
          style={styles.input}
        />
        <CustomInput
          type={'text'}
          value={match.competition || 'competition'}
          disabled={true}
          style={styles.input}
        />
      </div>
      <div style={styles.dropdownContainer}>
        <Dropdown
          options={match.bets ? [match.bets[0]] : []}
          value={MARKET}
          title={MARKET}
          id={MARKET}
          name={MARKET}
          defaultTitle={'Select a market'}
          onChange={(e) => dispatch(
            actionCreator(
              SELECT_MARKET,
              e.target.value,
            )
          )}
          style={styles.dropdown}
        />
        <Dropdown
          options={[{pick: 1},{pick:2}]}
          value={PICK}
          title={PICK}
          id={PICK}
          name={PICK}
          defaultTitle={'Pick'}
          onChange={(e) => dispatch(
            actionCreator(
              SELECT_PICK,
              e.target.value,
            )
          )}
          style={styles.dropdown}
        />
        <Dropdown
          options={bet.odds || []}
          value={VALUE}
          title={VALUE}
          id={VALUE}
          name={VALUE}
          defaultTitle={'Odds'}
          customTitle={bet.bookieId}
          onChange={(e) => dispatch(
            actionCreator(
              SELECT_ODD,
              e.target.value,
            )
          )}
          style={styles.dropdown}
        />
      </div>
      <CustomButton
        title={'Bet'}
        type={'submit'}
        style={styles.button}
        onClick={() => printData(state)}
      />
      <TextArea style={styles.textArea} value={`{
          match: ${showData.match},
          sport: ${showData.sport},
          competition: ${showData.competition},
          country: ${showData.country},
          bet: ${showData.bet},
          odd: ${showData.odd},
        }`} onChange={() => {}}/>
    </div> 
  )
}

const mapStateToProps = ({bookies}) => ({
  data: bookies.data,
  showData: bookies.showData,
})

export default connect(mapStateToProps, {getData, printData})(Bookies)