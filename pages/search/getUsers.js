import fetch from 'cross-fetch'

export const getUsers = async (location, language, experience) => {

    console.log(experience)
    let response = await fetch(`https://api.github.com/search/users?q=language:${language}+location:${location}`);
    let data = await response.json();

    // let headers = new Headers()
    // headers.set('Authorization', 'Token ' + process.env.GH_TOKEN);
    // console.log(process.env.GH_TOKEN);

    const userIds = data.items.map(user => user.login);
    if (userIds.length > 10) {
        userIds.splice(10);
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
        name: user.name,
        email: user.email,
        company: user.company,
        blog: user.blog,
        location: user.location,
        hireable: user.hireable,
        bio: user.bio
    }))
    console.log(userData)

    return userData;
}