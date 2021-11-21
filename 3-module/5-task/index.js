//let inputData = '1 и -5.8 или 10 хотя 34 + -5.3 и 73';

function getMinMax(str) {
  let myMin = Number.MAX_VALUE;
  let myMax = Number.MIN_VALUE;
    str.split(' ').forEach(element => {
      if (isFinite(element)) {
        let n = Number(element);
        if (myMin > n) myMin = n;
        if (myMax < n) myMax = n;
      }
    });
    return {
      min: myMin,
      max: myMax
    };
}

//console.log(getMinMax(inputData))