import fetch from 'cross-fetch'

export const getUsers = async (location, language, experience) => {

    let response = await fetch(`https://api.github.com/search/users?q=language:${language}+location:${location}`);
    let data = await response.json();

    // let headers = new Headers()
    // headers.set('Authorization', 'Token ' + process.env.GH_TOKEN);
    // console.log(process.env.GH_TOKEN);

    const userIds = data.items.map(user => user.login);
    if (userIds.length > 5) {
        userIds.splice(5);
    }
    console.log(userIds)

    const rawUserData = await Promise.all(
        userIds.map(user =>
            fetch(`https://api.github.com/users/${user}`, {
                method: 'get',
                headers: {
                    'Authorization': `token ${process.env.GH_TOKEN}`
                }
            })
                .then(response => response.json()
                    .catch(e => console.log(e))
                )));

    console.log(rawUserData);

    const userData = rawUserData.map(user => ({
        avatar_url: user.avatar_url,
        user: user.name,
        company: user.company,
        blog: user.blog,
        location: user.location,
        hireable: user.hireable,
        bio: user.bio
    }))
    console.log(userData)

    return userData;
}