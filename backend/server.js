//Express
const bodyparser = require('body-parser')
const path = require('path')
const express = require('express')
const PORT = process.env.PORT || 9090
//GraphQL
const graphqlHTTP = require('express-graphql')
const schema = require('./graphql/Schema')
//CORS
const cors = require('cors')
const app = express()
app.use('*', cors({
  credentials: true
}))
app.use(bodyparser())
app.use('/graphql', graphqlHTTP( {schema, graphiql: true} ))
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(PORT, console.log)
