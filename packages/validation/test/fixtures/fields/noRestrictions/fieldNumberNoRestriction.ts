import type { SchemaNumberField } from '@dictionary-manager/dictionary';

export const fieldNumberNoRestriction = {
	name: 'any-number',
	valueType: 'number',
} as const satisfies SchemaNumberField;
