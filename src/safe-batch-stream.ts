import { Transform } from 'stream';

export class SafeBatchStream extends Transform {
  private batch: any[] = [];

  /**
   * Safely creates an array of elements inside a stream
   * @param {number} [batchSize=1] Number of elements per batch
   * @param {number} [batchLimit=1] Limit of how many batches are made to prevent backpressure
   */
  constructor(private readonly batchSize: number = 1, private readonly batchLimit: number = 1) {
    super({ readableObjectMode: true, writableObjectMode: true });
  }

  _transform = (chunk: any, _encoding: string, callback: (error?: Error) => void) => {
    this.batch.push(chunk);
    if (this.batch.length >= this.batchSize) {
      this.push(this.batch);
      this.batch = [];
    }
    if (this.readableLength >= this.batchLimit) {
      this.once('drain', callback);
    } else {
      callback();
    }
  };

  _flush = (callback: (error?: Error) => void) => {
    if (this.batch.length) {
      this.push(this.batch);
      this.batch = [];
    }
    callback();
  };
}
