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
        this._view.bindRemoveTodo(this.handleRemoveTodo);
        this._view.bindToggleChecked(this.handleToggleChecked);
        this._view.initialize();

        this.render(this._model.todoList);
    }

    public handleToggleStar = (id: number) => {
        this._model.toggleStar(id);
    }

    public handleToggleOpen = (id: number) => {
        this._model.toggleOpen(id);
    }

    public handleToggleChecked = (id: number, noteId: number) => {
        this._model.toggleChecked(id, noteId);
    }

    public handleAddTodo = (title: string, starred: boolean, dueDate: Date, dateCreated: Date) => {
        this._model.addTodo(title, starred, dueDate, dateCreated);
    }

    public handleRemoveTodo = (id: number) => {
        this._model.removeTodo(id);
    }

    public render = (todoList: Todo[]) => {
        this._view.displayTodos(todoList);
    }
}


let m = new Model();
let v = new View();
let c = new Controller(m, v);
// let t1 = new Todo("Title 1", true, new Date());
// let t2 = new Todo("Title 2", false, new Date());
// t1.addNote("This is a test note", true);
// t1.addNote("This is the second test note");
// t2.addNote("This is the second test note");
// t2.addNote("This is the second test note");
// t2.addNote("This is the second test note");
// m.addTodo(t1);
// m.addTodo(t2);