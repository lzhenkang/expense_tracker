//setup express


const express = require('express')
const app = express()

// tell your app to use the module
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

//setup react
// this line below, sets a layout look to your express project
const reactEngine = require('express-react-views').createEngine();
app.engine('jsx', reactEngine);

// this tells express where to look for the view files
app.set('views', __dirname + '/views');

// this line sets react to be the default view engine
app.set('view engine', 'jsx');

// Set up method-override for PUT and DELETE forms
const methodOverride = require('method-override')
app.use(methodOverride('_method'));

const pg = require('pg');

// Initialise postgres client
const config = {
    user: 'leowzhenkang',
    host: '127.0.0.1',
    database: 'expense_tracker',
    port: 5432
};

const pool = new pg.Pool(config);

pool.on('error', function(err) {
    console.log('idle client error', err.message, err.stack);
});

var sha256 = require('js-sha256');

const SALT = "pokemon";

const cookieParser = require('cookie-parser')

app.use(cookieParser());

var moment = require('moment');

//-------------------------routes----------------------------
app.get('/', (request, response) => {
    // running this will let express to run home.handlebars file in your views folder
    response.render('home')
})

app.get('/addExpense', (request, response) => {
    // running this will let express to run home.handlebars file in your views folder
    response.render('expense')
})

app.get('/overview', (request, response) => {
    // running this will let express to run home.handlebars file in your views folder
    let user_id = request.cookies.userId;
    let hashedCookie = sha256(SALT + user_id);

    if (request.cookies.loggedIn === hashedCookie) {
        const queryString = "SELECT * FROM expense WHERE user_id='" + request.cookies.userId + "'"
        pool.query(queryString, (err, result) => {
            if (err) {
                console.error('query error:', err);
                response.send('query error');
            } else {
                let data = {
                    allExpense: result.rows,
                }
                console.log(data);
                response.render('overview', data)
            }
        })
    } else {
        response.send("Please Log In")
    }
})

//POST function for adding new expense
app.post('/addExpense', (request, response) => {
    const queryString = 'INSERT INTO expense (user_id, category, amount, description) VALUES ($1, $2, $3, $4)'
    let user_id = request.cookies.userId
    const values = [
        user_id,
        request.body.category,
        request.body.amount,
        request.body.description,
    ];

    pool.query(queryString, values, (err, result) => {

        if (err) {
            console.error('query error:', err.stack);
            response.send('query error');
        } else {

            // redirect to add expense page
            response.redirect("/addExpense");
        }
    });
});

app.get('/register', (request, response) => {
    // running this will let express to run home.handlebars file in your views folder
    response.render('register')
})

app.post('/register', (request, response) => {

    // check if the user name is unique in the system

    // if they are, insert the record

    let insertQueryText = 'INSERT INTO members (name, password) VALUES ($1, $2) RETURNING *';

    let hashedPw = sha256(request.body.password + SALT);

    const values = [
        request.body.name,
        hashedPw
    ];

    pool.query(insertQueryText, values, (err, result) => {
        if (err) {
            console.log("error", err);
            response.send("error")
        } else {
            response.send("New account created!")
        }
    });
});

app.get('/login', (request, response) => {
    // running this will let express to run home.handlebars file in your views folder
    response.render('login')
})

app.post('/login', (request, response) => {
    let query = "SELECT * FROM members WHERE name='" + request.body.name + "'";

    pool.query(query, (err, result) => {

        if (err) {
            console.log("error", err);
            response.status(500).send("error")

        } else {

            if (result.rows.length === 0) {
                response.send("EMPTY RESULT");
            } else {

                // hash the request, if its the same as db
                let hashedRequestPw = sha256(request.body.password + SALT);

                // if the password in the db matches the one in the login form
                if (result.rows[0].password === hashedRequestPw) {

                    let user_id = result.rows[0].id;
                    let hashedCookie = sha256(SALT + user_id);


                    // response.cookie('loggedIn', true);
                    response.cookie('loggedIn', hashedCookie);
                    response.cookie('userId', user_id);
                    // response.send( result.rows[0] );
                    response.redirect("/")
                } else {
                    response.send("Incorrect password.")
                }

            }

        }

    });

});

app.get('/logout', (request, response) => {
    response.clearCookie("loggedIn");
    response.clearCookie("userId");
    response.redirect("/");
    // response.send("redirecting in 3 seconds.")
    // setTimeout(function(){ response.redirect("/"); }, 3000);
});

app.delete("/", (request, response) => {
    //read the file in and write out to it
    let query = "DELETE FROM expense WHERE id ='" + request.body.expenseId + "'"
    pool.query(query, (err, result) => {
        if (err) {
            console.log("error", err);
            response.status(500).send("error")

        } else {
            response.redirect("/overview")
        }
    })

});

app.get('/edit', (request, response) => {
    // running this will let express to run home.handlebars file in your views folder
    // running this will let express to run home.handlebars file in your views folder
    let user_id = request.cookies.userId;
    let hashedCookie = sha256(SALT + user_id);

    if (request.cookies.loggedIn === hashedCookie) {
        const queryString = "SELECT * FROM expense WHERE user_id='" + request.cookies.userId + "'"
        pool.query(queryString, (err, result) => {
            if (err) {
                console.error('query error:', err);
                response.send('query error');
            } else {
                let data = {
                    allExpense: result.rows,
                }
                console.log(data);
                response.render('edit', data)
            }
        })
    } else {
        response.send("Please Log In")
    }
})

app.get('/editForm/:id', (request, response) => {
    // running this will let express to run home.handlebars file in your views folder
    let id = request.params.id
    const data = {
        id: id
    }

    response.render('editForm',data)
})

app.put("/edit/:id", (request, response) => {
    //read the file in and write out to it
    const queryText = "UPDATE expense SET category = $1, amount = $2, description = $3 WHERE id = $4 RETURNING *";

    const values = [
        request.body.category,
        request.body.amount,
        request.body.description,
        request.params.id
    ];

    console.log(values)

    pool.query(queryText, values, (err, result) => {
        if (err) {
            console.log("Error", err)
        } else {
            console.log("This is what i updated")
            console.log(result.rows)
            response.redirect('/edit')
        }
    })
});

//Listen to requests on port 3000
const server = app.listen(3000, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'));

let onClose = function() {

    console.log("closing");

    server.close(() => {

        console.log('Process terminated');

        pool.end(() => console.log('Shut down db connection pool'));
    })
};

process.on('SIGTERM', onClose);
process.on('SIGINT', onClose);