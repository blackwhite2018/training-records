import React, { useState } from 'react';
import Form from './Form/Form';
import TableData from './TableData/TableData';
import './TrainingRecords.css';

const TrainingRecords = () => {
    const [records, setRecords] = useState([]);
    const [editRecord, setEditRecord] = useState(null);

    const handleAddRecord = ({ date, number }) => {
        const dateRev = date.split('.').reverse().join('.');

        let position = -1;
        records.forEach((record, index) => {
            if (record.date === dateRev) {
                position = index;
            }
        });

        let copyRecords = [...records];

        if (position !== -1) {
            copyRecords[position].number += Number(number);
        } else {
            copyRecords.push({ date, number: Number(number) });
        }

        copyRecords.sort((a, b) => a.date < b.date ? 1 : -1);

        setRecords(copyRecords);
    };

    const removeRecord = date => {
        setRecords(prevValue => {
            return [...prevValue].filter(item => item.date !== date);
        });
    };

    const updateRecord = record => {
        setEditRecord(null);
    };

    const handleOption = (date, option) => {
        switch (option) {
            case 'edit':
                let position = -1;

                records.forEach((record, index) => {
                    if (record.date === date) {
                        position = index;
                    }
                });

                setEditRecord(records[position]);
                break;
            case 'rm':
                removeRecord(date);
        }
    };

    return (
        <div className="container">
            <Form
                handleAddRecord={handleAddRecord}
                editRecord={editRecord}
                updateRecord={updateRecord}
            />
            <TableData
                records={records}
                handleOption={handleOption}
            />
        </div>
    );
};

export default TrainingRecords;

