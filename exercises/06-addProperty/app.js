function addProperty(obj, key) {
  // your code here
  obj[key] = true
  return obj
}

var sport = {};
addProperty(sport, 'Futbol');
console.log(sport.Futbol);