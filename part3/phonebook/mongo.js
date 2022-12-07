const e = require("express");
const mongoose = require("mongoose");

if (process.argv.length < 3) {
  console.log(
    "Please provide the password as an argument: node mongo.js <password>"
  );
  process.exit(1);
}

const password = process.argv[2];
const personName = process.argv[3];
const personNumber = process.argv[4];

const url = `mongodb+srv://dkenney99:${password}@cluster1.msgitpn.mongodb.net/phonebookApp?retryWrites=true&w=majority`;

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
});

const Person = mongoose.model("Person", personSchema);

if (personName == undefined) {
  mongoose.connect(url).then((result) => {
    Person.find({}).then((result) => {
      result.forEach((person) => {
        console.log("phonebook: ");
        console.log(person.name, person.number);
      });
      return mongoose.connection.close();
    });
  });
} else {
  mongoose
    .connect(url)
    .then((result) => {
      console.log("connected");

      const person = new Person({
        name: `${personName}`,
        number: `${personNumber}`,
      });
      console.log("note saved!");
      return person.save();
    })
    .then(() => {
      return mongoose.connection.close();
    })
    .catch((err) => console.log(err));
}
