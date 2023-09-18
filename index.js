// Code your solutions in this file
function writeCards(arrayname,eventName){
    let arrayThankMessage=[]
    for(let i=0; i<arrayname.length; i++){
        arrayThankMessage.push(`Thank you, ${arrayname[i]}, for the wonderful ${eventName} gift!`)
    }
    return arrayThankMessage
}

function countDown(num) {
    while(num>=0){
        console.log(num)
        num--
    }
};