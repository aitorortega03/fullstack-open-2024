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

const errorHandler = (error, request, response, next) => {
  console.log(error.message)
  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  }
  next(error)
}

app.get("/api/persons", morgan('tiny'), (request, response, next) => {
  Person.find({})
        .then(persons => response.json(persons))
        .catch(error => next(error))
})

app.get("/api/persons/:id", morgan('tiny'), (request, response) => {
  Person.findById(request.params.id)
    .then(person => {
      person ? response.json(person) : response.status(404).end()
    })
    .catch(error => {
      console.log(error)
      response.status(400).send({ error: 'malformatted id' })
    })
})

app.get("/info", morgan('tiny'), (request, response) => {
    response.send(`
    <p>Phonebook has info for ${persons.length} people</p>
    <p>${new Date()}</p>
    `)
})

app.delete('/api/persons/:id', morgan('tiny'), (request, response, next) => {
    Person.findByIdAndDelete(request.params.id)
      .then(person => {
        response.json(person).status(204).end()
      })
      .catch(error => next(error))
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

app.put('/api/persons/:id', morgan(':method :url :status :res[content-length] - :response-time ms :body'), (request, response, next) => {
  const body = request.body

  const person = {
    name: body.name,
    number: body.number
  }

  Person.findByIdAndUpdate(request.params.id, person, {new: true})
    .then(updatedPerson => response.json(updatedPerson))
    .catch(error => next(error))
})

app.use(errorHandler)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})