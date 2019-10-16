import React, {useEffect, useReducer} from 'react';
import {connect} from 'react-redux';
import { 
  func, 
  object, 
  bool, 
  array 
} from 'prop-types'
import {
  reducer,
  actionCreator,
  initialState,
  SELECT_MATCH,
  SELECT_MARKET,
  SELECT_PICK,
  SELECT_ODD,
} from './utilities';
import {getData, printData} from '../../redux/actions/actions';
import Dropdown from '../../components/Dropdown/Dropdown';
import CustomButton from '../../components/CustomButton/CustomButton';
import CustomInput from '../../components/CustomInput/CustomInput';
import TextArea from '../../components/TextArea/TextArea';
import Loader from '../../components/Loader/Loader';
import {styles} from './styles';

const Bookies = props => {
  const {
    getData,
    printData, 
    showData,
    loading,
    loadingText,
    textArea,
    data: {
      matches,
    },
  } = props;

  useEffect(() => {
    getData()
  },[getData])

  console.log(loadingText)
  const [state, dispatch] = useReducer(reducer, initialState);
  const {match, bet, disabled} = state;
  const [NAME, MARKET,PICK,VALUE] = ['name', 'market', 'pick', 'value'];
  const showLoader = loadingText ?  <Loader styleContainer={styles.loaderContainer} styleTitle={styles.LoaderTitle} /> : null;
   
  return(    
    <div style={styles.container}>
      { loading ? <Loader /> : <> 
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
              style={styles.dropdown}
              disabled={disabled.market}
              defaultTitle={'Select a market'}
              onChange={(e) => dispatch(
                actionCreator(
                  SELECT_MARKET,
                  e.target.value,
                )
              )}
            />
            <Dropdown
              options={[{pick: 1},{pick:2}]}
              value={PICK}
              title={PICK}
              id={PICK}
              name={PICK}
              disabled={disabled.pick}
              style={styles.dropdown}
              defaultTitle={'Pick'}
              onChange={(e) => dispatch(
                actionCreator(
                  SELECT_PICK,
                  e.target.value,
                )
              )}
            />
            <Dropdown
              options={bet.odds || []}
              value={VALUE}
              title={VALUE}
              id={VALUE}
              name={VALUE}
              customTitle={bet.bookieId}
              style={styles.dropdown}
              disabled={disabled.odds}
              defaultTitle={'Odds'}
              onChange={(e) => dispatch(
                actionCreator(
                  SELECT_ODD,
                  e.target.value,
                )
              )}
            /> 
          </div>
          <CustomButton
            title={'Bet'}
            type={'submit'}
            style={styles.button}
            disabled={disabled.button}
            onClick={() => printData(state)}
          />
          { textArea ? <TextArea style={styles.textArea} value={`{
              match: ${showData.match},
              sport: ${showData.sport},
              competition: ${showData.competition},
              country: ${showData.country},
              bet: ${showData.bet},
              odd: ${showData.odd},
            }`} onChange={() => {}}/> : showLoader}
        </>
      }
    </div> 
  )
}

Bookies.propTypes = {
  getData: func,
  printData: func, 
  showData: object,
  loading: bool,
  loadingText: bool,
  textArea: bool,
  matches: array,
}

const mapStateToProps = ({bookies}) => ({
  data: bookies.data,
  showData: bookies.showData,
  loading: bookies.loading,
  textArea: bookies.textArea,
  loadingText: bookies.loadingText,
})

export default connect(mapStateToProps, {getData, printData})(Bookies)