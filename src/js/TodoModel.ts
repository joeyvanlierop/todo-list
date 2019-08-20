export class Model {
    private _todoList: Todo[];
    private _render: Function;

    constructor() {
        this._todoList = [];
        const todos = JSON.parse(localStorage.getItem("todoList")) || [];

        todos.forEach((todoJson: any) => {
            let todo = new Todo(todoJson._title,
                                todoJson._starred,
                                todoJson._dueDate,
                                todoJson._dateCreated);

            todoJson._notes.forEach((noteJson: any) => {
                todo.addNote(noteJson._note, noteJson._checked);
            });

            this._todoList.push(todo);
        });
    }

    public bindRender(callback: Function) {
        this._render = callback;
    }

    public addTodo(title: string, starred: boolean, dueDate: Date, dateCreated: Date) {
        const todo = new Todo(title, starred, dueDate, dateCreated);
        this._todoList.push(todo);

        this.organizeList(this._todoList);
        this.saveTodos(this._todoList);
    }

    public addNote(id: number, text: string, checked: boolean) {
        this.getTodo(id).addNote(text, checked);

        this.saveTodos(this._todoList);
    }

    public removeTodo(id: number) {
        this._todoList = this._todoList.filter(todo => todo.id != id);

        this.organizeList(this._todoList);
        this.saveTodos(this._todoList);
    }

    public toggleStar(id: number) {
        this.getTodo(id).toggleStarred();

        this.organizeList(this._todoList);
        this.saveTodos(this._todoList);
    }

    public toggleOpen(id: number) {
        this.getTodo(id).toggleOpen();

        this.saveTodos(this._todoList);
    }

    public toggleChecked(id: number, noteId: number) {
        this.getTodo(id).notes.find(note => {
            return note.id == noteId;
        }).toggleChecked();

        this.saveTodos(this._todoList);
    }

    private getTodo(id: number): Todo {
        return this._todoList.find(todo => todo.id == id);
    }

    private saveTodos(todos: Todo[]) {
        this._render(todos);
        localStorage.setItem("todoList", JSON.stringify(todos));
    }

    private organizeList(todos: Todo[]): Todo[] {
        return todos.sort(function(a, b) {
            if(a.starred && !b.starred) {
                return -1;
            } else if(!a.starred && b.starred) {
                return 1;
            } else {
                if(a.dueDate < b.dueDate) {
                    return -1;
                } else if(a.dueDate > b.dueDate) {
                    return 1;
                } else {
                    return 0;
                }
            }
        });
    }

    public get todoList(): Todo[] {
        return this._todoList;
    }
}

export class Todo {
    private _title: string;
    private _notes: TodoNote[];
    private _starred: boolean;
    private _dateCreated: Date;
    private _dueDate: Date;
    private _open: boolean;
    private _noteIdIndex: number;
    private readonly _id: number;
    public static idIndex: number;

	constructor(title: string, starred: boolean, dueDate: Date, dateCreated: Date = new Date(), notes: TodoNote[] = []) {
		this._title = title;
        this._starred = starred;
        this._dueDate = new Date(dueDate);
        this._dateCreated = new Date(dateCreated);
		this._notes = notes;
        this._open = false;
        this._id = ++Todo.idIndex || (Todo.idIndex = 0);
    }

    /**
     * Toggle starred
     */
    public toggleStarred() {
        this._starred = !this._starred;
    }

    /**
     * Toggle open
     */
    public toggleOpen() {
        this._open = !this._open;
    }


    /**
     * Getter title
     * @return {string}
     */
	public get title(): string {
		return this._title;
	}

    /**
     * Getter notes
     * @return {TodoNote[]}
     */
	public get notes(): TodoNote[] {
		return this._notes;
	}

    /**
     * Getter starred
     * @return {boolean}
     */
	public get starred(): boolean {
		return this._starred;
	}

    /**
     * Getter dateCreated
     * @return {Date}
     */
	public get dateCreated(): Date {
		return this._dateCreated;
	}

    /**
     * Getter dueDate
     * @return {Date}
     */
	public get dueDate(): Date {
		return this._dueDate;
	}

    /**
     * Getter open
     * @return {boolean}
     */
	public get open(): boolean {
		return this._open;
    }
    
    /**
     * Getter id
     * @return {number}
     */
    public get id(): number {
        return this._id;
    }

    /**
     * Setter title
     * @param {string} value
     */
	public set title(value: string) {
		this._title = value;
	}

    /**
     * Setter notes
     * @param {TodoNote[]} value
     */
	public set notes(value: TodoNote[]) {
		this._notes = value;
    }
    
    /**
     * Add single note
     * @param {TodoNote[]} value
     */
	public addNote(text: string, checked: boolean = false) {
        const id = ++this._noteIdIndex || (this._noteIdIndex = 0);
        let note = new TodoNote(text, id, checked);

		this._notes.push(note);
	}

    /**
     * Setter starred
     * @param {boolean} value
     */
	public set starred(value: boolean) {
		this._starred = value;
	}

    /**
     * Setter dateCreated
     * @param {Date} value
     */
	public set dateCreated(value: Date) {
		this._dateCreated = value;
	}

    /**
     * Setter dueDate
     * @param {Date} value
     */
	public set dueDate(value: Date) {
		this._dueDate = value;
	}

    /**
     * Setter open
     * @param {boolean} value
     */
	public set open(value: boolean) {
		this._open = value;
	}
}

class TodoNote {
    private _note: string;
    private _checked: boolean;
    private readonly _id: number;

    constructor(note: string, id: number, checked: boolean) {
        this._note = note;
        this._id = id;
        this._checked = checked;
    }

    /**
     * Getter note
     * @return {string}
     */
	public get note(): string {
		return this._note;
	}

    /**
     * Getter checked
     * @return {boolean}
     */
	public get checked(): boolean {
		return this._checked;
    }
    
    /**
     * Getter id
     * @return {boolean}
     */
	public get id(): number {
		return this._id;
	}

    /**
     * Setter note
     * @param {string} value
     */
	public set note(value: string) {
		this._note = value;
	}
    
    /**
     * Setter checked
     * @param {boolean} value
     */
	public set checked(value: boolean) {
		this._checked = value;
    }
    
    /**
     * Toggle checked
     */
	public toggleChecked() {
		this._checked = !this._checked;
    }
}
