import React from 'react';
import { usePeoplesData } from '../Hooks/usePeoplesData';
import { TableComponent } from './table';

export default function RQsuperheroes() {
    
    const {data,isLoading,isError,isSuccess,error} = usePeoplesData();

//calling the hook here but I dont know how to bind the id with useDeletePersonDetail 

    if(isError){
        return <h2>{error}</h2>
    }

    if(isLoading){
        return <h1>Loading....</h1>
    }

    if( !isLoading && isSuccess){
        return <>
                    <h1>
                        RQsuperheroes Page
                    </h1>
                    <TableComponent data={data}/>
        </>
    }
        
        
}

