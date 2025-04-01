import type { SchemaStringField } from '@dictionary-manager/dictionary';

export const fieldStringRequired = {
	name: 'string-required',
	valueType: 'string',
	description: 'Required field. Any string value.',
	restrictions: {
		required: true,
	},
} as const satisfies SchemaStringField;
