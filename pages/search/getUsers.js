import fetch from 'cross-fetch'

export const getUsers = async (location, language, experience) => {
    let response = await fetch('https://api.github.com/search/users?q=language:javascript+location:Iowa');
    let data = await response.json();
    console.log(data)
    return data;
}