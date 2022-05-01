import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavbarMenu from "./component/Header/NavbarMenu/NavbarMenu";
import Home from "./component/page/Home/Home";

import "bootstrap/dist/css/bootstrap.min.css";
import NotFound from "./component/page/NotFound/NotFound";
import Inventory from "./component/page/Inventory/Inventory";
import AddItem from "./component/page/AddItem/AddItem";
import Footer from "./component/Footer/Footer";
import Blogs from "./component/page/Blogs/Blogs";
import LogIn from "./component/page/LogIn/LogIn";
import UpdateItem from "./component/page/UpdateItem/UpdateItem";
import Order from "./component/page/Order/Order";
import MyItem from "./component/page/MyItem/MyItem";
function App() {
    return (
        <div className="App">
            <NavbarMenu></NavbarMenu>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/home" element={<Home></Home>}></Route>
                <Route path="/add" element={<AddItem></AddItem>}></Route>
                <Route path="/myItem" element={<MyItem></MyItem>}></Route>
                <Route
                    path="/inventory"
                    element={<Inventory></Inventory>}
                ></Route>
                <Route
                    path="/inventory/order/:id"
                    element={<Order></Order>}
                ></Route>
                <Route
                    path="/inventory/update/:id"
                    element={<UpdateItem></UpdateItem>}
                ></Route>
                <Route path="/blogs" element={<Blogs></Blogs>}></Route>
                <Route path="/logIn" element={<LogIn></LogIn>}></Route>
                <Route path="*" element={<NotFound></NotFound>}></Route>
            </Routes>
            <Footer></Footer>
        </div>
    );
}

export default App;
