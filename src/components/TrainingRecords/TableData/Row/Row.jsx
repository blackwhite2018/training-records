import React from 'react';
import PropTypes from 'prop-types';
import Data from './Data/Data';

const Row = ({ data, handleOption }) => {
    return (
        <tr>
            <Data
                data={data}
                handleOption={handleOption}
            />
        </tr>
    )
};

Row.propTypes = {

}

export default Row;

