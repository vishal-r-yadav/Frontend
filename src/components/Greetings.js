import UserGreetings from "./UserGreetings";
import AdminGreetings from "./AdminGreetings";

function Greetings (props){
    if(props.role ==="admin"){
        return <AdminGreetings/>
    }
    return <UserGreetings/>
}
export default Greetings;