# safe-batch-stream
Safely creates an array of elements inside a stream. It prevents [backpressuring in streams](https://nodejs.org/es/docs/guides/backpressuring-in-streams/) by waiting the drain after reaching a limit of batches built

## Example
```javascript
// Default batch size 1
// Default batch limit 1
const safeBatchStream = new SafeBatchStream();

stream
  .pipe(safeBatchStream)
  .pipe();
```