import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import Row from './Row/Row';

const TableData = ({ records, handleOption }) => {
    const headers = ['Дата (дд.мм.гг)', 'Пройдено км', 'Действия'];

    const headersIds = headers.map(header => (
        {
            _id: shortid.generate(),
            value: header
        }
    ));

    const recordsIds = records.map(record => (
        {
            _id: shortid.generate(),
            ...record
        }
    ));

    return (
        <table className="table">
            <thead className="thead">
                <tr className="table__row">
                    {
                        headersIds.map(({ _id, value }) => (
                            <th className="thead__data" key={_id}>{value}</th>
                        ))
                    }
                </tr>
            </thead>
            <tbody className="tbody">
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

