import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

export default function RQsuperheroes() {
    
    const { data, isLoading, isError, error } = useQuery('superheroes',()=>{
       return axios.get('https://6073d32c066e7e0017e7858a.mockapi.io/myprojects/users');
    });

    if(isLoading){
        return <h1>Loading...</h1>
    }

    if(isError){
        return <h2>{error}</h2>
    }

    return (
        <>
            <h1>
                RQsuperheroes Page
            </h1>
            {data?.data.map((hero,index) =>{
                return <div key={hero.name}>{hero.name}</div>
            })}
        </>
    )
}
