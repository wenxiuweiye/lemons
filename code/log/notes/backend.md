# Backend

### NodeJs

1. <font size='4' color='blue'>Blob 与 buffer ：创建 Blob 对象失败</font>
- 运行报错的code如下   
```js
   /**
    * constructor(sources: Array<BinaryLike | Blob>, options?: BlobOptions);
    */
   const readfile = readFile(path);
   return readfile.then((data) => {
     try {
       const blob = new buffer.Blob([new Uint8Array(data)], {
         type: "text/plain",
       });
       return blob;
     } catch (error) {
       console.log(error);
       return error;
     }
   });
   ```

- 原因可能是本地node环境低于16，v14与v16的api有所区别
```bash
    $node -v #查看 node 版本
```
2. 
``` js
   

```