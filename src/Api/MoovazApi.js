import axios from "axios"
import { useEffect, useState } from "react";

export const GetReloDetail = (token) => {
    const [reloDetail, setReloDetail] = useState(false);
    const [isLogged, setIsLogged] = useState(false);
    const [callback, setCallback] = useState(false);

    useEffect(() => {
        if(token){
            const getData = async() => {
                const res = await ReloDetail(token);
                setIsLogged(true);
                setReloDetail(res.data.data);
            }
            getData();
        }
    }, [token, callback])

    return({
        ReloDetail: [reloDetail, setReloDetail],
        isLogged: [isLogged,setIsLogged],
        callback: [callback, setCallback]
    })
}



export const LoginApi = async(user) => {
    return axios.post('https://api-v3release-c.moovaz.com/api/Account/authenticate', {...user})
}

export const ReloDetail = async(token) => {
    return axios.get('https://api-v3release-c.moovaz.com/api/v1/Customer/get-relo-detail',{
        headers: {Authorization: 'Bearer'+' '+token}
    })
}

export const MoveDateApi = async(RelocateId, MoveDate, token) => {
    return axios.post('https://api-v3release-c.moovaz.com/api/v1/Customer/update-move-date', {RelocateId, MoveDate}, {
        headers: {Authorization: 'Bearer'+' '+token}
    })
}