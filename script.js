function randomGen (num) {
    return Math.floor(Math.random()* num)
    // returns random value used to pull message
}

const mixedMessages = {

    dailyFitness: ['10 push-ups', '10 sit-ups', '5 jumping-jacks', '5 burpees'],
    dailySnack: ['Apple', 'Chips', 'Banana', 'Cake'],
    dailyMotivation: ['Keep it up', 'Your almost there', 'YOU GOT THIS!']
    // Arrays of quotes that will be used to create the message
}

let finalMessage = [];

for (properties in mixedMessages){
    let num = randomGen(mixedMessages[properties].length)
    switch(properties){
        case 'dailyFitness':
        finalMessage.push(`Your daily fitness activity for today is: ${mixedMessages[properties][num]}.`)
        break;
        case 'dailySnack':
            finalMessage.push(`Your snack for today is....${mixedMessages[properties][num]}`)
        break;
        case 'dailyMotivation':
            finalMessage.push(`Regarding all your goals: ${mixedMessages[properties][num]}`)
        break;
            default:
            finalMessage.push('error')
    }
}

function format(finalMessage){
    const finalFormat = finalMessage.join('\n\n')
    console.log(finalFormat)
}

format(finalMessage);