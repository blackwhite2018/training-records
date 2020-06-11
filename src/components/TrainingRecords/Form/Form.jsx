import React, { useState, useRef } from 'react';

const Form = ({ handleAddRecord, editRecord, updateRecord }) => {
    const [field, setField] = useState(editRecord);
    const { date, number } = field;
    //const date = useRef(editRecord === null ? '' : editRecord.date);
    //const number = useRef(0);

    const handleSubmit = evt => {
        evt.preventDefault();
        handleAddRecord({
            date: date.current.value,
            number: number.current.value
        });
        date.current.value = '';
        number.current.value = 0;
    };

    const handleChange = ({ target }) => {
        setField(prevValue => {
            return {
                ...prevValue,
                [target.name]: target.value
            };
        });
        updateRecord({ [target.name]: target.value });
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="form__group">
                <label htmlFor="date" className="form__label">Дата (дд.мм.гг)</label>
                <input
                    type="date"
                    name="date"
                    ref={date}
                    className="form__input"
                    placeholder="Ввести дату"
                    id="date"
                    onChange={handleChange}
                    value={field.date}
                ></input>
            </div>
            <div className="form__group">
                <label htmlFor="number" className="form__label">Пройдено км</label>
                <input
                    onChange={handleChange}
                    type="number"
                    name="number"
                    ref={number}
                    className="form__input"
                    placeholder="Ввести пройденное расстояние"
                    id="number"
                    value={field.number}
                ></input>
            </div>
            <input type="submit" className="form__submit" value="Ок" />
        </form>
    );
};

export default Form;

