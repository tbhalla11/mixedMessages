

let dailyReminder = ["Remember to stretch every hours", "Don't forget to drink water", "Exercising for 30 minutes a day is great for health", "Don't get too busy and forget to eat!", "Take a moment to breathe", "Make the best of your day!"]



let doThisExercise = ["Do 10 jumping-jacks", "Do 10 push-ups", "Do 3 burpees", "Do 10 sit-ups!"]



let randomMeals = ["Have a snack: Cereal", "Have a snack: Apple", "Have a snack: cookies", "Have a snack: Banana"]


console.log(randomMeals[(Math.floor(Math.random()*randomMeals.length))])
console.log(doThisExercise[Math.floor(Math.random()*doThisExercise.length)])
console.log(dailyReminder[Math.floor(Math.random()*dailyReminder.length)])
