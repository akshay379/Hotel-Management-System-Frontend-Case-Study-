import { BorderOuterOutlined } from '@mui/icons-material';
import React, { Component } from 'react'
import DepartmentService from './Service/DepartmentService'
import "./Listdept.css";
import OwnerSidebarComponent from '../HomePage/OwnerSidebarComponent'


export default class Listdept extends Component {
    constructor(props){
        super(props)

        this.state= {
            departments: []
        }

        this.addDepartment = this.addDepartment.bind(this);
        this.editDepartment = this.editDepartment.bind(this);
        this.deleteDepartment=this.deleteDepartment.bind(this);
    }

    componentDidMount(){
        DepartmentService.getDepartment().then((res)=>{
           this.setState({departments:res.data.alldept});
             
        });
    }
    addDepartment(){
        this.props.history.push('/add-department');
    
}
editDepartment(Id){
    this.props.history.push(`/update-department/${Id}`);
}

deleteDepartment(Id){
   DepartmentService.deleteDepartment(Id).then( res => {
        this.setState({departments: this.state.departments.filter(department => department.departmentID !== Id)});
    });
    }


    render() {
        return (
            <div className='department'>
<br/><br/>
                <OwnerSidebarComponent/>
                {/* <div className="department__image">

<img src="https://www.targetdashboard.com/site/imagesC/Banner_1.png"/>
</div> */}
                <div className='content'>                 
                    <br/>
                    <h1  >Department Details</h1>
                    <div><br/>
                        <button className='btn btn-outline-success' onClick={this.addDepartment}>Add Department</button>
                    </div>
                    <br />
                    <div class="table-responsive-lg">
                    <div className="row">
                        <table className="table table-hover table-bordered ">
                            <thead className=' table_header '>
                                <tr>
                                    <th>Department id</th>
                                    <th>Department Name</th>
                                    <th>Department Description</th>
                                    <th>Number of Emp</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    this.state.departments.map(
                                        department => 
                                        <tr key={department.departmentID}>
                                            <td>{department.departmentID}</td>
                                            <td>{department.departmentName}</td>
                                            <td>{department.desc}</td>
                                            <td>{department.no_of_Emp}</td>
                                            <td>
                                                 <button onClick={ () => this.editDepartment(department.departmentID)} className="btn btn-outline-primary">Update </button>
                                                <button style={{marginLeft: "10px"}}onClick={ () => this.deleteDepartment(department.departmentID)} className="btn btn-outline-danger">Delete </button>
                                               
                                                </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>

                </div>

          
               <div className="reports__footer">
               <span>Owner's Dashboard © 2022 !</span>
               </div>
               </div>
            </div>
        )
    }
}
