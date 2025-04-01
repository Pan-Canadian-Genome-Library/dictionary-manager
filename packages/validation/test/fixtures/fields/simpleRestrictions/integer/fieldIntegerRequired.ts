import type { SchemaIntegerField } from '@dictionary-manager/dictionary';

export const fieldIntegerRequired = {
	name: 'integer-required',
	valueType: 'integer',
	restrictions: {
		required: true,
	},
} as const satisfies SchemaIntegerField;
