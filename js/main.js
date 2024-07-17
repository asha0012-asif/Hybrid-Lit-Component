const APP = {
    initialData: [
        { id: crypto.randomUUID(), text: "Eat", complete: false },
        { id: crypto.randomUUID(), text: "Code", complete: false },
        { id: crypto.randomUUID(), text: "Sleep", complete: true },
        { id: crypto.randomUUID(), text: "Repeat", complete: false },
    ],

    init: () => {
        console.log("App is running");

        const toDoList = document.getElementById("myTodos");
        const df = new DocumentFragment();

        APP.initialData.forEach(({ id, text, complete }) => {
            const toDoItem = document.createElement("todo-item");

            toDoItem.setAttribute("id", id);
            toDoItem.setAttribute("text", text);
            toDoItem.complete = complete;

            df.append(toDoItem);
        });

        toDoList.append(df);
    },
};

window.addEventListener("DOMContentLoaded", APP.init);
