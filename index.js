function destructivelyAppendKitten(name) {
  return kittens.push(name)
}
function destructivelyPrependKitten(name) {
  return kittens.unshift(name)
}
function destructivelyRemoveLastKitten()
{
  return kittens.pop()
}
function destructivelyRemoveFirstKitten() 
{
  return kittens.shift()
}
function appendKitten(name) 
{
  var newarray = [name, ...kittens]
  return newarray
}
function prependKitten(name) {
  var newarray = [kittens.unshift(name)]
  return kittens
}
function removeLastKitten() {
  var newarray = kittens.pop()
  return kittens
}
function removeFirstKitten() {
  var newarray = kittens.shift()
  return kittens
}