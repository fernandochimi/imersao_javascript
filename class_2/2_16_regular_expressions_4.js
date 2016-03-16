var emailRegExp = /^[A-Za-z]+[A-Za-z\d_\.]*@[A-Za-z\d_]+(\.[a-z]{2,3})+$/;

var email = "fulano@example.com.br";

console.log(emailRegExp.test(email));