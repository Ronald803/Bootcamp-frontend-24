# Async-Await
1. Tab size changed to 2, as a recommendation of the trainer in a past class of Frontend
2. Bug corrected
```js
// ------------ Before --------------
let user = await loadJson(`https://api.github.com/users/ronald803`)
alert(`Full name: ${user.name}.`);
return user;
// ------------ Now ------------------
let user = await loadJson(url)
if(!user.name) { throw new Error }
alert(`Full name: ${user.name}.`);
return user;
```
The bug was, if an inconrrect or non existent user were in the url the alert("No such user, please reenter.") didn't show up in the screen, now with the changes the alert("No such user, please reenter.") shows up