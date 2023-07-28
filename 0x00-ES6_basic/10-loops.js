export default function appendToEachArrayValue(array, appendString) {
  const somearray = [];
  for (const idx of array) {
    somearray.push(appendString + idx);
    }

  return array;
}
