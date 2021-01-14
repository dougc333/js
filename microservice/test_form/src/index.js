//import React from 'react';


// Engine
const React = {
  index: 0,
  state: [],
  useEffect: (callback, dependencies) => {
    const cachedIndex = React.index;
    const hasChanged = dependencies !== React.state[cachedIndex];
    if (dependencies === undefined || hasChanged) {
      callback();
      React.state[cachedIndex] = dependencies;
    }
    if (React.state[cachedIndex] === undefined) {
      React.state[cachedIndex] = dependencies;
    }
    React.index++;
    return () => console.log('unsubscribed effect')
  },
  useState: (defaultProp) => {
    const cachedIndex = React.index;
    if (!React.state[cachedIndex]) {
      React.state[cachedIndex] = defaultProp;
    }

    const currentState = React.state[cachedIndex];
    const currentSetter = newValue => { 
      React.state[cachedIndex] = newValue
    };
    React.index++;
    return [currentState, currentSetter]
  },
  render: (Component) => {
    const exampleProps = {
      unit: "likes"
    };
    const compo = Component(exampleProps);
    console.log("Render: ", compo.inner);
    React.index = 0;
    return compo;
  }
}

const Component = props => {
  const [count, setCount] = React.useState(0);
  const [name, setName] = React.useState('Steve');

  const exitThis = React.useEffect(() => {
    console.log('Effect ran')
  }, name)

  return {
    type: "div",
    inner: `${count} ${props.unit} for ${name}`,
    click: () => setCount(count + 1),
    personArrived: (person) => setName(person),
    unsubscribe: () => exitThis()
  }
}


// Exercise 1
let App = React.render(Component) // Effect
App = React.render(Component) // No effect
App.click();
App = React.render(Component) // No effect
App.click();
App.personArrived("Peter");
App = React.render(Component) // Effect
App.unsubscribe();
