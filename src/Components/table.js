import { useMemo } from 'react';
import { useTable } from 'react-table';
import { COLUMN } from './column';
import styled from '@emotion/styled';

export const TableComponent = (props) =>{

    const StyledTable = styled.div`
    table{
        border: 2px solid black;
    }
    th,td{
        padding: 0.5rem;
    }
    `
    
    const columns = useMemo(()=>COLUMN, []);
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