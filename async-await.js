//Challenge Asyn/Await
class HttpError extends Error {
    constructor(response) {
        super(`${response.status} for ${response.url}`);
        this.name = 'HttpError';
        this.response = response;
    }
}
async function loadJson(url) {
    const answer = await fetch(url)
    if (answer.status == 200) {
        return answer.json();
    } else {
        throw new HttpError(answer);
    }    
}

async function demoGithubUser() {
    try{
        let user = await loadJson(`https://api.github.com/users/ronald803`)
        alert(`Full name: ${user.name}.`);
        return user;
    } catch (err) {
        if (err instanceof HttpError && err.response.status == 404) {
            alert("No such user, please reenter.");
            return demoGithubUser();
        } else {
            throw err;
        }
    }
}
demoGithubUser();