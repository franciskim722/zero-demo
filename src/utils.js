export default class Utils {
  static loading(state, reqAnimation) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
          console.log("Resolved");
          resolve(true)
      }, 1000);
    });
  }
};
