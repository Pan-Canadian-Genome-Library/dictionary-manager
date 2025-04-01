# PCGL Dictionary manager - Data Dictionary Management and Validation

> [!IMPORTANT]  
> This repository is a fork of [Lectern](https://github.com/overture-stack/lectern), part of [Overture](https://www.overture.bio/), a collection of open-source software microservices used to create platforms for researchers to organize and share genomics data. This project serves as a customized version of the original repository, adapted to fulfill the specific requirements and functionality needed for [PCGL](https://genomelibrary.ca/)

[<img hspace="5" src="https://img.shields.io/badge/License-AGPL--3.0-blue?style=for-the-badge">](https://github.com/Pan-Canadian-Genome-Library/dictionary-manager/blob/develop/LICENSE)
[<img hspace="5" src="https://img.shields.io/badge/Code%20of%20Conduct-blue?style=for-the-badge">](CODE_OF_CONDUCT.md)

PCGL Dictionary manager, provides a system for defining Schemas that will validate the structured data collected by an application. The core is a web-server application that handles storage and version management of data dictionaries. Data dictionaries are collections of schemas that define the structure of tabular data files (like TSV). This application provides functionality to validate the structure of data dictionaries, maintain a list of dictionary versions, and to compute the difference between dictionary versions.

</br>

## Repository Structure

This repository is organized as a monorepo using [`pnpm-workspace`](https://pnpm.io/workspaces) and [`nx`](https://nx.dev/).

> **Note:**
> You will need to use [`pnpm`](https://pnpm.io/installation) instead of `npm` to manage dependencies in this code base. PNPM will take care of linking all modules together correctly.

### Workspace Modules

The repository is organized with the following directory structure:

```
.
├── apps/
│   └── server
└── packages/
    ├── client
    ├── dictionary
    └── validation
```

The modules in the monorepo are organized into two categories:

- **apps/** - Standalone processes meant to be run. These are published to [ghcr.io](https://ghcr.io) as container images.
- **packages/** - Reusable packages shared between applications and other packages. Packages are published to [NPM](https://npmjs.com).
- **scripts** - Utility scripts for use within this repo.

## Component Overview

| Component                                   | Package Name                   | Path                 | Description                                                                      |
| ------------------------------------------- | ------------------------------ | -------------------- | -------------------------------------------------------------------------------- |
| [Server](apps/server/README.md)             | @dictionary-manager/server     | apps/server/         | Web server application.                                                          |
| [Client](packages/client/README.md)         | @dictionary-manager/client     | packages/client      | TypeScript Client to interact with Lectern Server and Lectern data dictionaries. |
| [Dictionary](packages/dictionary/README.md) | @dictionary-manager/dictionary | packages/dictionary  | Dictionary meta-schema definition, includes TS types, and Zod schemas.           |
| [Validation](packages/validation/README.md) | @dictionary-manager/validation | packages/validation/ | Validate data using Lectern Dictionaries.                                        |

## Development Environment

### Prerequisites

- PNPM (instead of npm)
- Node.js
- Docker (for running containers)

### Local Development

You can install all dependencies for the entire repo from the root (as defined in the `pnpm-lock.yaml`) with the command:

```bash
pnpm install
```

### Common Commands

Run these from the root directory, or if you are in a sub directory then use `pnpm -w`:

#### Build Everything

```bash
pnpm build:all
```

#### Test Everything

```bash
pnpm test:all
```

Using `nx` will ensure all local dependencies are built, in the correct sequence. For example:

```bash
pnpm nx build @dictionary-manager/server
pnpm nx build @dictionary-manager/client
```

For convenience, use short aliases:

```bash
pnpm build:client
```

### Meta-Schema

Dictionary Manager provides a meta-schema definition that describes the structure of Dictionaries. The generated JSON Schema formatted copy of this schema can be found at [`./generated/DictionaryMetaSchema.json`](./generated/DictionaryMetaSchema.json).

> [!NOTE]
>
> Don't manually update any files in the `./generated` path. This content is programatically generated from the source code.
