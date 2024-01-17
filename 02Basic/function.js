function addTwo(num) {
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, password, ispaid) { }
var loginMe = function (name, email, ispaid) {
    if (ispaid === void 0) { ispaid = false; }
};
addTwo(8);
getUpper("aryan");
signUpUser("Aryan", "landge@.com", "starxg", false);
loginMe("honey", "hon@hon.com");
// Arrow function 
var returnmesometing = function (s) { return "something"; };
var Marvel = ["spiderman", "ironman", "captain america"];
Marvel.map(function (hero) {
    return "My favroutie hero is ".concat(hero);
});
function consoleError(errmsg) {
    console.log("log something");
}
function fail(msg) {
    throw new Error(msg);
}
