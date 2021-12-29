import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


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

                    <table class="table table-bordered table-dark">
                        <thead>
                            <tr>
                                <th>policyHolder Id</th>
                                <th>holderName</th>
                                <th>premiumType </th>
                                <th>annualIncome </th>
                                <th>startDate</th>
                                <th>End Date</th>
                                <th>Amount</th>
                                <th>PaymentDate</th>
                                <th>RenewPolicy</th>
                          
                               
                            </tr>
                        </thead>
                        <tbody>
                            {policyHolder.map(p =>
                                <tr>
                                    <td>{p.policyHolderId}</td>
                                    <td>{p.holderName}</td>
                                    <td>{p.premiumType}</td>
                                    <td>{p.annualIncome}</td>
                                    <td>{p.startDate}</td>
                                    <td>{p.endDate}</td>
                                    <td>{p.amount}</td>
                                    <td>{p.paymentDate}</td>     
                                    {/* <td><Link to={`/policyHolder/GetPolicyHolder/${p.policyHolderId}`}>Renew</Link></td> */}
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