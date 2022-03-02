import axios from 'axios';
import { useTable } from 'react-table';
import {  useMutation,useQueryClient } from 'react-query';
import styled from '@emotion/styled';
import { useMemo } from 'react';

export const TableComponent = (props) =>{

    const StyledTable = styled.div`
    table{
        border: 2px solid black;
    }
    th,td{
        padding: 0.5rem;
    }
    `
    const apiEndPoint = 'https://6073d32c066e7e0017e7858a.mockapi.io/myprojects/users';

    const queryClient = useQueryClient();
    const mutation = useMutation(newPerson => {

        return axios.delete(apiEndPoint+'/'+newPerson)
    },{
        onSuccess: () => {
            queryClient.invalidateQueries('people');
        }
    })

    const columns = useMemo(()=>[
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
            Cell: ({row}) => {
                return <button onClick={()=>{   
                    mutation.mutate(row.original.id)
                }}>Delete</button>}
        }
    ],[]);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = useTable({columns,data:props.data.data})

    return <>
            <StyledTable>
            <table {...getTableProps()}>
                <thead>
                    {
                        headerGroups.map((headerGroup)=>(
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {
                                    headerGroup.headers.map(column=>(
                                        <th    {...column.getHeaderProps()}>{column.render('Header')}</th>
                                    ))
                                }
                            </tr>
                        ))
                    }
                    
                </thead>
                <tbody {...getTableBodyProps()}>
                    { 
                            rows.map(row=>{
                                prepareRow(row)
                                return (
                                    <tr {...row.getRowProps()}>
                                        {
                                            row.cells.map((cell)=>{
                                                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                            })
                                        }
                                    </tr>
                                )
                            })
                    }
                   
                </tbody>
            </table>
           </StyledTable>
        </>
}