/*
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

domainName("http://github.com/carbonfive/raygun") == "github" 
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet"
*/

const domainName = url => {
  let domain = url
    //Takes out the http(s)//:
    .replace(/https?:\/\//, "")
    //Splits it into an array
    .split(".")
    //Filters out the www so we can return the first item
    .filter(i => i !== "www");

  return domain[0];
};

//Test Cases
console.log(domainName("http://google.com"), "<-Should be google"); //Should be google
console.log(domainName("http://google.co.jp"), "<-Should be google"); //Should be google
console.log(domainName("www.xakep.ru"), "<-Should be xakep"); //Should be xakep
console.log(domainName("https://youtube.com"), "<-Should be youtube"); //Should be youtube
console.log(
  domainName("https://www.h7souvw9xa4cdxtwz0a9.net/default.html"),
  "<-Should be h7souvw9xa4cdxtwz0a9"
); //Should be h7souvw9xa4cdxtwz0a9
console.log(
  domainName("https://www.x6y9xjful6dbe8a8261ybj6oh.pro/img/"),
  "<-Should be x6y9xjful6dbe8a8261ybj6oh"
); //Should be x6y9xjful6dbe8a8261ybj6oh
console.log(
  domainName(
    "http://www.1-8zf9tbnpopl30ltn-k.net/warez/",
    "<-Should be 1-8zf9tbnpopl30ltn-k"
  )
); //Should be 1-8zf9tbnpopl30ltn-k
