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
import ProfileBar from "./components/ProfileBar";
import ProfileLayout from "./layouts/ProfileLayout";
import Personal from "./views/profile/Personal";
import Work from "./views/profile/Work";
import Documents from "./views/profile/Documents";
import Unavailability from "./views/profile/Unavailability";
import Account from "./components/Account";
import DashboardLayout from "./layouts/DashboardLayout";
//import GlobalLayout from "./layouts/GlobalLayout";
import CreateSchedule from "./views/CreateSchedule";
import MyRedux from "./components/MyRedux";
import MyToast from "./components/MyToast";
import MyCalendar from "./components/MyCalendar";
import Planner from "./components/Planner";
import Guard from "./components/Guard";
import MyModal from "./components/MyModal";
import Upload from "./components/Upload";

const AppRoutes = () => {
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<HomeLayout />}>               
                        {/* <Route path="/" element={<DashboardLayout />}/> */}

                        <Route path="/" element={<DashboardLayout />}> 
                        <Route index element={<Home/>} />
                        <Route path="/employees" element={<EmployeeTable />}/>
                        <Route path="/employees/create" element={<AddEmployee />}/>
                        <Route path="/positions" element={<PositionTable />}/>
                        <Route path="/positions/create" element={<AddPositionForm />}/>
                        <Route path="/locations" element={<LocationTable />}/>
                        <Route path="/locations/create" element={<AddLocation />}/>
                         </Route>  
                        <Route path="/navbox" element={<Navbox />}/>
                        <Route path="/schedule" element={<Schedule />}/>
                        <Route path="/timesheet" element={<Timesheet />}/>
                        <Route path="/reports" element={<Reports />}/>
                        <Route path="/tasks" element={<Tasks />}/>
                        {/* <Route path="/profile" element={<UserProfile />}/> */}
                        <Route path="/titlebar" element={<TitleBar />}/>
                        <Route path="/addnew" element={<AddNew />}/>
                        <Route path="/profilebar" element={<ProfileBar />}/>
                        <Route path="/account" element={<Account />}/>
                        <Route path="/modal" element={<MyModal />}/>
                        <Route path="/upload" element={<Upload />}/>
                        

                    <Route path="/profile" element={<Guard><ProfileLayout /></Guard>}>
                    <Route index element={<Personal />}/>  
                    <Route path="/profile/work" element={<Work />}/>
                    <Route path="/profile/documents" element={<Documents />}/>
                    <Route path="/profile/unavailability" element={<Unavailability />}/>
                    
                    </Route>
                    </Route>
                   
                    {/* Profile Routes */}

                    <Route path="/login" element={<Login />}/>
                    <Route path="/register" element={<Register />}/>
                    <Route path="/mynav" element={<MyNav />}/>
                    <Route path="/mynav2" element={<MyNav2 />}/>
                    <Route path="/schedule/create" element={<CreateSchedule/>}/>
                    <Route path="/myredux" element={<MyRedux/>}/>
                    <Route path="/tost" element={<MyToast/>}/>
                    <Route path="/calendar" element={<MyCalendar/>}/>
                    <Route path="/planner" element={<Planner/>}/>
                    <Route path="/guard" element={<Guard/>}/>
                    
                  
                </Routes>
            </BrowserRouter>
        </>
    );
}
export default AppRoutes;