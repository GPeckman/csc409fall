function fullName(first, last) {
    return `${first} ${last}`
}

function mean(nums) {
    let sum = 0
    for (let num of nums) {
        sum += num
    }
    return sum / nums.length
}

function numSpaces(num) {
    let spaces = ''
    let string = ''
    for (let i = 1; i <= num; i++) {
        string += `${spaces}${i}\n`
        spaces += ' '
    }
    console.log(string)
}

console.log(fullName("Garrett", "Peckman"))
console.log(mean([1,2,3,4,5,6]))
numSpaces(5)