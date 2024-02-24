import Nav from "./Components/Navbar/Nav"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Shop from "./Pages/Shop"

import Product from "./Pages/Product"
import LoginSignup from "./Pages/LoginSignup"
import Cart from "./Pages/Cart"
import Footers from "./Components/Footers/Footers"
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'
import ShopCategory from "./Pages/ShopCategory"






const App=()=>{
    return(
        <div>
          <BrowserRouter>
          <Nav/>
          <Routes>
            <Route path='/' element={<Shop/>}/>
              <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"/>}/>
              <Route path='/womens' element={<ShopCategory banner={women_banner} category="women"/>}/>
              <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid"/>}/>
              <Route path='/product' element={<Product/>}/>
              <Route path='/productId' element={<Product/>}/>
            
              <Route path='/cart' element={<Cart/>}/>
              <Route path='/login' element={<LoginSignup/>}/>
            
          </Routes>
          <Footers/>
          <ShopCategory/>
          <Product/>
         
          </BrowserRouter>

        </div>
    )
}
export default App