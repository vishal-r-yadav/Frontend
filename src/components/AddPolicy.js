import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AddPolicy.css';

function AddPolicy() {

    const [policies, setPolicies] = useState({
        //this values can be anything
        policyName: '',
        startDate: '',
        endDate: '',
        term: '',
        price: '',
        createdBy: ''


    })

    const handleChange = (event) => {
        setPolicies(policies => ({ ...policies, [event.target.name]: event.target.value }));
    }
    const handlesubmit = (event) => {
        const payload = {
            policyName: policies.policyName,
            startDate: policies.startDate,
            endDate: policies.endDate,
            term: policies.term,
            price: policies.price,
            createdBy: policies.createdBy
        }

        axios.post("http://localhost:8080/healthinsurance-policy/createpolicy", payload).then(resp =>
            alert("User saved with id" + resp.data.policyId));
    }


    return (
        <>
        <h1>Add Policy</h1>
        <div className="addpolicy-container">
            <form action="/action_page.php">
                <div class="row">
                    <div class="col-25">
                        <label>Enter Policy Name</label>
                    </div>
                    <div class="col-75">
                        <input type="text" name="policyName" id="policyName" onChange={handleChange} value={policies.policyName} />
                    </div>
                </div>
                <div class="row">
                    <div class="col-25">
                        <label>Enter Policy Effective Date</label>
                    </div>
                    <div class="col-75">
                        <input type="date" name="startDate" id="startDate" onChange={handleChange} value={policies.startDate} />
                    </div>
                </div>
                <div class="row">
                    <div class="col-25">
                        <label>Enter Policy End date</label>
                    </div>
                    <div class="col-75">
                        <input type="date" name="endDate" id="endDate" onChange={handleChange} value={policies.endDate} />
                    </div>
                </div>
                <div class="row">
                    <div class="col-25">
                        <label>Enter Policy Tenure</label>
                    </div>
                    <div class="col-75">
                        <input type="text" name="term" id="term" onChange={handleChange} value={policies.term} />
                    </div>
                </div>

                <div class="row">
                    <div class="col-25">
                        <label>Enter Policy Price</label>
                    </div>
                    <div class="col-75">
                        <input type="text" name="price" id="price" onChange={handleChange} value={policies.price} />
                    </div>
                </div>
                <div class="row">
                    <div class="col-25">
                        <label>Enter Policy Created By</label>
                    </div>
                    <div class="col-75">
                        <input type="text" name="createdBy" id="createdBy" onChange={handleChange} value={policies.createdBy} />
                    </div>

                </div>

                <div class="row">
                   
                    <button onClick={handlesubmit}>Add Policy</button>

                </div>



            </form >
        </div >
        </>
    )
}
export default AddPolicy;
