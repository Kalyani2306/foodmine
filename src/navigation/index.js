import {BrowserRouter, Route,Routes } from 'react-router-dom'
import { Header } from '../components/Header'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Cart from '../pages/Cart'
import Menu from '../pages/Menu'
import PaymentSucess from '../pages/PaymentSuccess'
import Register from '../pages/Register'
const Navigation =()=>{

return (
    <BrowserRouter>
    <Header/>
    <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/register" element={<Register/>}/>
<Route path="/menu" element={<Menu/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/cart" element={<Cart/>}/>
<Route path="/paymentsuccess" element={<PaymentSucess/>}/>
    </Routes>
    </BrowserRouter>)
}
export default Navigation