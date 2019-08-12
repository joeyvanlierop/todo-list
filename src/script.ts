import { format } from 'date-fns';


class TodoItem {
    private title: string;
    private notes: string;
    private flagged: boolean;
    private dueDate: Date;

	constructor(title: string, notes: string, flagged: boolean, dueDate: Date) {
		this.title = title;
		this.notes = notes;
        this.flagged = flagged;
		this.dueDate = dueDate;        
    }
}

class TodoNotes {
    //TODO haha
}