import React, { Component } from 'react'
import InventoryService from './InventoryService';
import "./InventoryList.css";
import ManagerSidebar from '../HomePage/ManagerSidebar';



export default class InventoryList extends Component {
    constructor(props){
        super(props)

        this.state= {
            Invs: []
        }

       
        this.addInv= this.addInv.bind(this);
        this.deleteInv=this.deleteInv.bind(this);
    }

    componentDidMount(){
       InventoryService.getInv().then((res)=>{
           this.setState({Invs:res.data.allInv});
             
        });
      
    }
    addInv(){
        this.props.history.push('/add-inventory');
    
}
deleteInv(Id){
    InventoryService.deleteInv(Id).then( res => {
         this.setState({Invs: this.state.Invs.filter(Inv => Inv.inventaryId !== Id)});
     });
     }


         
    render() {
        return (
            <div className='room'>
                <br/><br/>
<ManagerSidebar/>
                <div className='content'>
                    <br/>
                <h1>Inventory Details</h1>
                <div><br/>
                        <button className='btn btn-outline-success' onClick={this.addInv}>Add Inventory</button>
                    </div>
                   
                   <br/>
                    <div className="row">
                        <table className="table table-hover table-bordered">
                            <thead className='table_header'>
                                <tr>
                                    <th>Inventory Id</th>
                                    <th>Inventory Name</th>
                                    <th>Inventory Stock</th>
                                    <th>Inventory Type</th>
                                    <th>Actions</th>
                                     {/* <th>Room Available</th> */}
                                </tr>
                            </thead>


                            <tbody>
                                {
                                    this.state.Invs.map(
                                        Inv => 
                                        <tr key={Inv.inventaryId}>
                                              <td>{Inv.inventaryId}</td>
                                             <td>{Inv.inventaryName}</td>
                                            <td>{Inv.inventaryStock}</td>
                                            <td>{Inv.inventaryType}</td>
                                                                                                         
                                            <td>
                                                 
                                                <button style={{marginLeft: "10px"}}onClick={ () => this.deleteInv(Inv.inventoryId)} className="btn btn-outline-danger">Delete </button>
                                               
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