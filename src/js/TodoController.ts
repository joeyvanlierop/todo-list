import { Model, Todo, TodoNote } from './TodoModel';
import { View } from "./TodoView";

class Controller {
    private _model: Model;
    private _view: View;
    
    constructor(model: Model, view: View) {
        this._model = model;
        this._view = view;

        this._view.bindToggleStar(this.handleToggleStar);
        
        this._model.bindRender(this.render);

        this.render(this._model.todoList);
    }

    public handleToggleStar = (id: number) => {
        this._model.toggleStar(id);
    }

    public handleAddTodo = (todo: Todo) => {
        this._model.addTodo(todo);
    }

    public handleRemoveTodo = (id: number) => {
        this._model.removeTodo(id);
    }

    public render = (todoList: Todo[]) => {
        this._view.displayTodos(todoList);
    }
}

const t1 = new Todo("Title 1", [], true, new Date());
const t2 = new Todo("Title 2", [], false, new Date());
const m = new Model([t1,t2]);
const v = new View();
const c = new Controller(m, v);