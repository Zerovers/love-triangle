/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var first;
  var second;
  var third;
  var count = 0;
  for ( i = 0; i < preferences.length - 1; i++) {
    first = preferences[i];
    second = preferences[first -1];
    third = preferences[second -1];
    if( third == i + 1 && first !== second && second !== third ) {
      count++;
      preferences[i] = undefined;
      preferences[first - 1] = undefined;
      preferences[second -1] = undefined;
    }
  }
  return count;
  // your implementation
};
