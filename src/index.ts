import Vue from 'vue'
//Decorators
import Component from 'vue-class-component';
//Components
import Input from './components/input/input.vue';
import ListTask from './components/list-task/list-task.vue';

// Interfaces
import Task from './interfaces/Task'

@Component({
	components: {
		Input,
		ListTask
	}
})
export default class Index extends Vue {
	public tasks: Array<Task> = [];
	public completedTasks: Array<Task> = [];

	mounted() {
		this.tasks = JSON.parse(localStorage.getItem('tasks') || '') || [];
		this.completedTasks = JSON.parse(localStorage.getItem('completedTasks') || '') || [];
	}

	addTask(name: string): void {
		this.tasks.push(<Task>{
			id: Math.random().toString(36).substring(7),
			name,
			completed: false
		})

		this.updateLocalStorage();
	}

	public completeTask(task: Task): void {
		if (!task.completed) {
			const index = this.tasks.findIndex(item => item.id === task.id);
			this.tasks.splice(index, 1);

			this.completedTasks.push(Object.assign(task, {completed: true}));
		} else {
			this.resetTask(task);
		}

		this.updateLocalStorage();
	}

	public deleteTask(task: Task): void {
		const seachArray = task.completed ? this.completedTasks : this.tasks;
		const index = this.completedTasks.findIndex(item => item.id === task.id);
		seachArray.splice(index, 1);

		this.updateLocalStorage();
	}

	private resetTask(task: Task): void {
		const index = this.completedTasks.findIndex(item => item.id === task.id);
		this.completedTasks.splice(index, 1);
		this.tasks.push(Object.assign(task, {completed: false}));

		this.updateLocalStorage();
	}

	private updateLocalStorage(): void {
		localStorage.setItem('tasks', JSON.stringify(this.tasks));
		localStorage.setItem('completedTasks', JSON.stringify(this.completedTasks));
	}

}
