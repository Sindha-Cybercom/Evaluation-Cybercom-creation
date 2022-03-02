const symptoms = {
    "lowMood": "Low mood",
    "sleepOrAppetiteChanges": "Sleep or appetite changes",
    "withdrawal": "Withdrawal",
    "dropInFunctioning": "Drop in functioning",
    "increasedSensitivity": "Increased sensitivity",
    "apathy": "Apathy",
    "feelingDisconnected": "Feeling disconnected",
    "illogicalThinking": "Illogical thinking",
    "nervousness": "Nervousness"
}

const goals = {
    "hydrate": {
        "title": "Hydrate",
        "description": "",
        "symptoms": [
            "lowMood",
            "apathy"
        ]
    },
    "eatBreakfast": {
        "title": "Eat breakfast",
        "description": "",
        "symptoms": [
            "lowMood"
        ]
    },
    "yoga": {
        "title": "Yoga",
        "symptoms": [
            "lowMood"
        ]
    },
    "petADog": {
        "title": "Pet a dog",
        "description": "",
        "symptoms": [
            "feelingDisconnected",
            "lowMood",
            "increasedSensitivity"
        ]
    },
    "PerformARandomActOfKindness": {
        "title": "Perform a random act of kindness",
        "description": "",
        "symptoms": [
            "feelingDisconnected",
            "lowMood"
        ]
    },
    "excercise": {
        "title": "Excercise",
        "description": "",
        "symptoms": [
            "lowMood"
        ]
    },
    "deepBreathingExercises": {
        "title": "Deep breathing exercises",
        "description": "",
        "symptoms": [
            "illogicalThinking",
            "nervousness"
        ]
    },
    "meditate": {
        "title": "Meditate",
        "description": "",
        "symptoms": [
            "lowMood",
            "dropInFunctioning",
            "illogicalThinking"
        ]
    },
    "socialActivity": {
        "title": "Social Activity",
        "description": "",
        "symptoms": [
            "feelingDisconnected",
            "withdrawal"
        ]
    },
    "noScreensAtBedTime": {
        "title": "No screens at bed time",
        "description": "",
        "symptoms": [
            "sleepOrAppetiteChanges"
        ]
    },
    "melatonin": {
        "title": "Melatonin",
        "description": "",
        "symptoms": [
            "sleepOrAppetiteChanges"
        ]
    }
}


function solution(goal) {
    const goalObj = goals[goal]
    goalObj["symptoms"] = goalObj["symptoms"].map(symptom => symptoms[symptom])
    return goalObj
}

console.log(solution('yoga'))
console.log(solution('meditate'))