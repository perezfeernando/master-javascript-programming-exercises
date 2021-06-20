function removeProperty(obj, key) {
  // your code here
  delete obj[key]
}
var obj = {
    name: 'Fernando',
    age: 25
}
removeProperty(obj,'name');
console.log(obj.name);