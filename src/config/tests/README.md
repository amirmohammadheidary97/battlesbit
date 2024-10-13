# Project Testing Environment Setup

### Introduction

im using vitest alongside React Testing Library and Jsdom to implement a robust testing environment.

### Why vitest ?

it is just like jest , same test suites(describe), test cases(it), and assertions(expect().toEqual) as jest but it is more compatible with vite and needs less config and has a good support of vite .

### Why React Testing Library ?

for test our React components in a way an end user interacts with them, then we need to React Testing Library.

## Setup Steps

#### Step 1 (installation) :

```bash
npm install --save-dev vitest jsdom
```

```bash
npm install --save-dev @testing-library/jest-dom @testing-library/react @testing-library/user-event
```

#### Step 2 (creating setup.ts file at ./src/config/tests ):

```typescript
import {afterEach} from 'vitest';
import {cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/vitest';

afterEach(() => {
  cleanup();
});
```

#### Step 3 ( add a script to our vite.config.js) :

```
 test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/config/tests/setup.ts',
  }
```

#### Step 4 ( add a script to tsconfig.json ):

```
"types": ["vitest/globals"]
```

#### Step 5 ( add a script to our package.json) :

```
{
  "scripts": {
    "test": "vitest"
  }
}
```
