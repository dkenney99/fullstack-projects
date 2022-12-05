const { response } = require("express")
const express = require("express")
const morgan = require('morgan')
const app = express()

app.use(morgan('tiny'));
app.use(express.json())

let persons = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]


app.get("/", (request, response) => {
    response.send("<h1>Hello World!</h1>")
})

app.get("/info", (request, response) => {
    const numberOfPeople = persons.length
    response.send(
        `<p>Phonebook has info for ${numberOfPeople} people</p><p>${new Date()}`
        )
})

app.get("/api/persons", (request, response) => {
    response.json(persons)
})

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})

app.get("/api/persons/:id", (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)
    
    if (person) {
        response.json(person)
    } else {
        response.status(404).end()
    }
})

app.delete("/api/persons/:id", (request,response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id === id)

    response.status(204).end()
})

const generateId = () => {
    return Math.floor(Math.random() * 10000);
}

app.post("/api/persons", (request, response) => {
    const body = request.body;
    const duplicateConfirmation = (name) => {
        let checker = false;
        persons.forEach(person => {
            if (name == person.name) {
                checker = true;
            }
        })
        return checker;
    }

    if (!body.name || !body.number) {
        return response.status(400).json({
            error: "Name or number is missing"
        })
    }

    if (duplicateConfirmation(body.name)) {
        return response.status(400).json({
            error: "Duplicate name"
        })
    }

    const person = {
        name: body.name,
        number: body.number,
        id: generateId(),
    }

    persons.concat(person)

    response.json(persons)
})

