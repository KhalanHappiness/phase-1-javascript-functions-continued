// code your solution here
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}
console.log(saturdayFun("roller-skate"))

const mondayWork = function(activity = "go to the office"){

    return `This Monday, I will ${activity}.`
}

function wrapAdjective(symbol = "*"){

    const InnerWrap = function(message = "special"){
        return `You are ${symbol}${message}${symbol}!`
    }

    return InnerWrap("a hard worker")

    
}

let emphasize =  wrapAdjective("*")
console.log(emphasize("a hard worker"))

function wrapAdjective(symbol = "||"){

    const InnerWrap = function(message = "special"){
        return `You are ${symbol}${message}${symbol}!`
    }

    return InnerWrap("a dedicated programmer")

    
}

let emphatic = wrapAdjective("||")
console.log(emphatic("a dedicated programmer"))
