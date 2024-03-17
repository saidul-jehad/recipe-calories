

const TableData = ({ data, idx }) => {
    const {recipe_name, preparing_time, calories } = data;
    



    return (
        <div className="flex gap-3">
            <p>{idx+ 1}</p>
            <h2>{recipe_name}</h2>
            <p>{preparing_time}<span> minutes</span></p>
            <p>{calories}</p>


        </div>


    );
};

export default TableData;