import { Todo } from "./TodoModel";
import { format, parse, isAfter, isSameDay } from "date-fns";

export class View {
    private _todoRoot: HTMLTableSectionElement;
    private _createTodo: HTMLTableSectionElement;
    private _addStar: HTMLElement;
    private _addTitle: HTMLInputElement;
    private _addDate: HTMLElement;
    private _addDue: HTMLInputElement;
    private _add: HTMLElement;

    constructor() {
        this._todoRoot = document.getElementById("todo-container") as HTMLTableSectionElement;
        this._createTodo = document.getElementById("create-todo") as HTMLTableSectionElement;
        this._addStar = document.getElementById("add-star") as HTMLElement;
        this._addTitle = document.getElementById("add-title") as HTMLInputElement;
        this._addDate = document.getElementById("add-date") as HTMLElement;
        this._addDue = document.getElementById("add-due") as HTMLInputElement;
        this._add = document.getElementById("add") as HTMLElement;
    }

    private clearAddTodo() {
        this._addStar.textContent = "star_border"
        this._addTitle.value = "";
        this._addDue.value = "";
        this._addDate.textContent = format(new Date(), "MMMM d, y");

        this.validateAddTodo()
    }

    private clearAddNote(addNoteRow: HTMLElement) {
        addNoteRow.querySelector("input").checked = false;
        (addNoteRow.querySelector(".note-text") as HTMLInputElement).value = "";

        this.validateAddNote(addNoteRow);
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
        this._addStar.addEventListener("click", (event) => {
            if(this._addStar.textContent == "star") {
                this._addStar.textContent = "star_border";
            } else {
                this._addStar.textContent = "star";
            }

            event.stopImmediatePropagation();
        })

        // Initialize Event Listener For The New Todo Creation Table Row
        this._createTodo.addEventListener("change", (event) => {
            this.validateAddTodo();
        });
    }

    private validateAddTodo(): boolean {
        const ready =  this._addTitle.value != "" &&
                      (isAfter(this._addDue.valueAsDate, parse(this._addDate.textContent, "MMMM d, y", new Date())) ||
                       isSameDay(this._addDue.valueAsDate, parse(this._addDate.textContent, "MMMM d, y", new Date())));

        this._add.dataset["ready"] = ready.toString();
        return ready;
    }

    private validateAddNote(addNoteRow: HTMLElement): boolean {
        const ready = (addNoteRow.querySelector(".note-text") as HTMLInputElement).value != "";

        (addNoteRow.querySelector(".submit-note") as HTMLElement).dataset["ready"] = ready.toString();
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

            // Creation Of The "TodoNote" Components If The Todo Note Is Open
            if(todo.open) {
                // Creation Of The TodoItem's "TodoNote" Creator
                let addNote = this.createElement("tr", ["create-note"]);
                addNote.addEventListener("change", () => {
                    this.validateAddNote(addNote);
                })
                container.appendChild(addNote);      

                let addNoteCheckboxCell = this.createElement("td", ["centered"]);
                addNote.appendChild(addNoteCheckboxCell);

                let addNoteCheckbox = this.createElement("input", ["check", "placeholder"]) as HTMLInputElement;
                addNoteCheckbox.type = "checkbox";
                addNoteCheckbox.checked = false;
                addNoteCheckboxCell.appendChild(addNoteCheckbox);

                let addNoteText = this.createElement("td") as HTMLTableDataCellElement;
                addNoteText.colSpan = 3;
                addNote.appendChild(addNoteText);

                let addNoteTextInput = this.createElement("input", ["note-text"]) as HTMLInputElement;
                addNoteTextInput.type = "text";
                addNoteTextInput.placeholder = "Create Note"
                addNoteText.appendChild(addNoteTextInput);

                let addNoteSubmit = this.createElement("td", ["dropdown", "material-icons", "submit-note"])
                addNoteSubmit.innerText = "check";
                addNoteSubmit.dataset["ready"] = "false";
                addNote.appendChild(addNoteSubmit);

                // Creation Of The TodoItem's "TodoNote" Elements
                todo.notes.forEach(note => {
                    let noteElement = this.createElement("tr");
                    noteElement.dataset["noteId"] = note.id.toString();
    
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
            }
            
            this._todoRoot.appendChild(container);
        });
    }

    public bindAddTodo(handler: Function) {
        this._todoRoot.addEventListener("click", (event) => {
            const target = event.target as HTMLElement

            if(target.id == "add") {
                if(this.validateAddTodo()) {   
                    handler(this._addTitle.value,
                            this._addStar.textContent == "star",
                            this._addDue.valueAsDate,
                            parse(this._addDate.textContent, "MMMM d, y", new Date()));
                    this.clearAddTodo();
                    event.stopImmediatePropagation();
                }
            }
        });
    }

    public bindAddNote(handler: Function) {
        this._todoRoot.addEventListener("click", (event) => {
            const target = event.target as HTMLElement

            if(target.classList.contains("submit-note")) {
                const addNoteRow = target.parentElement as HTMLElement;
                const id = (addNoteRow.parentElement.firstChild as HTMLElement).dataset.id;

                if(this.validateAddNote(target.parentElement)) {   
                    handler(id,
                           (addNoteRow.querySelector(".note-text") as HTMLInputElement).value,
                           (addNoteRow.querySelector("input") as HTMLInputElement).checked);
                    
                    this.clearAddNote(addNoteRow);
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

            if(target.classList.contains("check") && !target.classList.contains("placeholder")) {
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
