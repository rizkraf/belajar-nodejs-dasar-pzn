import fs from "fs";

const writer = fs.createWriteStream("target.log");

writer.write("Rizky\n");
writer.write("Rafi\n");
writer.write("Azhara");
writer.end();

const reader = fs.createReadStream("target.log");
reader.addListener("data", (data) => {
    console.info(data.toString());
});
