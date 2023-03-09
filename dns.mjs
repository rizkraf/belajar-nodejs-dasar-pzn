import dns from "dns/promises";

const ip = await dns.lookup("roketin.com");

console.info(ip.address);
console.info(ip.family);
