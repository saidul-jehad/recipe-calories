// import { data } from "autoprefixer";
import { useEffect } from "react";
import { useState } from "react"
import Recipe from "../Recipe/Recipe";
import Table from "../Table/Table";
import PropTypes from 'prop-types';


const Recipes = ({handleAddToTable, tableData}) => {

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
            <div className="flex flex-col lg:flex-row mt-12 gap-6">
                {/*recipes  */}
                <div className="lg:w-4/6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {
                        recipes.map(recipe => <Recipe
                            key={recipe.recipe_id}
                            recipe={recipe}
                            handleAddToTable={handleAddToTable}
                        ></Recipe>)
                    }
                </div>

                {/* details */}
                <div className="lg:w-1/3">
                    <Table tableData={tableData}></Table>
                </div>
            </div>


        </>
    );
};

Recipes.propTypes ={
    handleAddToTable : PropTypes.func,
    tableData: PropTypes.array
}


export default Recipes;