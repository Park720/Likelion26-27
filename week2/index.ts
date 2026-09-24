interface Todo {
    id: number;
    title: string;
    done: boolean;
    memo?: string;
}

const todos: Todo[] = [
    { id: 1, title: "HTML 복습", done: true },
    { id: 2, title: "TS 과제", done: false },
    { id: 3, title: "GitHub push", done: true },
]

console.log(todos);