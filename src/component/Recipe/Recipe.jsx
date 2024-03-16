const PropTypes = ('prop-types')
const Recipe = ({ recipe }) => {
    const { recipe_image, recipe_name, recipe_id, short_description, ingredients, preparing_time, calories } = recipe;


    return (
        <div className="bg-slate-100 p-6 rounded-xl border drop-shadow-lg fira-sans ">
            <div>
                <img className="mb-6 font-lexend rounded-2xl" src={recipe_image} alt="" />
                <h3 className='text-lg font-semibold mb-4'>{recipe_name}</h3>
                <p className='text-[16px]'>{short_description}</p>
            </div>

            <div>
                <h2 className='font-medium text-lg font-lexend mb-4'>Ingredients : 6</h2>
                <ul className="pl-6 text-sm">
                    <li className="list-disc">{ingredients[0]}</li>
                    <li className="list-disc">{ingredients[1]}</li>
                    <li className="list-disc">{ingredients[2]}</li>
                </ul>
            </div>
        </div>
    );
};



Recipe.propTypes = {
    recipe: PropTypes.object
}
export default Recipe;