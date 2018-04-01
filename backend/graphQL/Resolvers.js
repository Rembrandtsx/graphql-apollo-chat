const messages = [
  {id: 0, text: 'Hello World!', user: 0},
  {id: 1, text: 'Hey', user: 1}
]
const users = [
  {id: 0, name: 'GraphQL'},
  {id: 1, name: 'Apollo'}
]
module.exports = {
  Query: {
    messages: _ => messages,
    users: (root, {id}) => users.find( user => user.id == id)
  },
  Mutation: {
    sendMessage: (root, {text, user}) => {
const new_message = {id: messages.length + 1, text: text}
const old_user = users.find( db_user => db_user.name == user)
      if (old_user)
      {
        new_message.user = old_user.id
      }
      else
      {
        const new_user = {name: user, id: users.length + 1}
        users.push(new_user)
new_message.user = new_user.id
      }
      messages.push(new_message)
      return new_message
    }
  },
  User: {
    messages: user => messages.filter( message => message.user == user.id)
  },
  Message: {
    user: message => users.find( user => user.id == message.user)
  }
}
