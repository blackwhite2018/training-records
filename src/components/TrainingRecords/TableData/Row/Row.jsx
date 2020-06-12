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
    props: PropTypes.shape({
        data: PropTypes.object.isRequired,
        handleOption: PropTypes.func.isRequired
    })
}

export default Row;

