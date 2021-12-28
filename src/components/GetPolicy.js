import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { getPolicyDetails } from "../store/action/PolicyAction";

function GetPolicy(){
    const policy = useSelector(state => state.PolicyReducer.policy);

    const {policyId} = useParams();

    const dispatch = useDispatch ();

    useEffect(()=> dispatch(getPolicyDetails(policyId)),[])

    return(
        <div>
            <h2>All Policies</h2>
               {
                   policy !== null ?
                    
               <table class="table table-bordered table-dark">
                 <thead>
                   <tr>
                     <th>Policy Id</th>
                     <th>Policy Name</th>
                     <th>Start Date</th>
                     <th>End Date</th>
                     <th>Term</th>
                     <th>Price</th>
                     <th>Created By</th>
                     
                   </tr>
                 </thead>
                 <tbody>
               
                   <tr>
                     <td>{policy.policyId}</td>
                     <td>{policy.policyName}</td>
                     <td>{policy.startDate}</td>
                     <td>{policy.endDate}</td>
                     <td>{policy.term}</td>
                     <td>{policy.price}</td>
                     <td>{policy.createdBy}</td>

                   </tr>
                   
                 </tbody>
               </table>
               : <h3>Loading....</h3>
                 }
        </div>
    )
}
export default GetPolicy;