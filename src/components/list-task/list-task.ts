import Vue from 'vue'
//Decorators
import Component from 'vue-class-component';
import { Emit, Prop } from 'vue-property-decorator';
//Interfaces
import Task from '../../interfaces/Task';

@Component
export default class ListTask extends Vue {
	@Prop() readonly task!: Task
	public hover = <boolean>false;

	private hoverTimeout = <any>null;

	public setHover(state: boolean): void {
		if (state) {
			this.hoverTimeout = setTimeout(() => {
				this.hover = true;
			}, 100)
		} else {
			clearTimeout(this.hoverTimeout);
			this.hover = false;
		}
	}

	@Emit()
	public completeTask(): Task {
		return this.task
	}

	@Emit()
	public deleteTask(): Task {
		return this.task
	}
}
