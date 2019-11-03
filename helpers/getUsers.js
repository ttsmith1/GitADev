import fetch from 'cross-fetch'

const repos = experience => {
    let repo
    switch (experience) {
        case 1:
            repo = `repos:<5`
            break;
        case 2:
            repo = `repos:5..10`
            break;
        case 3:
            repo = `repos:>10`
            break;
        default:
            repo = ``
            break;
    }

    return repo;
}

export const getUsers = async (location, language, experience) => {

    console.log(experience)
    let response = await fetch(`https://api.github.com/search/users?q=language:${language}+location:${location}+${repos(experience)}`);
    let data = await response.json();

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

export const getUser = async (userId) => {

    console.log(experience)
    let response = await fetch(`https://api.github.com/search/users?q=user:jjroush`);
    let data = await response.json();



    const userData = data.map(user => ({
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