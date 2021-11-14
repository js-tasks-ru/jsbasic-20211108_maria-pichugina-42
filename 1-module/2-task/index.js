 function print(text) {
  console.log(text);
  }
  
  function isValid(UserName) {
  return UserName !== null && UserName.length >= 4 && !UserName.includes(" ");
  };
  
  function SayHello() {
  let UserName = prompt('Введите ваше имя');
  
  if (isValid(UserName)) {
    print(`Welcome back, ${UserName}!`);
  } else {
    print('Некорректное имя');
  }
}

SayHello();
  