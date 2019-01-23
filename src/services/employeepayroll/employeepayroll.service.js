exports.allemployees = async () => {
    const employees1 = [
        {Name: "Aditya", Salary: '15000'},
        {Name: "Vaishnavee", Salary: '15000'}
    ]
    return employees1;
}

exports.employee = async () => {
    const employees = {Name: "Aditya", Salary: '15000'}
    
    return employees;
}