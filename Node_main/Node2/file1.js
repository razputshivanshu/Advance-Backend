// Exporting a single function
module.exports = function greet() {
  console.log("Hello from CommonJS!");
};

// Exporting multiple values
module.exports = {
  greet() {
    console.log("Hello!");
  },
  name: "CommonJS",
};
