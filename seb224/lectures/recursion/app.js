let num=0
const countDown = (num) => {
    if (num < 0) {
      return;
    }
    results = countDown(num - 1);
    console.log(results);

  };