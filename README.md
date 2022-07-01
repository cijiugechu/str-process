# str-process

[![npm version](https://badgen.net/npm/v/str-process)](https://npm.im/str-process) [![npm downloads](https://badgen.net/npm/dm/str-process)](https://npm.im/str-process)
## Install

```bash
npm i str-process
```

## How to use
```typescript
const process = StrProcess
      .of()
      .upperCase()
      .lowerCase()
      .alphaBet()
      .map(v => v.slice(0, 3))
      .unbox()

console.log(process('hello world, 12345!')) // 'hel'
```

## License

MIT &copy; [nemurubaka](https://github.com/cijiugechu)
