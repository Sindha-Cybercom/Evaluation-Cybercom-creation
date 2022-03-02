const arr = [1, 2, 3]
const result = solution(arr)

function solution(arr) {
    let i = 1
    while (true) {
        if (!arr.find(ele => ele === i)) {
            return i
        }
        i++
    }
}

console.log(result)