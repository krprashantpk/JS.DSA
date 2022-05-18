

function factorial(num: number) : number {

    if(num % 1 !==0) throw new Error("Invalid Agrument Exception");
    if (num <= 1) return 1;
    return num * factorial(num - 1);
}

function findOdds(array : number[]) : number[]{
    let result :number[] = [];
    if(array ===null || array.length===0) return result;
    
    function helper(input : number[]){
        if(input.length===0) return;
        if(input[0] % 1 !==0) throw new Error("Invalid Agrument Exception");
        if(input[0]%2 !==0) result.push(input[0]);
        helper(input.slice(1));
    }

        helper(array);
    return result;
}


function IsPalindrome(input : string) : boolean{

    if(input===null || input.length===0) return false;

    let result = true;
    for (let index = 0; index < input.length/2 + 1; index++) {
        if(input[index] !==input[input.length-index-1]) {
            result = false;
            break;
        }
    }
    return result;

}

function IsPalindromeRecursive(input :string): boolean{

    if(input===null || input.length===0) return false;

    function helper(str : string, start:number, end:number):boolean{
        if(start===end || end-start===1) return true;
        if(str[start] !==str[end]) return false;

       return helper(str, start+1, end-1);
    }
    return helper(input, 0, input.length-1);
}


function Power(input :number, pow:number) :  number{

    if(pow <0 || pow %1 !==0) throw new Error("Invalid Argument Exception");
    if(pow===0) return 1;
    
    return input * Power(input, pow-1);
}

function productOfArray(nums : number[]):number{

    if(nums.length===1) return nums[0];

    return nums[0] * productOfArray(nums.slice(1))  
}

function recursiveRange(number : number){
    if(number <=0) return number;

    return number + recursiveRange(number-1);

}

//console.log( productOfArray([1,2,3,10]) )
//console.log(Power(3,3));
//console.log(IsPalindrome("racecar"));
//console.log(IsPalindromeRecursive("racecar"));
//console.log(factorial(1.1))
//findOdds([1,2,4,5,6,7,8]).forEach(value=>console.log(value));