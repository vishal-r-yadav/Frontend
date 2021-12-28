const intialState = {
    policies: [],
    policy : null

}
 export default function PolicyReducer(state = intialState, action) {
    if (action.type === "GET_POLICIES_SUCCESS") {

        return (
            {
                // make a copy of 'state'
                ...state,
                // and update the copy with new value  
                policies: action.payload
            }
        )
    }

    else if (action.type === "POLICY_SUCCESS") {

        return (
            {
                // make a copy of 'state'
                ...state,
                // and update the copy with new value
                policy: action.payload
            }
        )
    }
    else {
        return state;
    }
}