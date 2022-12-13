# Frontend

## Craco

1. 在已有的 CRA 项目（typescript）里 ，使用并配置 craco.config.ts 失败

```js
    //在 js 项目里如是
    module.exports = {
        ...
    }
```

```ts
    //而在 ts 项目里则
    import "@craco/types";
    module.exports = {
    style: {
        postcss: {
        plugins: [require("tailwindcss"), require("autoprefixer")],
        },
    },
    };
//craco.config.ts:1:1 - error TS1208: 'craco.config.ts' cannot be compiled under '--isolatedModules' because it is considered a global script file. Add an import, export, or an empty 'export {}' statement to make it a module.
```

## React
1. 如何实现插槽

```tsx

    function Container( props ){
        const {children} = props
        return (
            <div>
                {children}
            </div>
        )
    }

    function App(){
        return(
            <Container>
                <div>...</div>
            </Container>
        )
    }
```