const express = require('express')
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const app = express()
const path = require('path')
const route = require('./routes');
const bodyParser = require('body-parser')
const db = require('./config/db')
const methodOverride = require('method-override')
const helpers = require('handlebars-helpers')();


app.engine('.hbs', exphbs.engine({
  helpers:{
    // Function to do basic mathematical operation in handlebar
    math: function(lvalue, operator, rvalue) {lvalue = parseFloat(lvalue);
        rvalue = parseFloat(rvalue);
        return {
            "+": lvalue + rvalue,
        }[operator];
    }
}}));
app.set('view engine', '.hbs');
// app.engine('handlebars', engine());
// app.set('view engine', 'handlebars');
app.set("views", "./src/views");
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded( {extended: true }));
app.use(express.json());
app.use(methodOverride('_method'))
hbs.handlebars.registerHelper('each_when', function(list, k, v, opts) {
  var i, result = '';
  for(i = 0; i < list.length; ++i)
      if(list[i][k] == v)
          result = result + opts.fn(list[i]);
  return result;
});


// Connect DB

route(app);
db.connect();
// parse application/json
app.use(express.json())
app.listen(process.env.PORT || 3000);
