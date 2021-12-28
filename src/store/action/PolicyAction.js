//action creators
import axios from 'axios';

export function getAll(){
    return (dispatch) => {
    return axios.get('http://localhost:8080/healthinsurance-policy/policy/all')
    .then (resp=> {
        dispatch(getAllSuccess(resp.data))
    })
    .catch(error =>{
        throw(error);
    })

}
}
export function getAllSuccess (data){
    return{
        type : "GET_POLICIES_SUCCESS",
        payload : data
    }

}
export function getPolicyDetails(policyId){
    return (dispatch)=>{
        return axios.get("http://localhost:8080/healthinsurance-policy/policy/"+policyId)
        .then (resp=>{
            dispatch(getPolicySuccess(resp.data))
        })
        .catch(error=>{
            throw(error);
        });
    }
}
export function getPolicySuccess(data){
    return{
        type: "POLICY_SUCCESS",
        payload: data
    }
}