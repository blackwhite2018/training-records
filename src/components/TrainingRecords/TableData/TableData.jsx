import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import Row from './Row/Row';

const TableData = ({ records, handleOption }) => {
    const headers = ['Дата (дд.мм.гг)', 'Пройдено км', 'Действия'];

    const headersIds = headers.map(header => {
        return {
            _id: shortid.generate(),
            value: header
        };
    });

    const recordsIds = records.map(record => {
        return {
            _id: shortid.generate(),
            ...record
        };
    });

    return (
        <table>
            <thead>
                <tr>
                    {
                        headersIds.map(({ _id, value }) => (
                            <th key={_id}>{value}</th>
                        ))
                    }
                </tr>
            </thead>
            <tbody>
                {
                    recordsIds.map(({ _id, date, number }) => {
                        return (
                            <Row
                                key={_id}
                                data={{ date, number }}
                                handleOption={handleOption}
                            />
                        );
                    })
                }
            </tbody>
        </table>
    );
};

TableData.propTypes = {
    props: PropTypes.shape({
        records: PropTypes.array.isRequired
    })
};

export default TableData;

