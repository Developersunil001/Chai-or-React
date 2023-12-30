import { createContext, useContext } from "react";

export const TodoContext = createContext({
     todos: [
          {
               id: 1,
               todo: "Todo mssg",
               completed: false,
          }
     ],
     addTodo: (todo) => { },
     deleteTodo: (id) => { },
     updateTodo: (todo, id) => { },
     togglecomplete: (id) => { }
})

export const useTodo = () => {
     return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider

