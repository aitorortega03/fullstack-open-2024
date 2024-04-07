require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()
const Person = require('./models/person')
const person = require('./models/person')

app.use(express.static('dist'))

app.use(express.json())
app.use(cors())

let persons = [
    { 
      id: 1,
      name: "Arto Hellas", 
      number: "040-123456"
    },
    { 
      id: 2,
      name: "Ada Lovelace", 
      number: "39-44-5323523"
    },
    { 
      id: 3,
      name: "Dan Abramov", 
      number: "12-43-234345"
    },
    { 
      id: 4,
      name: "Mary Poppendieck", 
      number: "39-23-6423122"
    }
]

app.get("/api/persons", morgan('tiny'), (request, response) => {
  Person.find({})
        .then(persons => response.json(persons))
})

app.get("/api/persons/:id", morgan('tiny'), (request, response) => {
  Person.findById(request.params.id).then(person => {
    response.json(person)
  })
})

app.get("/info", morgan('tiny'), (request, response) => {
    response.send(`
    <p>Phonebook has info for ${persons.length} people</p>
    <p>${new Date()}</p>
    `)
})

app.delete('/api/persons/:id', morgan('tiny'), (request, response) => {
    const id = Number(request.params.id)
    const personDeletedResponse = persons.find(person => person.id === id)
    persons = persons.filter(person => person.id !== id)
  
    response.json(personDeletedResponse).status(204)
})

morgan.token('body', (req, res) => JSON.stringify(req.body));
 
app.post('/api/persons', morgan(':method :url :status :res[content-length] - :response-time ms :body'), (request, response) => {
  const body = request.body

  if (!body.name) {
    return response.status(400).json({ 
      error: 'name missing' 
    })
  }

  if (!body.number) {
    return response.status(400).json({
      error: "number missing"
    })
  }

  const person = new Person({
    name: body.name,
    number: body.number
  })

  person.save()
    .then(savedPerson => response.json(savedPerson))
    
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})