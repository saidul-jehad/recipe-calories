import TableData from "../TableData/TableData";
import PropTypes from 'prop-types';
import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Table = ({ tableData }) => {
    const [recipe_name] = tableData

    // console.log(tableData);

    return (
        <div className="bg-slate-100 p-8 rounded-xl">
            <h2 className="text-2xl font-semibold text-center border-b-2 mb-5 pb-4">Want to cook : <span>{tableData.length}</span></h2>
            <table>
                <thead className="text-lg">
                    <tr className="ml-3 flex gap-10">
                        <th className="text-lg font-normal">Name</th>
                        <th className="text-lg font-normal">Time</th>
                        <th className="text-lg font-normal">Calories</th>
                    </tr>
                </thead>
            </table>

            <div>
                {
                    tableData.map((data, idx) => <TableData key={idx}
                        data={data}
                        idx={idx}
                    ></TableData>)
                }
            </div>

        </div>
    );
};

Table.propTypes = {
    tableData: PropTypes.array
}

export default Table;