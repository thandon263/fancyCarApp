# Fancy Car Application

This is a fancy car application that loads exclusive cars and presents the name of the car, model, make and the picture of the car. You can filter by availability. This is built in NodeJS and React (Redux) Architecture. I have thought about handling data in the application using react lifecycle methods

To see the live project - [Fancy Car - ReactJS/NodeJs/MongoDB](https://fancycar-home.firebaseapp.com/)


## Installation
Run this command in your terminal:

```JavaScript
   $ npm install
```

And then execute:

```JavaScript
   $ npm run dev
```

This is going to start a parallel process of webpack and express server in the terminal and you can navigate to `http://localhost:3000` to view the application.


## Development

```JavaScript
           ...

    const store = createStore(
    reducers, {}, 
    compose(applyMiddleware(thunk)));

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
            
            ...
```
## Setup

1. After downloading the project  "create a folder named  ' config/ '  " on the root of the project.
2. Then create a file named "keys.js" inside the config/ directory.
3. Then add this piece of code to have access to the database.

```JavaScript 
    module.exports = {
        mongoURI: 'mongodb://<Add_Your_Username>:<Add_Your_Password>@ds227352.mlab.com:27352/<database>'
    } 
```
* If you have no account create an account and setup your database.

* To insert data use the Schema inside `models/` and everything else should work just fine.

## License

The code is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
