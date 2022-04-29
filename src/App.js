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
function App() {
    return (
        <div className="App">
            <NavbarMenu></NavbarMenu>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/home" element={<Home></Home>}></Route>
                <Route
                    path="/Inventory"
                    element={<Inventory></Inventory>}
                ></Route>
                <Route path="/addItem" element={<AddItem></AddItem>}></Route>
                <Route path="/blogs" element={<Blogs></Blogs>}></Route>
                <Route path="*" element={<NotFound></NotFound>}></Route>
            </Routes>
            <Footer></Footer>
        </div>
    );
}

export default App;
