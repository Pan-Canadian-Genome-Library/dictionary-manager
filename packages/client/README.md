# Dictionary Manager Client

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
[<img hspace="5" src="https://img.shields.io/badge/License-AGPL--3.0-blue?style=for-the-badge">](https://github.com/Pan-Canadian-Genome-Library/dictionary-manager/blob/develop/LICENSE)

The Dictionary Manager Client provides developers TypeScript code tools to interact with Dictionary Manager servers and [Dictionary Manager Dictionaries](https://github.com/Pan-Canadian-Genome-Library/dictionary-manager). This package provides data processing functions that will parse and validate submitted data, ensuring that it adheres to the structure defined by the Dictionary. It also provides a REST client to fetch Dictionary data from a Dictionary Manager Server.

## Features

- REST client to interact with Dictionary Manager servers:
  - Fetch dictionary by name and version
  - Fetch difference summaries between dictionary versions
- [Process data](#data-processing) using a Dictionary Manager Dictionary:
  - Convert raw string inputs into properly typed values.
  - Check the structure of input data is valid.
  - Apply all restrictions, both across schemas and on individual fields, to validate input data.
  - Report all validation errors found in the input data.
- Expose [Dictionary Manager Validation](https://www.npmjs.com/package/@dictionary-manager/validation) library functionality:
  - Parsing functions to check and convert data types from string values
  - Validation functions to confirm the structure and content of records match Dictionary Manager schemas
  - This functionality is combined in the Processing functions

## Developer Examples

### Data Fetching

```ts
import * as dictionaryManagerClient from '@dictionary-manager/client';

const dictionarymanagerUrl = 'http://dictionary-manager.example.com';
const dictionaryName = 'dictionary-name';
const currentVersion = '2.3';
const previousVersion = '2.1';

const dictionary = dictionaryManagerClient.rest.fetchSchema(dictionarymanagerUrl, dictionaryName, currentVersion);
const versionUpdates = dictionaryManagerClient.rest.fetchDiff(
	dictionarymanagerUrl,
	dictionaryName,
	currentVersion,
	previousVersion,
);
```

### Data Processing

The following example shows how to process data using the Dictionary Manager Client. The input `donorData` is presented as hardcoded, but in a typical scenario this would be submitted to the application through an uploaded TSV, form entry, or similar user submission system.

To process data records which all belong to the same schema we use the `processSchema` function:

```ts
import * as dictionaryManagerClient from '@dictionary-manager/client';


const dictionary = await getDictionary ManagerDictionary();

const donorData = [{submitter_donor_id: "abc123", gender: "Male", age: "28"}, {submitter_donor_id: "def456", gender: "Female", age: "37"}]

const schemaProcessingResult = dictionaryManagerClient.process.processSchema(dictionary, "donors", donorData);

switch (schemaProcessingResult.status) {
	case 'SUCCESS': {
		const { records } = schemaProcessingResult;
		// use converted and validated records
	}
	case 'ERROR_PARSING': {
		const {  errors, records } = schemaProcessingResult;
		// errors occured parsing records. read the errors that occurred
		// records have been return with their values parsed where possible. If an error occurred, the original input string value is returned
	}
	case 'ERROR_VALIDATION': {
		const { records, errors } = schemaProcessingResult;
		// errors occured validating records. these errors have been returned
		// records were parsed successfully, so this returns all parsed records
	}
```
