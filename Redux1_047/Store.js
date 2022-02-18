const addCount = {
    type: "INC_COUNT",
    payload :1
}

const decCount = {
    type: "DEC_COUNT",
    payload :1
}

const addTodo = {
    type: "ADD_TODO",
    payload :{id:1,status:false,title:"Learn Redux"}
};

class Store{
    Constructor(reducer,init){
        this.reducer = reducer;
        this.state = init;
    }

    getState(){
        return this.state
    }

    dispatch(actions){
      this.state = this.reducer(this.state,actions)
    }
}

const reducer = (store,action)=>{
    // if(action.type === "INC_COUNT") store.count += action.payload;

    // if(action.type === "ADD_TODO") store.todos.push(action.payload)
    // return store;

    switch(action.type){
        case "INC_COUNT":
            return {...store,count: store.count + action.payload}
    
        default : 
            return store 
    }
}

const init = { count:0,todos:[]}

const store = new Store(reducer,init)

console.log(store.getState());

store.dispatch({type:"INC_COUNT",payload:1})

console.log(store.getState());





