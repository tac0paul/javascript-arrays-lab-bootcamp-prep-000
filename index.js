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
  var newarray = kittens.push(name)
  return newarray
}