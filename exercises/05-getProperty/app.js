function getProperty(obj, key) {
  // your code here
  return  obj[key];
}

var planet = {
    planets: 'Marte'
};
var output = getProperty(planet, 'planets');
console.log(output);
 