const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Connect to the database
mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true });

// Define a schema for the data
const suggestionSchema = new Schema({
  name: String,
  email: String,
  suggestion: String
});

// Create a model from the schema
const Suggestion = mongoose.model('Suggestion', suggestionSchema);

app.post('/', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const suggestion = req.body.suggestion;

  // Create a new document from the data
  const newSuggestion = new Suggestion({ name, email, suggestion });

  // Save the document to the database
  newSuggestion.save((err) => {
    if (err) return console.error(err);
    res.send('Thank you for your suggestion!');
  });
});