// Code your solution here
function findMatching(arrayOfNames, string){
let result = arrayOfNames.filter(driver => driver.toUpperCase() === string.toUpperCase())
return result
}

function fuzzyMatch(arrayOfNames, string){
  let result = arrayOfNames.filter(driver => driver.startsWith(string))
  return result
}

function matchName(arrayofNames, string){
  let result = arrayofNames.filter(driver => driver.name === string)
  return result;
}

