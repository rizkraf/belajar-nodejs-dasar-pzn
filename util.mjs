import util from "util";

const firstName = "Rizky";
const lastName = "Rafi";
console.info(util.format("Hello %s %s", firstName, lastName));

const person = {
    firstName: "Rizky",
    lastName: "Rafi"
};

console.info(util.format("Person: %j", person));
