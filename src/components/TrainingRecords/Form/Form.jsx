import React, { useState, useRef } from 'react';

const Form = ({ handleAddRecord, editRecord = null, updateRecord }) => {
    const [field, setField] = useState({
        date: '',
        number: 0
    });
    const field1 = useRef('');
    const field2 = useRef(0);
    let { date, number } = field;

    const handleSubmit = evt => {
        evt.preventDefault();
        handleAddRecord({
            date: field1.current.value,
            number: field2.current.value
        });
        field1.current.value = '';
        field2.current.value = 0;
    };

    const handleChange = ({ target }) => {
        setField(prevValue => {
            return {
                ...prevValue,
                [target.name]: target.value
            };
        });
    };

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
                    ref={field1}
                //onChange={handleChange}
                //value={editRecord === null ? '' : editRecord.date}
                ></input>
            </div>
            <div className="form__group">
                <label htmlFor="number" className="form__label">Пройдено км</label>
                <input
                    //onChange={handleChange}
                    type="number"
                    name="number"
                    ref={field2}
                    className="form__input"
                    placeholder="Ввести пройденное расстояние"
                    id="number"
                //value={editRecord === null ? '' : editRecord.number}
                ></input>
            </div >
            <input type="submit" className="form__submit" value="Ок" />
        </form >
    );
};

export default Form;

