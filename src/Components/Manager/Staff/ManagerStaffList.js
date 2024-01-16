

import React, { Component } from 'react'
import StaffService from './StaffService';
import "./ManagerStaffList.css";
import  ManagerSidebar from '../HomePage/ManagerSidebar'



export default class ManagerStaffList extends Component {
    constructor(props){
        super(props)

        this.state= {
            staffs: []
        }

       
       
        this.deleteStaff=this.deleteStaff.bind(this);
    }

    componentDidMount(){
       StaffService.getStaff().then((res)=>{
           this.setState({staffs:res.data.allEmp});
             
        });
    }

    deleteStaff(Id){
        StaffService.deleteStaff(Id).then( res => {
             this.setState({staffs: this.state.staffs.filter(staff => staff.empId !== Id)});
         });
         }


         
    render() {
        return (
            <div className='staff'>
<br/><br/>
                <ManagerSidebar/>
                <div className='content'>
                        
                        <br/>
                <h1>Staff Details</h1>
                   
                    <br />
                    <div className="row">
                        <table className="table table-hover table-bordered">
                            <thead className='table_header'>
                                <tr>
                                    <th>Staff Id</th>
                                    <th>Staff DepartmentId</th>
                                    <th>Staff Name</th>
                                    <th>Staff DepartmentName</th>
                                    <th>Staff Email</th>
                                    <th>Staff Salary</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>


                            <tbody>
                                {
                                    this.state.staffs.map(
                                        staff => 
                                        <tr key={staff.empId}>
                                             <td>{staff.empId}</td>
                                            <td>{staff.empDeptId}</td>
                                            <td>{staff.empName}</td>
                                            <td>{staff.empDeptName}</td>
                                            <td>{staff.email}</td>
                                            <td>{staff.empSalary}</td>
                                            <td>
                                                 
                                                <button style={{marginLeft: "10px"}}onClick={ () => this.deleteStaff(staff.empId)} className="btn btn-outline-danger">Delete </button>
                                               
                                                </td>
                                        </tr>
                                    )
                                }
                            </tbody>


                        </table>
                    </div>

                </div>
                <br/>
                
                <div className="reports__footer">
               <span>Manager's Dashboard © 2022 !</span>
               </div>
            </div>
            
        )
    }
}