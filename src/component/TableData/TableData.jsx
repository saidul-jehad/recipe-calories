

const TableData = ({ data, idx }) => {
    const {recipe_name, preparing_time, calories } = data;
    



    return (
        <div className="flex gap-5 text-sm items-center bg-white m-3 p-3 rounded-2xl">
            <p>{idx+ 1}.</p>
            <h2>{recipe_name}</h2>
            <p>{preparing_time}<span> minutes</span></p>
            <p>{calories} <span>calories</span></p>

            <button className="btn bg-green-400 rounded-full">Preparing</button>


        </div>


    );
};

export default TableData;