function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}
const refs = {
  firstDelay: document.querySelector('button')
  
};
console.log(refs.firstDelay);