//code your solution here
const superbowlWin = (record) => {
    let result = record.find(record => record.result === "W")
    return !!result ? result.year : undefined 
}

// const superbowlWin = (record) => {
//     let result = record.find(record => record.result === "W")
//     if(result === true){
//         return result.year
//     }
// }

