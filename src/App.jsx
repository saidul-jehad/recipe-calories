import './App.css'
import Banner from './component/Header/Banner'
import Header from './component/Header/Header'

function App() {


  return (
    <>
      {/* Container */}
      <div className='max-w-screen-xl mx-auto w-[98%]'>
        <Header></Header>
        <Banner></Banner>
      </div>
      
    
    </>
  )
}

export default App
