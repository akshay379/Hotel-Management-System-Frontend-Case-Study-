import React, { Component } from 'react'
import './AddInventory.css'

import InventoryService from './InventoryService'

 class AddInventory extends Component {
  
    constructor(props){
        super(props)

        this.state={
              inventaryId: '',
            inventaryName:'',
           inventaryStock:'',
            inventaryType:''
        }
        this.changeIdHandler = this.changeIdHandler.bind(this);
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeStockHandler = this.changeStockHandler.bind(this);
        this.changeTypeHandler = this.changeTypeHandler.bind(this);
    }

    saveOrUpdateInventary= (event) => {
        event.preventDefault();
        let inventary = {inventaryId:parseInt(this.state.inventaryId), inventaryName:this.state.inventaryName  ,inventaryStock:parseInt(this.state.inventaryStock) ,inventaryType:this.state.inventaryType};
        console.log('inventary => ' + JSON.stringify(inventary));

       InventoryService.addInv(inventary).then(res =>{
            this.props.history.push('/manager/inventory');
        });

    }

    changeIdHandler= (event) => {
        this.setState({inventaryId: event.target.value});
    }

    changeNameHandler=(event) => {
        this.setState({inventaryName: event.target.value});
    }

    changeStockHandler=(event) => {
        this.setState({inventaryStock: event.target.value});
    }
    
    changeTypeHandler=(event) => {
        this.setState({inventaryType: event.target.value});
    }

    cancel(){
        this.props.history.push('/manager/inventory');
    }

    

    render() {
        return (
            <div className='add'>
                <br/><br/><br/><br/><br/><br/><br/><br/>
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-5 offset-md-3 offset-md-3 border-dark'>  <br/>
                            <h3 className='text-center bg-success'>Add Inventory</h3>
                            <div className='card-body '>


                                <form action="">
                                        <div className = "form-group">
                                            <label>Inventory Id: </label>
                                            <input  name="inventaryId" className="form-control" 
                                                value={this.state.inventaryId} onChange={this.changeIdHandler}/>
                                        </div>
                                        <br/>

                                        <div className = "form-group">
                                            <label> Inventory Name: </label>
                                            <input name="inventaryName" className="form-control" 
                                                value={this.state.inventaryName} onChange={this.changeNameHandler}/>
                                        </div>  <br/>
                                        <div className = "form-group">
                                            <label> Inventory Stock: </label>
                                            <input name="inventaryStock" className="form-control" 
                                                value={this.state.inventaryStock} onChange={this.changeStockHandler}/>
                                        </div>  <br/>
                                        <div className = "form-group">
                                            <label>Inventory Type: </label>
                                            <input name="inventaryType" className="form-control" 
                                                value={this.state.inventaryType} onChange={this.changeTypeHandler}/>
                                        </div>
<br/>
                                        <button className="btn btn-outline-success" onClick={this.saveOrUpdateInventary}>Save</button>
                                        <button className="btn btn-outline-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                </form>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default AddInventory