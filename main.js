
async function writeLocation() {
  var loc = window.location.toString();
  loc = loc.substring(loc.indexOf('location=')).replace('location=', '');
  console.log(loc)

  var URL = `https://script.google.com/macros/s/AKfycbzIUMpDUayYNg5I2wcRj0Wsa-FQCtT4jhyenOnj5Pu4Vf1eOMugiU4zLm0VMIWtjiEmzQ/exec?location=${loc}`
  await fetch(URL).then((value) => {
    console.log(value);
  })
}
writeLocation()