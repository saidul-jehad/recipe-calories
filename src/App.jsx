import './App.css'
import Banner from './component/Header/Banner'
import Header from './component/Header/Header'
import Recipes from './component/Recipes/Recipes'

function App() {


  return (
    <>
      {/* Container */}
      <div className='max-w-screen-xl mx-auto w-[98%]'>
        <Header></Header>
        <Banner></Banner>

        <div>
          <Recipes></Recipes>
        </div>
      </div>
      
    
    </>
  )
}

export default App
