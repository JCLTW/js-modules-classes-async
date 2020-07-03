async function getPoetryAsync() {
    let result = [];
    await fetch( "https://v1.jinrishici.com/all.json")
        .then(response => response.json())
        .then(data => {
            result = [data.origin, data.author, data.content]
        });
    return result;
}
export { getPoetryAsync };