
import PropTypes from 'prop-types';

const TableData = ({ data, idx, handleAddCookingRemoveData }) => {
    const {recipe_name, preparing_time, calories, recipe_id } = data;
    


    return (
        <div className="flex gap-5 text-sm items-center bg-white m-3 p-3 rounded-2xl">
            <p>{idx+ 1}.</p>
            <h2>{recipe_name}</h2>
            <p>{preparing_time}<span> minutes</span></p>
            <p>{calories} <span>calories</span></p>

            <button onClick={() => handleAddCookingRemoveData(data, recipe_id)} className="btn bg-green-400">Preparing</button>


        </div>
    );
};

TableData.propTypes ={
    data: PropTypes.object,
    idx: PropTypes.number,
    handleAddCookingRemoveData: PropTypes.func
}

export default TableData;