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
                    </Route>
                    <Route path="/login" element={<Login />}/>
                    <Route path="/register" element={<Register />}/>
                    
                </Routes>
            </BrowserRouter>
        </>
    );
}
export default AppRoutes;