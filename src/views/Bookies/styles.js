
export const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '80%',
    margin: '30px auto',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
    borderRadius: '20px',
    padding: '30px',
    minHeight: '700px',
  },
  inputContainer: {
    display: 'flex',
    justifyContent: 'space between',
    padding: '20px',
    margin: '20px',
    width: '80%',
  },
  input: {
    width: '300px',
    padding: 5,
    margin: '10px auto',
    borderBottom: 'solid 1px gray',
    borderTop: 'none',
    borderRight: 'none',
    borderLeft: 'none',
    color: 'black',
    opacity: '0.7',
    backgroundColor: 'transparent'
  },
  dropdownContainer: {
    display: 'flex',
    justifyContent: 'space between',
    padding: '20px',
    margin: '20px',
    width: '80%',
  },
  dropdown: {
    //display: 'block',
    fontSize: '16px',
    fontFamily: 'sans-serif',
    fontWeight: 700,
    color: '#444',
    lineHeight: '1.3',
    padding: '.6em 1.4em .5em .8em',
    width: '30%',
    maxWidth: '100%', 
    boxSizing: 'border-box',
    margin: '10px',
    border: '1px solid #aaa',
    boxShadow: '0 1px 0 1px rgba(0,0,0,.04)',
    borderRadius: '.5em',
  },
  button: {
    padding: '10px',
    borderRadius: '10px',
    background: '#9400D3',
    color: 'white',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  textArea: {
    background: 'transparent',
    color: 'white',
    padding: '20px',
    opacity: '0.8',
    width: '250px',
    height: '250px',
    border: 'none',
    fontSize: '15px',
    margin: '10px',
  },
  loaderContainer: {
    height: '100px',
    width: '100px'
  },
  loaderTitle: {
    fontSize: '10px'
  }
}