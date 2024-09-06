export type Todo = {
    id: number;
    text: string;
    done: boolean;
    description?: string;
}

// generate Todo sample data
const todoData = [
    { id: 1, text: 'Learn React', done: true },
    { id: 2, text: 'Learn TypeScript', done: true },
    { id: 3, text: 'Learn GraphQL', done: false, description: 'GraphQL is a query language for APIs' },
    { id: 4, text: 'Learn Node.js', done: false },
    { id: 5, text: 'Learn MongoDB', done: false },
]

export const getTodos = (): Promise<Todo[]> => {
    // wait for 0.2 second to simulate API call
    return new Promise<Todo[]>((resolve) => {
        setTimeout(() => {
            resolve(todoData)
        }, 200)
    })
}

export const getTodo = (id: number): Promise<Todo> => {
    // wait for 0.2 second to simulate API call
    return new Promise<Todo>((resolve) => {
        setTimeout(() => {
            const todo = todoData.find(todo => todo.id === id)
            if (todo) {
                resolve(todo)
            } else {
                throw new Error('Todo not found')
            }
        }, 200)
    })
}