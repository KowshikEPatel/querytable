import { useQuery, useMutation,useQueryClient } from "react-query";
import axios from 'axios';

const apiEndPoint = 'https://6073d32c066e7e0017e7858a.mockapi.io/myprojects/users';
const fetchPeopleList = () => {
    return axios.get(apiEndPoint);
}

const deletePerson = (id) =>{
    return axios.delete(apiEndPoint+'/'+ id)
}

export const usePeoplesData = ( ) => {

    return useQuery('people',fetchPeopleList);
}

export const useDeletePersonDetail = (id) => {

    const queryClient = useQueryClient();
    return useMutation(() => deletePerson(id),{
        onSuccess: () => {
            queryClient.invalidateQueries('people');
        }
    })
}
