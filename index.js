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
  const kittens2 = [...kittens,name]
  return kittens2
}
function prependKitten(name) {
  const kittens2 = [name,...kittens]
  return kittens2
}
function removeLastKitten() {
  const kittensLast = kittens.slice()
  return kittensLast
}
function removeFirstKitten() {
  var newarray = kittens.shift()
  return kittens
}