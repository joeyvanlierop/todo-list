export class Model {
    private _todoList: Todo[];
    private _render: Function;

    constructor(todoList: Todo[] = []) {
        this._todoList = todoList;
    }

    public bindRender(callback: Function) {
        this._render = callback;
    }

    public addTodo(todo: Todo) {
        this._todoList.push(todo);
        this._render(this._todoList);
    }

    public removeTodo(id: number) {
        this._todoList = this._todoList.filter(todo => todo.id != id);
        this._render(this._todoList);
    }

    public toggleStar(id: number) {
        this.getTodo(id).toggleStarred();
        this._render(this._todoList);
    }

    private getTodo(id: number): Todo {
        return this._todoList.find(todo => todo.id == id);
    }

    get todoList(): Todo[] {
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
    private _id: number;
    private static idIndex: number;

	constructor(title: string, notes: TodoNote[], starred: boolean, dueDate: Date) {
		this._title = title;
		this._notes = notes;
        this._starred = starred;
        this._dueDate = dueDate;
        this._dateCreated = new Date();
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

export class TodoNote {
    private _note: string;
    private _checked: boolean;

    constructor(note: string) {
        this._note = note;
        this._checked = false;
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
}
