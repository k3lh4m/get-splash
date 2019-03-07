export interface IButtonConfig {
	type: string;
	label: string;
	action(value?: any): void;
}