async function getPoetryAsync() {
    let result = [];
    try {
        let response = await fetch( "https://v1.jinrishici.com/all.json");
        let data = await response.json();
        result = [data.origin, data.author, data.content];
    } catch (error) { console.log(error); }
    return result;
}
export { getPoetryAsync };