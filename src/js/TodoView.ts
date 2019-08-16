import { Todo } from "./TodoModel";
import { format } from "date-fns";
import { stringify } from "querystring";

export class View {
    private _todoList: HTMLTableSectionElement;
    private _createTodo: HTMLInputElement;

    constructor() {
        this._todoList = document.getElementById("todo-container") as HTMLTableSectionElement;
        this._createTodo = document.getElementById("create-todo") as HTMLInputElement;
    }

    get createTodo(): string {
        return this._createTodo.value;
    }

    public clearInput() {
        this._createTodo.value = "";
    }

    private createElement(elementType: string, classList: string[]): HTMLElement {
        let element = document.createElement(elementType) as HTMLElement;
        classList.forEach(className => {
            element.classList.add(className);
        });

        return element
    }

    public displayTodos(todoList: Todo[]) {
        while(this._todoList.firstChild) {
            this._todoList.removeChild(this._todoList.firstChild);
        }

        todoList.forEach(todo => {
            let todoElement = this.createElement("tr", ["todo"]);
            todoElement.dataset.id = todo.id.toString();
            todoElement.dataset.open = "false";

            let star = this.createElement("td", ["star", "material-icons"]); 
            star.textContent = todo.starred ? "star" : "star_border";
                
            let title = this.createElement("td", ["title"]);
            title.textContent = todo.title;

            let date = this.createElement("td", ["date"]); 
            date.textContent = format(todo.dateCreated, "MMMM d, YYYY");

            let due = this.createElement("td", ["due"]); 
            due.textContent = format(todo.dueDate, "MMMM d, YYYY");

            let dropdown = this.createElement("td", ["dropdown", "material-icons"]);
            dropdown.textContent = todo.open ? "expand_more" : "expand_less";
            
            todoElement.appendChild(star);
            todoElement.appendChild(title);
            todoElement.appendChild(date);
            todoElement.appendChild(due);
            todoElement.appendChild(dropdown);
            this._todoList.appendChild(todoElement);
        });
    }

    public bindToggleStar(handler: Function) {
        this._todoList.addEventListener("click", (event) => {
            const target = event.target as HTMLElement

            if(target.classList.contains("star")) {
                const id: number = parseInt(target.parentElement.dataset.id, 10);
                handler(id);
            }
        });
    }
}

