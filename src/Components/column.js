
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
        Cell:({row})=>{
            const data = row.original;
            const showCellData = (id)=>{
               alert(id);
            }

            return <button style={{border:"2px solid black",borderRadius:"16px"}} onClick={()=>{showCellData(data.id)}}>x</button>
        }
    }
]