import Vue from 'vue'
import Component from 'vue-class-component';

// Decorators
import { Emit, Prop, Ref, Watch } from 'vue-property-decorator'

@Component
export default class Input extends Vue {
	@Prop() readonly placeholder!: string
	@Ref('inputRef') readonly inputElement!: HTMLInputElement;

	public input: string = '';
	public focus: boolean = false;
	public error: boolean = false;
	private maxChars: number = 60;
	public charsLeft: number = this.maxChars;

	private mounted() {
		document.addEventListener('keydown', this.keyListener);
	}

	@Watch('input')
	private onInputChanges(value: string, prevValue: string) {
		if(this.charsLeft === 0 && value.length > prevValue.length){
			this.input = prevValue;
		}
		this.charsLeft = this.maxChars - value.length;
	}

	public focusInput(): void {
		this.focus = true;
		document.removeEventListener('keydown', this.keyListener);
	}

	public blurInput(): void {
		this.focus = false;
		document.addEventListener('keydown', this.keyListener);
	}

	public clearInput(): void {
		this.focus = false;
		this.input = '';
	}

	validateTask({target = {} as HTMLInputElement}): void {
		if (target.value.trim().length > 0) {
			this.submitTask(target.value)
		} else {
			this.error = true;
			setTimeout(() => this.error = false, 300);
		}
	}

	@Emit()
	submitTask(value: string): string {
		this.input = '';
		this.inputElement.blur();

		return value;
	}

	private keyListener(event: KeyboardEvent) {
		if (event.shiftKey && event.key === 'K') {
			this.inputElement.focus();
			event.preventDefault();
		}
	}
}
