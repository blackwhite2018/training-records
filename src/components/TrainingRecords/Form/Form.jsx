import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Form = ({ handleAddRecord, editRecord, updateRecord }) => {
    const [field, setField] = useState({
        date: '',
        number: 0
    });

    const { date, number } = field;

    const handleSubmit = evt => {
        evt.preventDefault();
        handleAddRecord({
            date: date,
            number: number
        });
        setField({
            date: '',
            number: 0
        });
    };

    const handleChange = ({ target }) => {
        setField({
            ...field,
            [target.name]: target.value
        });
    };

    useEffect(() => {
        if (editRecord !== null) {
            setField(editRecord);
            updateRecord();
        }
    });

    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="form__group">
                <label htmlFor="date" className="form__label">Дата (дд.мм.гг)</label>
                <input
                    type="date"
                    name="date"
                    className="form__input"
                    placeholder="Ввести дату"
                    id="date"
                    onChange={handleChange}
                    value={date}
                ></input>
            </div>
            <div className="form__group">
                <label htmlFor="number" className="form__label">Пройдено км</label>
                <input
                    onChange={handleChange}
                    type="number"
                    name="number"
                    className="form__input"
                    placeholder="Ввести пройденное расстояние"
                    id="number"
                    value={number}
                ></input>
            </div >
            <input type="submit" className="form__submit" value="Ок" />
        </form >
    );
};

Form.defaultProps = {
    editRecord: null
};

Form.propTypes = {
    props: PropTypes.shape({
        handleAddRecord: PropTypes.func.isRequired,
        updateRecord: PropTypes.func.isRequired
    })
};

export default Form;

