var idname = ["TestCase"];
var username = ["TestCase1"];
var userid = ["testcase1@gmail.com"];
var password = ["TestCase1Password"];
var islogged = true;
function login() {
  cid = $("#userlog").val();
  cpass = $("#userpass").val();
  logger(cid, cpass);
}
function logger(user, pass) {
  if (user == "" || pass == "") {
    alert("Username or Password can't Be blank");
  } else {
    x = username.indexOf(user);
    console.log(x);
    y = password.indexOf(pass);
    console.log(y);
    if (x < 0 || y < 0) {
      alert("Wrong Username or Password");
    } else if (x == y) {
      alert("Login Successful");
      fetchAndSave(x);
      $("#Welcome").hide();
      $("#userlog").val("");
      $("#userpass").val("");
      $(".LogBg").hide();
      $(".form").hide();
    } else {
      alert("Username and Password Don't match");
    }
  }
}
function fetchAndSave(x) {
  $("#loggedName").text(idname[x]);
  $("#loggedUserName").text(username[x]);
  $("#loggedEmail").text(userid[x]);
  $("#forest").show();
  $("#user").text("Hi " + idname[x]);
}
function logout() {
  $("#loggedName").text("Guest");
  $("#loggedUserName").text("Guest");
  $("#loggedEmail").text("Guest");
  $("#forest").hide();
  $(".LogBg").show();
  $("Welcome").show();
  $(".form").show();
  $("#user").text("Hi " + "Guest");
  alert("Logged Out");
}
function register() {
  namer = $("#regName").val();
  usernr = $("#regUsername").val();
  mailr = $("#regMail").val();
  passr = $("#regPass").val();
  confirmpassr = $("#regConfrmPass").val();
  console.log("1" + confirmpassr);
  console.log(passr);
  if (
    namer == "" ||
    usernr == "" ||
    mailr == "" ||
    passr == "" ||
    confirmpassr == ""
  ) {
    alert("Fields Can't Be Empty");
  } else if (passr != confirmpassr) {
    alert("Passwords Don't Match");
  } else if (validatEmail(mailr)) {
    alert("Email is not Valid");
  } else {
    idname.push(namer);
    username.push(usernr);
    userid.push(mailr);
    password.push(passr);
    alert("User Registered");
    $(".LoginPage").show();
    $(".RegPage").hide();
  }
}
function validatEmail(email) {
  arr = email.search(/\@/g);
  arr1 = email.search(/\./g);
  if (arr > 3 && arr1 > 4) {
    return false;
  } else {
    return true;
  }
}
