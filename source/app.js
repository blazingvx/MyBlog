const express = require('express');
const exphbs  = require('express-handlebars');
const markdown = require('markdown-it')();
const fs = require('fs');

const app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
  const blogPost = fs.readFileSync('blog-post.md', 'utf8');
  const html = markdown.render(blogPost);
  res.render('home', { content: html });
});

app.use(express.static('public'));

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
