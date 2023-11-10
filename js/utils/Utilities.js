export function RandomItemInArray(array) {
  return array[Math.floor(Math.random() * (array.length - 0) + 0)];
}

export function SpecificItemInArray(array, requestedId) {
  return array[array.findIndex((item => item.id == requestedId))]
}

