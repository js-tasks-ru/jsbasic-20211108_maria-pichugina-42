function factorial(n) {
  let a = n;

  if (!n) {
    return 1
  }
  while(n > 1) {
    n--;
    a *= n;
  };

  return a;

}
