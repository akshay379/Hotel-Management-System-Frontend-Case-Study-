
import axios from 'axios';

const  Inv_API_URL="http://localhost:8087/Inventary/getAllInv";
const  Inv_GetById_API_URL="http://localhost:8087/Inventary/getByInv";
const   Inv_Delete_API_URL="http://localhost:8087/Inventary/delete";
const Inv_Add_API_URL="http://localhost:8087/Inventary/addInv";

class InventoryService{
    getInv(){
        return axios.get( Inv_API_URL);
    }

   
    addInv(inventary){
        return axios.post(Inv_Add_API_URL,inventary);
    }
   
    getInvById(InvId){
        return axios.get(Inv_GetById_API_URL+ '/' + InvId);
    }


    deleteInv(InvId){
        return axios.delete( Inv_Delete_API_URL + '/' +InvId);
    }

}

export default new InventoryService ()