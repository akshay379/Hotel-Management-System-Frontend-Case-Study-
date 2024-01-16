
import './App.css';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import Listdept from './Components/Owner/Department/Listdept';
import AddDepartmentComponent from './Components/Owner/Department/AddDepartmentComponent';
import UpdateDepartmentComponent from './Components//Owner/Department/UpdateDepartmentComponent';
import Home from './Components/MainHomePage/Home'
import StaffList from './Components/Owner/Department/StaffList';
import Login from './Components//MainHomePage/Login';
import RoomList from './Components/Owner/Department/RoomList';
// import Navbar from './Components/MainHomePage/Navbar';
import ReportComponents from './Components/Owner/Department/ReportsComponent'
import OwnerHome from './Components/Owner/HomePage/OwnerHome';
import AddReservation from './Components/Receptionist/Reservation/AddReservation';
import ReservationList from './Components/Receptionist/Reservation/ReservationList';
import ReceptionistRoom from './Components/Receptionist/ReceptionistRoom/ReceptionistRoom';
import SignUp from './Components/MainHomePage/SignUp';
import Checkout from './Components/Receptionist/Reservation/Checkout';
import LoginReceptionist from './Components/MainHomePage/LoginReceptionist'
import Hero from './Components/MainHomePage/Hero';
import ReceptionistHomePage from './Components/Receptionist/HomePage/ReceptionistHomePage';
import Header from './Components/MainHomePage/Header';
import Success from './Components/Receptionist/Reservation/Success';
import ManagerHomePage from './Components/Manager/HomePage/ManagerHomePage';
import ManagerRoomList from './Components/Manager/Room/ManagerRoomList';
import ManagerStaffList from './Components/Manager/Staff/ManagerStaffList';
import InventoryList from './Components/Manager/Inventory/InventoryList';
import AddInventory from './Components/Manager/Inventory/AddInventory';



 function App () {
  
  

  
  return (
    <div>
       <Router>           
        
          <Header/>
              <Switch> 
               
                     {/* Main Home Page*/}
                <Route path="/" exact component={Home}/>

                     {/* Owner Home Page  */}
                  <Route path="/owner" exact component={OwnerHome}/>
                  <Route exact path="/owner/department" component={Listdept} />
                  <Route exact path = "/add-department" component = {AddDepartmentComponent}></Route>
                  <Route  exact path="/update-department/:Id" component={UpdateDepartmentComponent} />
                  <Route  exact path="/update-department/:Id" component={UpdateDepartmentComponent} />
                  <Route exact path="/owner/staff" component={StaffList} />
                  <Route exact path="/owner/report" component={ReportComponents} />
                  <Route exact path="/owner/room" component={RoomList} />
                   


                     {/* Receptionist Home Page  */}
                       <Route path="/receptionist" exact component={ReceptionistHomePage}/>
                      <Route exact path="/receptionist/room" component={ReceptionistRoom} />                    
                      <Route exact path = "/receptionist/reservation" component = {ReservationList}></Route>
                      <Route exact path = "/receptionist/reservation/checkout" component = {Checkout}></Route>
                      <Route exact path="/receptionist-success" component={Success} />
                        <Route exact path = "/add-reservation" component = {AddReservation}></Route>

                     
                     {/*Manager Home Page */}
                     <Route path="/manager" exact component={ManagerHomePage}/>
                      <Route exact path="/manager/room" component={ManagerRoomList} />                    
                      <Route exact path = "/manager/staff" component = {ManagerStaffList}></Route>
                      <Route exact path = "/manager/inventory" component = {InventoryList}></Route>
                      <Route exact path = "/add-inventory" component = {AddInventory}></Route>




                     {/* Login Page*/}
                     <Route exact path="/login-receptionist" component={LoginReceptionist} />
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/sign-up" component={SignUp} />
                  <Route exact path="/about" component={Hero} />
                 
              </Switch>
        
            
        </Router> 
    </div>
    
    
  );
  }

export default App;
