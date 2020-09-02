const stringAlReves = (str) => {
  return new Promise((resolve, reject) => {
    if (!str) reject("string Vacio");
    resolve(str.split("").reverse().join(""));
  });
};

module.exports = stringAlReves;
