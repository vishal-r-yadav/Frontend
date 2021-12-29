import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ViewPolicyHolder.css';


function ViewPolicyHolder() {

    const [policyHolder, setPolicyholder] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/healthinsurance/policyholder/all").then(resp => setPolicyholder(resp.data));
    }, [])

    return (
        <div>
            <h2 className='heading'>All PolicyHolder Details</h2>
            {
                policyHolder.length > 0 ?

                    <table  class="table table-bordered">
                        <thead class = "thead-light">
                            <tr>
                                <th> Id</th>
                                <th> Name</th>
                                <th>Premium Type </th>
                                <th>Annual Income </th>
                                <th>Start Date</th>
                                <th>End Date</th>
                                <th>Amount</th>
                                <th>Payment Date</th>
                                <th>Renew Policy</th>
                          
                               
                            </tr>
                        </thead>
                        <tbody class ="table ">
                            {policyHolder.map(p =>
                                <tr>
                                    <td>{p.policyHolderId}</td>
                                    <td>{p.holderName}</td>
                                    <td>{p.premiumType}</td>
                                    <td>{p.annualIncome}</td>
                                    <td>{p.startDate}</td>
                                    <td>{p.endDate}</td>
                                    <td>{p.transactionDetails.amount}</td>
                                    <td>{p.transactionDetails.paymentDate}</td>     
                                    <td><Link to={`/policyHolder/GetPolicyHolder/${p.policyHolderId}`}>Renew</Link></td>
                                    {/* <td><Link to={`/policy/Transaction/${p.transactionId}`}>Payment</Link></td> */}
                                </tr>
                            )}
                        </tbody>
                    </table>
                    : <h3><div class="spinner-border"></div></h3>
            }
        </div>
    )
}
export default ViewPolicyHolder;