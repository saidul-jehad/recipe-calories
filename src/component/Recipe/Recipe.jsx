import PropTypes from 'prop-types';
const Recipe = ({ recipe, handleAddToTable }) => {
    const { recipe_image, recipe_name, short_description, ingredients, preparing_time, calories } = recipe;


    return (
        <div className="bg-slate-100 p-6 rounded-xl border drop-shadow-lg fira-sans ">
            <div>
                <img className="mb-6 font-lexend rounded-2xl" src={recipe_image} alt="" />
                <h3 className='text-lg font-semibold mb-4'>{recipe_name}</h3>
                <p className='text-[16px]'>{short_description}</p>
            </div>

            <div className="border-y-2 py-3 mt-4">
                <h2 className='font-medium text-lg font-lexend mb-4'>Ingredients : 6</h2>
                <ul className="pl-6 text-sm space-y-2">
                    <li className="list-disc">{ingredients[0]}</li>
                    <li className="list-disc">{ingredients[1]}</li>
                    <li className="list-disc">{ingredients[2]}</li>
                </ul>
            </div>

            <div className="flex gap-3 my-6">
                <div className="flex items-center gap-2 text-sm">
                    <i className="fa-regular fa-clock"></i>
                    <p><span>{preparing_time}</span> minutes</p>
                </div>
                <div className="flex items-center gap-2 text-sm">
                    <i className="fa-solid fa-fire"></i>
                    <p><span>{calories}</span> calories</p>
                </div>
            </div>

            <button onClick={() =>handleAddToTable(recipe)} className="btn text-lg font-medium  bg-green-500 px-6">Want to Cook</button>
        </div>
    );
};



Recipe.propTypes = {
    recipe: PropTypes.object,
    handleAddToTable: PropTypes.func
}
export default Recipe;