import {API_URL} from './constants'

export const getAPIResponse = (path, method = 'GET', data) => {
    const api_endpoint = API_URL + path;
    return fetch(api_endpoint, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method,
        body: JSON.stringify(data)
    }).then(response =>
        response.json().then(data => ({
                data: data,
                status: response.status
            })
        ).then(res => {
            return res;
        })).catch(e => console.log('Oops! something went wrong', e));

}

