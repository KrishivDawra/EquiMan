import About from "./About"
import Body from "./components/Body"

import { BrowserRouter,Route, Routes } from "react-router-dom"
import LegalGPT from "./LegalGPT"
import Blogs from "./Blogs"
import LegalAID from "./LegalAID"
import AuthPage from "./login"

function App() {

  return (
    <>
    <div className="px-0 py-0 bg-black ">
      <BrowserRouter>
        
        <Routes>
            <Route path='/' element={<Body/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/legalGPT' element={<LegalGPT/>}></Route>
            <Route path='/blogs' element={<Blogs/>}></Route>
            <Route path='/legalAID' element={<LegalAID/>}></Route>
            <Route path='/connect_us' element={<AuthPage/>}></Route>

            <Route path="*" element={<div>Error 404 found</div>}></Route>
        </Routes>
        
        
      </BrowserRouter>
    </div>
      
    </>
  )
}

export default App
