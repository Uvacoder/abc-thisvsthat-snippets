const fetch = require('node-fetch');

module.exports = async function() {
    return fetch('https://api.github.com/repos/phuocng/this-vs-that')
        .then(res => res.json())
        .then(json => {
            return {
                stargazers: json.stargazers_count
            };
        });
};
