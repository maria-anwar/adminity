import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";
import Home from "./views/Home";
import AddPosition from "./components/TitleBar";
import Schedule from "./views/Schedule";
import Timesheet from "./views/Timesheet";
import Reports from "./views/Reports";
import Tasks from "./views/Tasks";
import EmployeeTable from "./components/data-tables/EmployeeTable";
import AddEmployee from "./views/AddEmployee";
import AddPositionForm from "./views/AddPositionForm";
import AddLocation from "./views/AddLocation";
import Login from "./views/auth/Login";
import Register from "./views/auth/Register";
import PositionTable from "./components/data-tables/PositionTable";
import LocationTable from "./components/data-tables/LocationTable";
import Navbox from "./components/Navbox";
import UserProfile from "./views/UserProfile";
import MyNav from "./components/MyNav";
import MyNav2 from "./components/MyNav2";
import Table from "./components/Table";
import TitleBar from "./components/TitleBar";
import AddNew from "./components/AddNew";

const AppRoutes = () => {
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomeLayout />}>
                        <Route index element={<Home />}/>                       
                        <Route path="/navbox" element={<Navbox />}/>
                        <Route path="/schedule" element={<Schedule />}/>
                        <Route path="/employees" element={<EmployeeTable />}/>
                        <Route path="/timesheet" element={<Timesheet />}/>
                        <Route path="/reports" element={<Reports />}/>
                        <Route path="/tasks" element={<Tasks />}/>
                        <Route path="/position" element={<AddPosition />}/>
                        <Route path="/employee/create" element={<AddEmployee />}/>
                        <Route path="/position/create" element={<AddPositionForm />}/>
                        <Route path="/location/create" element={<AddLocation />}/>
                        <Route path="/positions" element={<PositionTable />}/>
                        <Route path="/locations" element={<LocationTable />}/>
                        <Route path="/profile" element={<UserProfile />}/>
                        <Route path="/titlebar" element={<TitleBar />}/>
                        <Route path="/addnew" element={<AddNew />}/>
                    </Route>
                    <Route path="/login" element={<Login />}/>
                    <Route path="/register" element={<Register />}/>
                    <Route path="/mynav" element={<MyNav />}/>
                    <Route path="/mynav2" element={<MyNav2 />}/>
                    <Route path="/table" element={<Table />}/>
                    
                </Routes>
            </BrowserRouter>
        </>
    );
}
export default AppRoutes;