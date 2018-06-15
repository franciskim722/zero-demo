export default class Utils {
  static loading(state) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
          console.log("Resolved");
          resolve(!state)
      }, 5000);
    });
  }
};
