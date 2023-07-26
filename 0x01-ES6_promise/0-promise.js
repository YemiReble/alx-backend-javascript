function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulate an API call that takes 3 seconds
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve('Success!');
      } else {
        reject('Error!');
      }
    }, 3000);
  });
}
