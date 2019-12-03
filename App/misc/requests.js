import { BASE_URL } from '../constants'

const requests = {
    preregister: body => {
        const tckn = parseInt(body.tckn) || body.tckn
        const _body = { ...body, tckn }
        return fetch(`${BASE_URL}/account/preregister`, postConfig(_body))
    },
    register: body => fetch(`${BASE_URL}/account/register/${body.smscode}`, getConfigWithToken(body)),
    authenticate: body => fetch(`${BASE_URL}/account/authenticate`, postConfig(body)),
    login: body => fetch(`${BASE_URL}/account/login/${body.smscode}`, getConfigWithToken(body)),
    validation: body => fetch(`${BASE_URL}/account/validate/`, getConfigWithToken(body)),
}

const postConfig = body => ({ 
    method: 'post', 
    body: JSON.stringify(body), 
    headers: { 'Content-Type': 'application/json' } 
})

const getConfigWithToken = body => ({
    method: 'get',
    headers: {
        'Accept': 'application/json', 
        'Authorization': 'Bearer ' + body.token
    }
})

export default requests