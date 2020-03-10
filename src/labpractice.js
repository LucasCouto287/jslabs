import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

console.log(`working?`);
const myObject = {};
myObject.phone = `6478889999`;
myObject.age = 24;
myObject.SIN = 666333777;

console.log(myObject);
console.log(myObject.age);
console.log(myObject.SIN);

console.log(myObject["phone"]);

console.log(`*******************`);

const user = {
  ip: `192.168.70.1`,
  geLocation: `Canada`,
  browser: `Tor`,
  cookies: `v=k&h=j`,
  getCookies: function() {
    console.log(this.cookies);
  }
};

const allTheCookies = user.getCookies();
console.log(allTheCookies);

const getObjects = function(user, myObject) {
  console.log(user, myObject);
};

getObjects(user, myObject);
