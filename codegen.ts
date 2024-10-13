import type {CodegenConfig} from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: `https://service-dev.battlesbit.xyz/graphql/query`,
  documents: ['./src/gql-codegen/**/*.graphql'],
  ignoreNoDocuments: true,
  generates: {
    './src/gql-codegen/generated.ts': {
      overwrite: true,
      plugins: ['typescript', 'typescript-operations', 'typescript-urql'],
    },
  },
};

export default config;
