const buffer = Buffer.from("Rizky Rafi Azhara", "utf-8");

console.info(buffer.toString());
console.info(buffer.toString("hex"));
console.info(buffer.toString("base64"));

const bufferBase64 = Buffer.from("Uml6a3kgUmFmaSBBemhhcmE=", "base64");
console.info(bufferBase64.toString("utf-8"));
