import axios from 'axios';
export async function getSongs(termName) {
    // termName can be the artist name or by default  latest songs

    const URL = `https://itunes.apple.com/search?term=${termName}&limit=25&country=in`

    const response = await axios.get(URL);
    console.log(response.data['results']);
    return(response.data['results'])
}