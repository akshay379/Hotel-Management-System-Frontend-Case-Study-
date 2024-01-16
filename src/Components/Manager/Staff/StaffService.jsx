import axios from 'axios';

const Staff_API_URL="http://localhost:8088/staff/getAllEmp";
const  Staff_GetById_API_URL="http://localhost:8088/staff/getByEmp";
const  Staff_Delete_API_URL="http://localhost:8088/staff/deleteByEmp";


class StaffService{
    getStaff(){
        return axios.get(Staff_API_URL);
    }

   
   
    getStaffById(empId){
        return axios.get(Staff_GetById_API_URL+ '/' + empId);
    }
    

   

    deleteStaff(empId){
        return axios.delete(Staff_Delete_API_URL + '/' +empId);
    }

}

export default new StaffService ()