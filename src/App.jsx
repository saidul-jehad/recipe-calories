import { useState } from 'react'
import './App.css'
import Banner from './component/Header/Banner'
import Header from './component/Header/Header'
import Recipes from './component/Recipes/Recipes'

function App() {

  const [tableData, setTableData] = useState([]);
  const handleAddToTable = table => {
    const isExit = tableData.find(data => data.recipe_id === table.recipe_id)
    if (!isExit) {
      setTableData([...tableData, table])
    }

    else {
      return (
        <div className="toast">
          <div className="alert alert-info">
            <span>New message arrived.</span>
          </div>
        </div>
      )
    }
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
          ></Recipes>
        </div>
      </div>


    </>
  )
}

export default App
