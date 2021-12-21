function ArrNumberComponent() {
    let name = "Krish";

    let arrNum = [10, 20, 60, 30, 50, 70];

    let employee = [
        {
            empId: 101,
            name: "vishal",
            salary: 50000,
            address: {
                doorNo: "12/6",
                city: "hyd"
            }
        },
        {
            empId: 102,
            name: "Ranjeet",
            salary: 40000,
            address: null
        },
        {
            empId: 103,
            name: "Suraj",
            salary: 60000,
            address: {
                doorNo: "12/6",
                city: "hyd"
            }
        },
        {
            empId: 104,
            name: "Kishan",
            salary: 70000,
            address: null
        }
    ]
    return (
        <div>
            <p>Name: {name}</p>
            <hr></hr>
            <p>
                {arrNum.map(n =>
                    <div>
                        {
                            n > 50 && <h4>{n}</h4>
                        }

                    </div>)}
            </p>
            <hr></hr>
            <p>
                {
                    employee.map(e =>
                        <div>

                            <h3>{e.empId}{e.name}{e.salary}</h3>
                            <h4>Adress:</h4>
                            {
                                e.address != null ? <p>
                                    {e.address.doorNo}{e.address.city}
                                </p> : <p>Not Available</p>
                            }


                        </div>

                    )
                }
            </p>
        </div>
    )

}
export default ArrNumberComponent;
