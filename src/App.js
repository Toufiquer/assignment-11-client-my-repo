import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavbarMenu from "./component/Header/NavbarMenu/NavbarMenu";
import Home from "./component/page/Home/Home";

import "react-toastify/dist/ReactToastify.css";
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
import RequireAuth from "./component/othersFile/RequireAuth";
import { ToastContainer } from "react-toastify";
import ManageInventory from "./component/page/ManageInventory/ManageInventory";
import UpdateQuantity from "./component/page/UpdateQuantity/UpdateQuantity";
function App() {
    return (
        <div className="App">
            <NavbarMenu></NavbarMenu>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/home" element={<Home></Home>}></Route>

                <Route
                    path="/add"
                    element={
                        <RequireAuth>
                            <AddItem></AddItem>
                        </RequireAuth>
                    }
                ></Route>
                <Route
                    path="/myItem"
                    element={
                        <RequireAuth>
                            <MyItem></MyItem>
                        </RequireAuth>
                    }
                ></Route>
                <Route
                    path="/inventory"
                    element={
                        <RequireAuth>
                            <Inventory></Inventory>
                        </RequireAuth>
                    }
                ></Route>
                <Route
                    path="/manageInventory"
                    element={
                        <RequireAuth>
                            <ManageInventory></ManageInventory>
                        </RequireAuth>
                    }
                ></Route>
                <Route
                    path="/inventory/update/:id"
                    element={
                        <RequireAuth>
                            <UpdateItem></UpdateItem>
                        </RequireAuth>
                    }
                ></Route>
                <Route
                    path="/inventory/:id"
                    element={
                        <RequireAuth>
                            <UpdateQuantity></UpdateQuantity>
                        </RequireAuth>
                    }
                ></Route>
                <Route path="/blogs" element={<Blogs></Blogs>}></Route>
                <Route path="/logIn" element={<LogIn></LogIn>}></Route>
                <Route path="*" element={<NotFound></NotFound>}></Route>
            </Routes>
            <Footer></Footer>
            <ToastContainer />
        </div>
    );
}

export default App;
