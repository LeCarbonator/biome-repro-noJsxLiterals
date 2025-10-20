## Steps to reproduce
```bash
npm install

# These are expected to both not error.
npm run biome
npm run eslint

# However, biome will show an error for one of the snippets.
```

The 'allowed examples' are pulled from the [eslint-plugin-react/no-jsx-literals rule examples](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-literals.md#examples)
