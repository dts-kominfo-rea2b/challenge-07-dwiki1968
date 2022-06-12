const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  try {
    const XXI = await promiseTheaterIXX(); //data berupa array of object
    const CGV = await promiseTheaterVGC(); //data berupa array of object
    //concat data kedua data teater
    const allData = XXI.concat(CGV);
    //menfilter data yang diinginkan berdasarkan emosi
    const result = allData.filter((e) => e.hasil === emosi).length;
    return result;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  promiseOutput,
};
