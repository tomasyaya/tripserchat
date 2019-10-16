import React from 'react';
import {styles} from './styles';
import {object} from 'prop-types';

const Loader = ({styleContainer, styleTitle}) => {
    return(
        <div style={styleContainer || styles.container}>
            <h2 style={styleTitle || styles.title}>Loading ...</h2>
        </div>
    )
}

Loader.propTypes = {
    styleContainer: object,
    styleTitle: object,
}

export default Loader;