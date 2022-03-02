const arr = [1, 3, 4, 6, 8, 9]

function solution(arr) {
    return [arr.filter(num => num % 2 !== 0), arr.filter(num => num % 2 === 0)]
}

console.log(solution(arr))