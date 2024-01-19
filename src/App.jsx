import Nav from './Nav'
import Home from './Home'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import About from './About'
import Error from './Error'
import Footer from './Footer'
import Login from './Login'
import Signup from './Signup'
import Reset from './Reset'
import Otp from './Otp';
import Product from './Product';
import { useState } from 'react'
import CartList from './CartList'
import Subsc from './Subsc'
import Slider from './Slider'
import Featuredpro from './Featuredpro';
import Contact from './Contact'

export default function App() {
const [cart, setcart] = useState([]);
  const addtoCart=(data)=>
  {
    
 setcart([...cart,data])

  }

  
  return (
   <>
<BrowserRouter>
<Nav cart={cart.length}/>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/Home' element={<Home/>}/>
<Route path='/About' element={<About/>}/>
<Route path='/Error' element={<Error/>}/>
<Route path='/Login' element={<Login/>}/>
<Route path='/Signup' element={<Signup/>}/>
<Route path='/Otp' element={<Otp/>}/>
<Route path='/Reset' element={<Reset/>}/>
<Route path='/Featuredpro' element={<Featuredpro/>}/>
<Route path='/Slider' element={<Slider/>}/>
<Route path='/Contact' element={<Contact/>}/>
<Route path='/CartList' element={<CartList cart={cart}/>}/>
<Route path='/product' element={<Product addtoCart={addtoCart}/>}/>

</Routes>
</BrowserRouter>

<Subsc/>
<Footer/>


   </>
  )
}
