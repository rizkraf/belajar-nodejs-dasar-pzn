function samplePromise() {
    return Promise.resolve("Rizky");
}

const name = await samplePromise();
console.info(name);
