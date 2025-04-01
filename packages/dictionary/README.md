# Dictionary Manager - Dictionary

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
[<img hspace="5" src="https://img.shields.io/badge/License-AGPL--3.0-blue?style=for-the-badge">](https://github.com/Pan-Canadian-Genome-Library/dictionary-manager/blob/develop/LICENSE)

> **Note**
>
> This may not be the module you are looking to import.
>
> This is a sub-module used as a dependency by both the [Dictionary Manager - Client](https://www.npmjs.com/package/@dictionary-manager/client) and [Dictionary Manager - Server](https://github.com/Pan-Canadian-Genome-Library/dictionary-manager/blob/develop/apps/server/README.md).
>
> If you are building an application that will interact with a Dictionary Manager - Server over HTTP, or wants to validate data using a Dictionary Manager - Dictionary, you likely want to import the [Dictionary Manager - Client](https://www.npmjs.com/package/@dictionary-manager/client).

This package defines the structure of Dictionary Manager - Dictionaries, including providing the TypeScript type definitions to use the dictionary in code and the schemas to validate that a given JSON object is a valid Dictionary Manager - Dictionary.

The Dictionary Manager - Dictionary meta-schema is formally defined in TypeScript and exported as the type `Dictionary`. This definition is created using `Zod` schemas, which are also exported from this package and available for use to confirm a given object is a valid Dictionary Manager - Dictionary.

A [JSON Schema definition](https://github.com/Pan-Canadian-Genome-Library/dictionary-manager/blob/develop/generated/DictionaryMetaSchema.json) of the Dictionary Manager - Dictionary structure is also available if you are looking for a non-TypeScript mechanism for validating Dictionary Manager - Dictionaries.
