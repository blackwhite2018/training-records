import React from 'react';
import PropTypes from 'prop-types';

const Data = ({ data: { date, number }, handleOption }) => {
    const handleClick = ({ target }) => {
        handleOption(date, target.dataset.change);
    };

    return (
        <>
            <td>{date.split('.').reverse().join('.')}</td>
            <td>{number}</td>
            <td>
                <button data-change="edit" onClick={handleClick}>edit</button>
                <button data-change="rm" onClick={handleClick}>remove</button>
            </td>
        </>
    );
};

Data.propTypes = {
    props: PropTypes.shape({
        data: PropTypes.shape({
            date: PropTypes.string.isRequired,
            number: PropTypes.number.isRequired
        })
    })
}

export default Data;

