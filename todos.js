const todos = 
[
    {
        id: 1,
        task: "drink water",
        isCompleted: true
    },
    {
        id: 2,
        task: "attend meeting",
        isCompleted: true
    },
    {
        id: 3,
        task: "dentist appt",
        isCompleted: false
    }
]

todos.forEach(function(todo)
{
    console.log(todo.task)
})

todoTask = todos.map(function(todo) 
{
    return todo.task
})

console.log(todoTask)

const todoComplete = todos.filter(function(todo) 
{
    return todo.isCompleted === true;
})

console.log(todoComplete)

todos.forEach((todo) => console.log(todo))