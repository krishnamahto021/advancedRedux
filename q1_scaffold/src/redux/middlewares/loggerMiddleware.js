// create and export middleware function here
export const loggerMiddleware = (store)=>{
    return function(next){
        return function(action){
            console.log(action.type);
            next(action);            
        }
    }
}
