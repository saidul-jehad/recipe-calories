import { useState } from 'react'
import './App.css'
import Banner from './component/Header/Banner'
import Header from './component/Header/Header'
import Recipes from './component/Recipes/Recipes'

// import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { data } from 'autoprefixer'

function App() {

  const [tableData, setTableData] = useState([]);
  const [cookingData, setCookingData] = useState([])


  const handleAddToTable = table => {
    const isExit = tableData.find(data => data.recipe_id === table.recipe_id)
    if (!isExit) {
      setTableData([...tableData, table])
    }
    else {
      toast('Already Exist')
    }
  }


  const handleAddCookingRemoveData = (cooking, recipe_id) => {
    const newCookingData = [...cookingData, cooking]
    // console.log(newCookingData);
    setCookingData(newCookingData)

    setTableData(tableData.filter(data => data.recipe_id !== recipe_id));

  }

  // console.log(tableData);

  return (
    <>
      {/* Container */}
      <div className='max-w-screen-xl mx-auto w-[98%]'>
        <Header></Header>
        <Banner></Banner>

        <div>
          <Recipes handleAddToTable={handleAddToTable}
            tableData={tableData}
            handleAddCookingRemoveData={handleAddCookingRemoveData}
            cookingData={cookingData}
          ></Recipes>
        </div>
        <ToastContainer />
      </div>


    </>
  )
}

export default App
