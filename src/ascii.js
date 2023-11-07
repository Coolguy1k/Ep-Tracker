const art = require("ascii-art");

const asciiArt = () => {
  art.font("Employee Tracker", "doom").then((rendered) => {
    console.log(rendered);
    setTimeout(() => {
      console.clear();
    }, 1500);
  });
};

module.exports = asciiArt