require("dotenv").config();
const _ = require("lodash");
const axios = require("axios");
const moment = require("moment");
const { hello } = require("./utils/helpers");

async function main() {
  try {
    console.log(hello("World"));

    // Example using lodash
    const numbers = [1, 1, 2, 2, 3];
    console.log("Unique numbers:", _.uniq(numbers));

    // Example using moment
    console.log("Current time:", moment().format("YYYY-MM-DD HH:mm:ss"));

    // Example using axios
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    console.log("API Response:", response.data);
  } catch (error) {
    console.error("Error in main:", error.message);
    process.exit(1);
  }
}

if (require.main === module) {
  console.log(require.main);
  main();
}

module.exports = { main };
