function processData() {
    return new Promise((resolve, reject) => {
        console.log("Data is processing");
        let data;
        setTimeout(() => {
            if (data) {
                resolve(data);
            }
            else {
                reject("Data is not fetched");
            }
        }, 1000);
    });
}
async function fetchData() {
    try {
        let data = await processData();
        console.log(data);
    }
    catch (error) {
        console.log(error);
    }
}
console.log("before");
fetchData();
console.log("after");
export {};
