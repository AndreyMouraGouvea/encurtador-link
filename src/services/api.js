import axios from 'axios';

export const key = "12afaa3c4dfed481d16f1a2379f23dcbc457539d";

const api = axios.create ({
    
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers: {
        'Authorization': `Bearer ${key}`
    }

})

export default api


