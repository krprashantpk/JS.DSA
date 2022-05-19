function factorial(num: number): number {
  if (num % 1 !== 0) throw new Error("Invalid Agrument Exception");
  if (num <= 1) return 1;
  return num * factorial(num - 1);
}

function findOdds(array: number[]): number[] {
  let result: number[] = [];
  if (array === null || array.length === 0) return result;

  function helper(input: number[]) {
    if (input.length === 0) return;
    if (input[0] % 1 !== 0) throw new Error("Invalid Agrument Exception");
    if (input[0] % 2 !== 0) result.push(input[0]);
    helper(input.slice(1));
  }

  helper(array);
  return result;
}

function power(base: number, exponent: number): number {
  if (exponent < 0 || exponent % 1 !== 0)
    throw new Error("Invalid Argument Exception");
  if (exponent === 0) return 1;

  return base * power(base, exponent - 1);
}

function productOfArray(nums: number[]): number {
  if (nums.length === 1) return nums[0];
  return nums[0] * productOfArray(nums.slice(1));
}

function recursiveRange(number: number) {
  if (number <= 0) return number;

  return number + recursiveRange(number - 1);
}

function fib(input: number): number {
  if (input <= 0) throw new Error("Invalid Agrument Exception");

  function helper(num: number): number {
    if (num <= 2) return 1;

    return fib(num - 1) + fib(num - 2);
  }
  return helper(input);
}

//console.assert(fib(1) === 1);
//console.assert(fib(1) === 1);
//console.assert(fib(4) === 3);
//console.assert(fib(10) === 55);
//console.assert(fib(28) === 317811);

function reverse(input: string) {
  if (input === null || input.length <= 1) return input;

  function helper(str: string) {
    if (str.length <= 1) return str;
    return reverse(str.slice(1)) + str[0];
  }
  return helper(input);
}

//console.assert(reverse("r") === "r");
//console.assert(reverse("awesome") === "emosewa");
//console.assert(reverse("racecar") === "racecar");

function isPalindrome(input: string) {
  if (input === null || input.length === 0) {
    throw new Error("Invalid Argument Exception");
  }
  if (input.length === 1) {
    return true;
  }

  function helper(str: string, start: number, end: number): boolean {
    if (str[start] !== str[end]) return false;

    if (start < end) {
      return helper(str, start + 1, end - 1);
    }
    return true;
  }
  return helper(input, 0, input.length - 1);
}

//console.assert(isPalindrome("awesome") === false);
//console.assert(isPalindrome("foobar") === false);
//console.assert(isPalindrome("tacocat") === true);
//console.assert(isPalindrome("amanaplanacanalpanama") === true);
//console.assert(isPalindrome("amanaplanacanalpandemonium") === false);

function isPalindrome2(input: string): boolean {
  if (input === null || input.length == 0) {
    throw new Error("Invalid Argument Exception");
  }

  function helper(str: string): boolean {
    if (str.length === 1) return true;
    if (str.length === 2) return str[0] === str[1];

    if (str[0] === str.slice(-1)) return helper(str.slice(1, -1));
    else return false;
  }

  return helper(input);
}

//console.assert(isPalindrome2("awesome") === false);
//console.assert(isPalindrome2("foobar") === false);
//console.assert(isPalindrome2("tacocat") === true);
//console.assert(isPalindrome2("amanaplanacanalpanama") === true);
//console.assert(isPalindrome2("amanaplanacanalpandemonium") === false);

function capitalizeFirst(array: string[]): string[] {
  var result: string[] = [];

  function helper(strs: string[]) {
    if (strs.length === 0) return;

    if (strs[0].length > 0) {
      let word = strs[0][0].toUpperCase() + strs[0].slice(1);
      result.push(word);
    }
    helper(strs.slice(1));
  }

  helper(array);
  return result;
}
