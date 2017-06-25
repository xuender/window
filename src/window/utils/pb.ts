import { forEach, capitalize, isUndefined } from 'lodash';

/**
 * 设置pb对象
 */
export function assign(pbObj: any, sources: any) {
	forEach(sources, (v, k) => {
		const name = `set${capitalize(k)}`;
		if (!isUndefined(v) && name in pbObj) {
			pbObj[name](v);
		}
	});
}
