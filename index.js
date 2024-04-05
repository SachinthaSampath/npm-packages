function isWds(string) {
    return string === 'wds';
}

function greet(name) {
    return `Hello, ${name}!`;
}

//export both functions
module.exports = {
    isWds,
    greet
};