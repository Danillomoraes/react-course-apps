import { createStore } from 'redux';

const add = ({a, b}) => {
  return a+b;
}

console.log(add({a: 1, b: 2}))

const incrementCount = ({ incrementBy = 1} = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

const decrementBY = ({ decrementBy = 1} = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const setCount = ({ count }) => ({
  type: 'SET',
  count
});

const resetCount = () => ({
  type: 'RESET'
});

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type){
    case 'INCREMENT':
      let incrementBy = action.incrementBy ? action.incrementBy : 1  
      return {
        count: state.count + incrementBy
      };
    case 'DECREMENT':
      let decrementBy = action.decrementBy ? action.decrementBy : 1        
      return {
        count: state.count - decrementBy
      }
    case 'SET':
      let count = action.count ? action.count : 0;
      return {
        count
      }
    case 'RESET':
      return {
        count: 0
      }
    default:
      return state;
  }
});

const unsubcribe = store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch(incrementCount({incrementBy: 5}))

store.dispatch(incrementCount())

store.dispatch(resetCount())

store.dispatch(decrementBY());

store.dispatch(decrementBY({ decrementBy: 10}));

store.dispatch(setCount({ count: 101}))
