const Middleware = (store) => (next) => (action) => {
    console.log("Dispatched Action:", action.type);
    console.log("Payload:", action.payload);
    console.log("Current State:", store.getState());
    return next(action);
  };
  
  export default Middleware;
  