import { data } from "autoprefixer";
import { useEffect } from "react";
import { useState } from "react"
import Recipe from "../Recipe/Recipe";


const Recipes = () => {

    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        fetch('recipes.json')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, [])







    return (
        <>
            <div className="lg:w-[820px] mx-auto text-center space-y-4">
                <h2 className="text-4xl font-semibold">Our Recipes</h2>
                <p className="text-[16px]">Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. </p>
            </div>

            {/* Card container */}
            <div className="flex flex-col lg:flex-row mt-12">
                {/*recipes  */}
                <div className="lg:w-4/6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {
                        recipes.map(recipe => <Recipe
                            key={recipe.recipe_id}
                            recipe={recipe}
                        ></Recipe>)
                    }
                </div>

                {/* details */}
                <div className="lg:w-1/3">
                    <h2>Show Details</h2>
                </div>
            </div>


        </>
    );
};

export default Recipes;