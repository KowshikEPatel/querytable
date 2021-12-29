import React, { useMemo } from 'react';
import { useQuery } from 'react-query';
import { useTable } from 'react-table';
// import { useDataTable } from '../Hooks/useDataTable';
import { COLUMN } from './column';
import axios from 'axios';

export default function RQsuperheroes() {
    
    const {  data, isLoading, isError, error } = useQuery('superheroes',()=>{
       return axios.get('https://6073d32c066e7e0017e7858a.mockapi.io/myprojects/users');
    });

    
    const columns = useMemo(()=>COLUMN, []);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = useTable({columns,data:data?.data})


    if(isError){
        return <h2>{error}</h2>
    }

    if(isLoading){
        return <h1>Loading....</h1>
    }
        return <>
            <h1>
                RQsuperheroes Page
            </h1>
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
           
        </>
        
}

