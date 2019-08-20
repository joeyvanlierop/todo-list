import { Todo } from "./TodoModel";
import { format, parse, isAfter, isSameDay } from "date-fns";

export class View {
    private _todoRoot: HTMLTableSectionElement;
    private _createTodo: HTMLTableSectionElement;
    private _addTitle: HTMLInputElement;
    private _addDate: HTMLElement;
    private _addDue: HTMLInputElement;
    private _add: HTMLElement;

    constructor() {
        this._todoRoot = document.getElementById("todo-container") as HTMLTableSectionElement;
        this._createTodo = document.getElementById("create-todo") as HTMLTableSectionElement;
        this._addTitle = document.getElementById("add-title") as HTMLInputElement;
        this._addDate = document.getElementById("add-date") as HTMLElement;
        this._addDue = document.getElementById("add-due") as HTMLInputElement;
        this._add = document.getElementById("add") as HTMLElement;
    }

    public clearInput() {
        this._addTitle.value = "";
        this._addDue.value = "";
        this._addDate.textContent = format(new Date(), "MMMM d, y");

        this.validate()
    }

    private createElement(elementType: string, classList: string[] = []): HTMLElement {
        let element = document.createElement(elementType) as HTMLElement;
        classList.forEach(className => {
            element.classList.add(className);
        });

        return element
    }

    public initialize() {    
        // Set Placeholder Date To Current Date
        this._addDate.textContent = format(new Date(), "MMMM d, y");

        // Initialize Event Listener For The New Todo Creation Table Row
        this._createTodo.addEventListener("change", (event) => {
            this.validate();
        });
    }

    private validate(): boolean {
        const ready =  this._addTitle.value != "" &&
                      (isAfter(this._addDue.valueAsDate, parse(this._addDate.textContent, "MMMM d, y", new Date())) ||
                       isSameDay(this._addDue.valueAsDate, parse(this._addDate.textContent, "MMMM d, y", new Date())));

        this._add.dataset["ready"] = ready.toString();
        return ready;
    }

    /**
     * Renders All "TodoItem" And "TodoNote" Elements
     * @param {Todo[]} todoList 
     */
    public displayTodos(todoList: Todo[]) {
        // Remove All Child Nodes Except For "<thead>" Elements
        Array.from(this._todoRoot.children).forEach(child => {
            if(!child.classList.contains("permanent")) {
                this._todoRoot.removeChild(child);
            }
        });

        // Creation Of The "TodoItem" Elements
        todoList.forEach(todo => {
            let container = this.createElement("tbody");

            let todoElement = this.createElement("tr", ["todo"]);
            todoElement.dataset["id"] = todo.id.toString();
            todoElement.dataset["open"] = "false";
            container.appendChild(todoElement);

            let star = this.createElement("td", ["star", "material-icons"]); 
            star.textContent = todo.starred ? "star" : "star_border";
            todoElement.appendChild(star);
                
            let title = this.createElement("td", ["title"]);
            title.textContent = todo.title;
            todoElement.appendChild(title);

            let date = this.createElement("td", ["date"]); 
            date.textContent = format(todo.dateCreated, "MMMM d, y");
            todoElement.appendChild(date);

            let due = this.createElement("td", ["due"]); 
            due.textContent = format(todo.dueDate, "MMMM d, y");
            todoElement.appendChild(due);

            let dropdown = this.createElement("td", ["dropdown", "material-icons"]);
            dropdown.textContent = todo.open ? "expand_more" : "expand_less";
            todoElement.appendChild(dropdown);

            container.appendChild(todoElement);

            // Creation Of The TodoItem's "TodoNote" Elements
            todo.notes.forEach(note => {
                let noteElement = this.createElement("tr");
                noteElement.dataset["noteId"] = note.id.toString();
                noteElement.dataset["visible"] = todo.open.toString();

                let noteCheckboxCell = this.createElement("td", ["centered"]);
                noteElement.appendChild(noteCheckboxCell);

                let noteCheckbox = this.createElement("input", ["check"]) as HTMLInputElement;
                noteCheckbox.type = "checkbox";
                noteCheckbox.checked = note.checked;
                noteCheckboxCell.appendChild(noteCheckbox);

                let noteText = this.createElement("td") as HTMLTableDataCellElement;
                noteText.textContent = note.note;
                noteText.colSpan = 4;
                noteElement.appendChild(noteText);

                container.appendChild(noteElement);                
            });

            this._todoRoot.appendChild(container);
        });
    }

    public bindAddTodo(handler: Function) {
        this._todoRoot.addEventListener("click", (event) => {
            const target = event.target as HTMLElement

            if(target.id = "add") {
                if(this.validate()) {             
                    handler(this._addTitle.value,
                            false,
                            this._addDue.valueAsDate,
                            parse(this._addDate.textContent, "MMMM d, y", new Date()));
                    this.clearInput();

                    event.stopImmediatePropagation();
                }
            }
        });
    }

    public bindToggleStar(handler: Function) {
        this._todoRoot.addEventListener("click", (event) => {
            const target = event.target as HTMLElement

            if(target.classList.contains("star")) {
                const id: number = parseInt(target.parentElement.dataset["id"], 10);
                handler(id);

                event.stopImmediatePropagation();
            }
        });
    }

    public bindToggleOpen(handler: Function) {
        this._todoRoot.addEventListener("click", (event) => {
            const target = event.target as HTMLElement

            if(target.parentElement.classList.contains("todo")) {
                const id: number = parseInt(target.parentElement.dataset["id"], 10);
                handler(id);
            }
        });
    }

    public bindToggleChecked(handler: Function) {
        this._todoRoot.addEventListener("click", (event) => {
            const target = event.target as HTMLElement

            if(target.classList.contains("check")) {
                const id: number = parseInt((target.parentElement.parentElement.parentElement.firstChild as HTMLElement).dataset["id"], 10);
                const noteId: number = parseInt(target.parentElement.parentElement.dataset["noteId"], 10);
                handler(id, noteId);
            }
        });
    }

    public bindRemoveTodo(handler: Function) {
        this._todoRoot.addEventListener("click", (event) => {
            const target = event.target as HTMLElement

            if(target.classList.contains("delete")) {
                const id: number = parseInt(target.parentElement.dataset["id"], 10);
                handler(id);
            }
        });
    }
}

