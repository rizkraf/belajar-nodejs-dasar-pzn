function samplePromise() {
    return Promise.resolve("Rizky");
}

async function run() {
    const name = await samplePromise();
    console.info(name);
}

run()
