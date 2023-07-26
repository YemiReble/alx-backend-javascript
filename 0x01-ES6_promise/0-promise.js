function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve('Success!');
      } else {
        reject('Error!');
      }
    }, 3000);
  });
}
