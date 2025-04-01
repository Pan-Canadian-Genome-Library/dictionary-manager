import type { SchemaIntegerField } from '@dictionary-manager/dictionary';

export const fieldIntegerNoRestriction = {
	name: 'any-integer',
	valueType: 'integer',
} as const satisfies SchemaIntegerField;
