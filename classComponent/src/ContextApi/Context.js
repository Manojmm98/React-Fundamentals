
// the creation of context api has 3 steps: create

// 1--> create context --> export provider and consumer

// 2--> provide the provide component in app.js and pass the value

// 3--> consume the value at our desired place by wrraping with consumer component with function


// create context 

import React from 'react';

// if we want to pass the default value to context then we have to use default value as parameter to create context
const Context = React.createContext('Raja');

//const Context = React.createContext();

const Provider = Context.Provider

const Consumer = Context.Consumer

export {Provider, Consumer}

export default Context