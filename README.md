# Fancy Car Application

This is a fancy car application that loads exclusive cars and presents the name of the car, model, make and the picture of the car. You can filter by availability. This is built in NodeJS and React (Redux) Architecture. I have thought about handling data in the application using react lifecycle methods


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

## License

The code is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).