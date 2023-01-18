

/* When using async functions, you need to create a global variable, then fill it with data in your async function. Don't try to pass anything out of the async function and donn't call an async function unless it's inside of another async function
*/

let people = [];

async function getData() {
    const response = await axios.get('https://swapi.dev/api/people');
    const {next, results } = response.data;
    console.log("results #1 are", results);
    people = results;

    const response2 = await axios.get(next);
    const results2 = response2.data.results;
    console.log("results #2 are", results2);
    people = people.concat(results2);

}
// getData();


/* Up until now we have mostly spent our time getting data in free APIs. Often you need to sign up for the API and then send data to the server using post. You need an AUTH TOKEN.
*/ 

// Sign up to get a token you will use for get and post requests; see below
async function getUsers(token) {
    const response = await axios.get('https://hack-or-snooze-v3.herokuapp.com/users',
    {params: {token: token}});
    console.log(response);
}

async function signUp(username, password, name) {
    const response = await axios.post('https://hack-or-snooze-v3.herokuapp.com/signup',
    {user: {
        name: name,
        username: username,
        password: password
    }})
console.log(response);
}

// signUp('butters22', '23423423', 'butthechx')
// we can only do this once to get credentials

// Now we can log in
async function login(username, password) {
    const response = await axios.post('https://hack-or-snooze-v3.herokuapp.com/login', 
    {user: {
        username: username,
        password: password
    }})
    console.log(response);
    return response.data.token;
}

// login('butters22', '23423423')
// here we get the token and then use it to get users
async function getUsersWithAuth() {
    const token = await login('butters22', '23423423');
    console.log(token);
    getUsers(token);
}

// here we get the token and then use it to post a story
async function addStory() {
    const token = await login('butters22', '23423423');
    const newStory = {
        token,
        story: {
            author: 'Mark',
            title: 'My Life',
            url: 'https://www.google.com'
        }
    }
    const story = await axios.post('https://hack-or-snooze-v3.herokuapp.com/stories', newStory)
    console.log(story);
}