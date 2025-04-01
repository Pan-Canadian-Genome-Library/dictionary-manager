import type { SchemaStringField } from '@dictionary-manager/dictionary';

export const fieldStringArrayNoRestriction = {
	name: 'any-string-array',
	valueType: 'string',
	isArray: true,
} as const satisfies SchemaStringField;
