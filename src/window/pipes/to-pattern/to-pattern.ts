import { Pipe, PipeTransform } from '@angular/core';
import { replace, forEach } from 'lodash';

@Pipe({
	name: 'topattern',
})
export class ToPatternPipe implements PipeTransform {
	transform(value: string, ...args) {
		let v = value;
		forEach('\\^$*+?{},()[]|', c => {
			v = replace(v, new RegExp('\\' + c, 'g'), '\\' + c);
		});
		return `^${v}$`;
	}
}
