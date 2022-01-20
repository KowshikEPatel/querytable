const printRow = (value) => {
    console.log('value ',value);
}
export const COLUMN = [
    {
        Header:'Id',
        accessor:'id'
    },
    {
        Header:'Name',
        accessor:'name'
    },
    {
        Header:'Email Address',
        accessor:'email'
    },
    {
        Header:'Phone Number',
        accessor:'phone'
    },
    {
        width:100,
        Header:'Delete Entry',
        Cell: ({value}) => (<button onClick={()=>{printRow(value)}}>Button</button>)
    }
]