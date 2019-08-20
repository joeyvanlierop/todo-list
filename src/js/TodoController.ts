import { Model, Todo } from './TodoModel';
import { View } from "./TodoView";

class Controller {
    private _model: Model;
    private _view: View;
    
    constructor(model: Model, view: View) {
        this._model = model;
        this._view = view;
        
        this._model.bindRender(this.render);
        this._view.bindToggleStar(this.handleToggleStar);
        this._view.bindToggleOpen(this.handleToggleOpen);
        this._view.bindAddTodo(this.handleAddTodo);
        this._view.bindAddNote(this.handleAddNote);
        this._view.bindRemoveTodo(this.handleRemoveTodo);
        this._view.bindToggleChecked(this.handleToggleChecked);
        this._view.initialize();

        this.render(this._model.todoList);
    }

    public handleToggleStar = (id: number) => {
        this._model.toggleStar(id);
    }

    public handleToggleOpen = (id: number, addNote: HTMLTableRowElement) => {
        this._model.toggleOpen(id); 
    }

    public handleToggleChecked = (id: number, noteId: number) => {
        this._model.toggleChecked(id, noteId);
    }

    public handleAddTodo = (title: string, starred: boolean, dueDate: Date, dateCreated: Date) => {
        this._model.addTodo(title, starred, dueDate, dateCreated);
    }

    public handleAddNote = (id: number, text: string, checked: boolean) => {
        this._model.addNote(id, text, checked);
    }

    public handleRemoveTodo = (id: number) => {
        this._model.removeTodo(id);
    }

    public render = (todoList: Todo[]) => {
        this._view.displayTodos(todoList);
    }
}


// Run-Time
let model = new Model();
let view = new View();
let controller = new Controller(model, view);