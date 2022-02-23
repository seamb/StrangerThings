const { REACT_APP_BASE_URL = "https://strangers-things.herokuapp.com/api/2111-CSU-RM-WEB-PT" } = process.env;

const callApi = async ({url, method, headers, token, body}) => {
    try {
        const options = {
            method: method? method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        }

        if (token) {
            options.headers['Authorization'] = `Bearer ${token}`;
        }
        const resp = await fetch(`${REACT_APP_BASE_URL}${url}`);
        const result = await resp.json();
        if (result.error){
            throw(result.error)
        }
        return result;    
        }catch(error) {
        console.log(error);
    }
    
};

export default callApi;