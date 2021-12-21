import {Link} from 'react-router-dom';
function Dashboard(){
    return (
        <div>
            <h2> MY Dashboard</h2>
            <p>   <Link to ="/policy/all">Get All Policy</Link></p>
             <p><Link to = "/adduser">Add User</Link></p>
        </div>
    )
}
export default Dashboard;