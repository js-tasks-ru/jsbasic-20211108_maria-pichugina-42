function factorial(i) {
  let a = i;
  if (!i) return 1;
  while(i > 1) {
  i--;
  a *= i;
  };
  return a;
}
