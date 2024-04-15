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

async function demoGithubUser(url) {
  try{
    let user = await loadJson(url)
    if(!user.name) { throw new Error }
		alert(`Full name: ${user.name}.`);
    return user;
  } catch (err) {
    if (err instanceof HttpError) {
      return demoGithubUser();
    } else {
      alert("No such user, please reenter.");
      throw err;
    }
  }
}
demoGithubUser(`https://api.github.com/users/ronald803`);