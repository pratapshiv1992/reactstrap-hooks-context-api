const callAPi = (url = 'https://meijerdigital.azurewebsites.net/api/interview', method = 'GET', data) => {
    return fetch(url, {
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

module.exports = {
    callAPi
};

