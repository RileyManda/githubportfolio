import axios from 'axios';

const accessToken = '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'; 

axios.get('https://api.github.com/rate_limit', {
    headers: {
        Authorization: `Bearer ${accessToken}`,
    },
})
    .then(response => {
        console.log('Rate limit data:', response.data);
    })
    .catch(error => {
        console.error('Error fetching rate limit:', error);
    });
