module.exports = function check(str, bracketsConfig) {
    let arr = [str[0]]
    let result 

    for (let i = 1; i < str.length; i++) {
        for (let j = 0; j < bracketsConfig.length; j++) {
            if (bracketsConfig[j].includes(str[i])) {
                if(bracketsConfig[j].includes(arr[arr.length-1])){
                  if(bracketsConfig[j][0]==arr[arr.length-1]&&bracketsConfig[j][1]==str[i]){
                    arr.pop()
                  }else arr.push(str[i])
                }else arr.push(str[i])
            }
        }
    }

    if (arr.length == 0) {
        result = true
    } else result = false

    return result
}
