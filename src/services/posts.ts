

const fetchPosts = async (cursor: string = '')=>{
    const response = await fetch(
      `https://instagram243.p.rapidapi.com/userposts2/3175249763/12/${cursor}}`,
      {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'instagram243.p.rapidapi.com',
          'x-rapidapi-key': 'c548a84106msh19128588fb4d0bap18ce78jsne17a1b5a0d6b',
        },
      }
    );
    const data = await response.json();
    return data;
  }

export default fetchPosts;