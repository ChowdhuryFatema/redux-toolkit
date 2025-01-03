// const logger = (state) => (next) => (action) => {
//     console.group("action.type", action.type)
//     console.info("prvState", state.getState());

//     let result =  next(action)
//     console.info("nextState", state.getState());
//     console.groupEnd();
//     return result;  
// }

// export default logger;