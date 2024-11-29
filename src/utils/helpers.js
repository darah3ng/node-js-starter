/**
 * Example helper function
 * @param {string} name
 * @returns {string}
 */
function hello(name) {
  return `Hello, ${name}!`;
}

/**
 * Example async helper function
 * @param {number} ms
 * @returns {Promise<void>}
 */
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

module.exports = {
  hello,
  sleep,
};
