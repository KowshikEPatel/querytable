import React from 'react';
import { useQuery } from "react-query";
import axios from 'axios';
import { TableComponent } from './table';


export default function RQsuperheroes() {

    const apiPoint = 'https://6073d32c066e7e0017e7858a.mockapi.io/myprojects/users';
    

    const {data,isLoading,isError,isSuccess,error} = useQuery('superheroes',()=>{
        return axios.get(apiPoint);
    });

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

