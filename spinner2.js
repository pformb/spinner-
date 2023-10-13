const spinnerTwo = () => {
  let spinner = ["\r|   ", "\r/   ", "\r-   ", "\r\\   ", "\r-   ", "\r|   "];
  let delay = 0;
  for (let rotation of spinner) {
    setTimeout(() => {
      process.stdout.write(rotation);
    }, delay);
    delay += 200;
  }
};
spinnerTwo();
