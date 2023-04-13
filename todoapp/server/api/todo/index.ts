import { db } from '@/server/db';
import { v4 as uuid } from "uuid";

interface Todo {
    id: string,
    item: string,
    completed: boolean
}

export default defineEventHandler(async(event) => {
    const method = event.req.method;
    
    if (method === 'GET') {
        return db.todos;
    }

    if (method === 'POST') {
        const body = await readBody(event);

        if (!body.item) throw new Error();

        const newTodo = <Todo>{
            id: uuid(),
            item: body.item,
            completed: false
        }

        db.todos.push(newTodo);

        return newTodo;
    }
});