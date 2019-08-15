import { format } from 'date-fns';

const templateTodo = document.getElementById("template-todo") as HTMLTemplateElement;
const templateNote = document.getElementById("template-note") as HTMLTemplateElement;

class TodoItem {
    private _title: string;
    private _notes: TodoNote[];
    private _starred: boolean;
    private _dateCreated: Date;
    private _dueDate: Date;
    private _element: HTMLElement;

	constructor(title: string, notes: TodoNote[], starred: boolean, dueDate: Date) {
		this._title = title;
		this._notes = notes;
        this._starred = starred;
        this._dueDate = dueDate;
        this._dateCreated = new Date();
        this._element = this.generateElement();
        
        document.getElementById("todo-container").appendChild(this._element);
    }

    public generateElement(): HTMLElement {
        let todoElement = templateTodo.content.cloneNode(true) as HTMLElement;

        this._starred ? todoElement.querySelector(".star").innerHTML = "star" 
                      : todoElement.querySelector(".star").innerHTML = "star_border";
        todoElement.querySelector(".title").innerHTML = this._title;
        todoElement.querySelector(".date").innerHTML = format(this._dateCreated, "MMMM d, y");
        todoElement.querySelector(".due").innerHTML = format(this._dueDate, "MMMM d, y");
        todoElement.querySelector(".star").addEventListener("click", () => {
            this.toggleStarred();
        });
        todoElement.querySelector(".dropdown").addEventListener("click", () => {
            this.toggleOpen();
        });

        return todoElement;
    }

    public toggleStarred() {
        console.log(this._element.querySelector(".title"));
        this._starred = !this._starred;
        
        if(this._starred) {
            this._element.querySelector(".star").innerHTML = "star_border";            
        } else {
            this._element.querySelector(".star").innerHTML = "star";

        }
    }

    public toggleOpen() {
        console.log(this._element)
        if(this._element.dataset.open == "true") {
            this._element.dataset.open = "false"
            this._element.querySelector(".dropdown").innerHTML = "expand_more";
        } else {
            this._element.dataset.open = "true"
            this._element.querySelector(".dropdown").innerHTML = "expand_less";
        }

        this._notes.forEach(note => {
            note.setVisible(this._element.dataset.open);
        });
    }
}

class TodoNote {
    private _note: string;
    private _element: HTMLElement;

    constructor(note: string) {
        this._note = note;

        this._element = document.createElement("dv")
        this._element.innerHTML = this.note;
    }

    public open() {
        this._element.dataset.visible = "true";
    }

    public close() {
        this._element.dataset.visible = "false";
    }

    public setVisible(visible: string) {
        this._element.dataset.visible = visible;
    }

    get note(): string {
        return this._note;
    }

    set note(note: string) {
        this._note = note;
        this._element.innerHTML = this.note;
    }
}

let t = new TodoItem("Title", [], false, new Date());