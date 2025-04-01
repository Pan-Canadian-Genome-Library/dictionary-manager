import type { SchemaStringField } from '@dictionary-manager/dictionary';

export const fieldStringUnique = {
	name: 'unique-string',
	valueType: 'string',
	unique: true,
} as const satisfies SchemaStringField;
