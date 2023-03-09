import net from "net";

const client = net.createConnection({
    port: 3001,
    host: "localhost"
});

client.on("data", (data) => {
    console.info(`Receive data from server: ${data.toString()}`)
});

setInterval(() => {
    client.write(`${process.argv[2]}\r\n`);
}, 2000);
