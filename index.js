// defining a function  
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`; 
}
saturdayFun(); 

// defining function as an expression 
const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`; 
}
mondayWork(); 

// defining a function that returns another function 
let wrapAdjective = function(flair = "*") {
    return function(adjective){
        return `You are ${flair}${adjective}${flair}!`; 
    }
}
