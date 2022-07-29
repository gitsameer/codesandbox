let test = [1, 2, 3, 4, 5, 24, 122];

countEven(test);

function countEven(arr) {
  console.log(`****arr leng => ${arr.length} ${Array.isArray(arr)}`);
  console.log("sum of Event / ODD => " + sumEven(arr, arr.length - 1, 0));
}

function sumEven(arr, ndx, sum) {
  console.log(`in sumEvent with ${ndx} sum => ${sum}`);
  if (ndx < 0) return sum;
  if (arr[ndx] % 2 === 1) {
    console.log(`${ndx} : adding ${arr[ndx]}`);
    sum += arr[ndx];
  } else {
    console.log(`skipping ${ndx} : ${arr[ndx]}`);
  }
  ndx--;
  return sumEven(arr, ndx, sum);
}
