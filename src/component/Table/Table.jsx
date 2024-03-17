import CookingData from "../CookingData/CookingData";
import TableData from "../TableData/TableData";
import PropTypes from 'prop-types';


const Table = ({ tableData, handleAddCookingRemoveData, cookingData }) => {

    // console.log(tableData);

    return (
        <>
            <div className="bg-slate-100 p-8 rounded-xl">
                <h2 className="text-2xl font-semibold text-center border-b-2 mb-5 pb-4">Want to cook : <span>{tableData.length}</span></h2>
                <table>
                    <thead className="text-lg">
                        <tr className="ml-10 flex gap-10">
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
                            handleAddCookingRemoveData={handleAddCookingRemoveData}
                        ></TableData>)
                    }
                </div>

                {/* Currently Cooking */}
                <div>
                    <h2 className="text-2xl font-semibold text-center border-b-2 mb-5 pb-4 mt-7">Currently Cooking : <span>{cookingData.length}</span></h2>
                    <table>
                        <thead className="text-lg">
                            <tr className="ml-10 flex gap-10">
                                <th className="text-lg font-normal">Name</th>
                                <th className="text-lg font-normal">Time</th>
                                <th className="text-lg font-normal">Calories</th>
                            </tr>
                        </thead>
                    </table>

                    <div>
                        {
                            cookingData.map((data, idx) => <CookingData
                                key={data}
                                data={data}
                                idx={idx}
                            > </CookingData>)
                        }
                    </div>
                </div>
            </div>

        </>
    );
};

Table.propTypes = {
    tableData: PropTypes.array,
    handleAddCookingRemoveData: PropTypes.func,
    cookingData: PropTypes.array

}

export default Table;