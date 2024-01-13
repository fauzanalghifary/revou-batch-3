// 1. Equivalent Keypresses

const calculateFinalString = (inputStr: string) => {
  const result: string[] = [];

  for (const char of inputStr.split(",")) {
    if (char === "-B") result.pop();
    else result.push(char);
  }

  return result.join();
};

function EquivalentKeypresses(strArr: string[]) {
  const [firstString, secondString] = strArr;
  return (
    calculateFinalString(firstString) === calculateFinalString(secondString)
  );
}

console.log(EquivalentKeypresses(["a,b,c,d", "a,b,c,d,-B,d"]));

// 2. Find Intersection

function FindIntersection(strArr) {
  const result: string[] = [];

  const firstArray = strArr[0].split(",");
  const secondArray = strArr[1].split(",");
  for (const num of firstArray) {
    if (secondArray.find((num2: string) => num2.trim() === num.trim())) {
      result.push(num);
    }
  }

  return result.length > 0 ? result : false;
}

console.log(FindIntersection(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]));

// 3. Remove Brackets

function RemoveBrackets(str) {
  let totalPairs = 0;
  let openBracketCount = 0;

  for (let char of str.split("")) {
    if (char === "(") {
      openBracketCount++;
    } else if (char === ")") {
      if (openBracketCount > 0) {
        openBracketCount--;
        totalPairs++;
      }
    }
  }

  return str.length - totalPairs * 2;
}

console.log(RemoveBrackets("(((())))))())"));

// 4. String Periods

function StringPeriods(str) {
  let array = str.split("");
  for (let i = 2; i < array.length + 1; i++) {
    if ((str.length / i) % 1 !== 0) continue;
    const chunk = array.slice(0, str.length / i).join("");
    const repeatedChunk = chunk.repeat(i);
    if (repeatedChunk === str) return chunk;
  }

  return -1;
}

// aaaaaaaaaa => aaaaa
// gg => g
// abcababcababcab => abcab

console.log(StringPeriods("abcababcababcab"));

// 5. Element Merger

function ElementMerger(arr: number[]) {
  if (arr.length === 1) {
    return arr[0];
  }

  const result: number[] = [];
  for (let i = 0; i < arr.length - 1; i++) {
    const diff = Math.abs(arr[i] - arr[i + 1]);
    result.push(diff);
  }

  return ElementMerger(result);
}

console.log(ElementMerger([5, 7, 16, 1, 2]));

// 6. Three Sum

function ThreeSum(arr: number[]) {
  // let sumArray: string[] = [];
  let firstEl = arr[0];

  for (let i = 1; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        let sum = arr[i] + arr[j] + arr[k];
        if (sum === firstEl) {
          return true;
          // let threeArray = [arr[i], arr[j], arr[k]].sort().join("");
          // sumArray.push(threeArray);
        }
      }
    }
  }

  // const uniqueArray = sumArray.filter(
  //   (item, index) => sumArray.indexOf(item) === index
  // );

  // if (uniqueArray.length === 3) return true;
  return false;
}
console.log(ThreeSum([64, 3, 50, 45, 32, 14, 50, 45, 31, 66, 22, 15, 16, 20]));

// [64, 3, 50, 45, 32, 14, 50, 45, 31, 66, 22, 15, 16, 20] => true??
// [10, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 5, 5, 5, 5, 5, 5, 8, -2, -2, -2, -2, -1, 7] => true??
// [5, -6, 4, -5, -3, -2, 7, 1, 2, 12, 8, 14] => true??
