import axios from 'axios';

const KEY = 'AIzaSyCK1gf5qGFfHCoCtcrC3uPg2AsZBBy0COk';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY,
    },
});
