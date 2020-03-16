import { expect } from 'chai';
import { Readable } from 'stream';
import { SafeBatchStream } from './safe-batch-stream';

const createReadableStream = () => {
  const readable = new Readable({
    read: () => true
  });
  const source = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin accumsan posuere nisl, a vehicula erat luctus sit amet. Phasellus tristique metus vel ornare commodo. In gravida sollicitudin justo, facilisis euismod erat vehicula non. Nulla convallis gravida porta. Donec a ornare purus. Donec nec erat gravida, sagittis enim ac, convallis nibh. Pellentesque id tortor iaculis, lobortis magna quis, viverra sapien. Pellentesque placerat, arcu in interdum faucibus, ipsum enim ornare nunc, ullamcorper tristique quam odio at lacus. Praesent pulvinar semper posuere. Donec iaculis congue ex, congue sodales ante fringilla nec. Nullam malesuada eget lacus et mollis.'.split(
    ' '
  );
  source.forEach(sourceElement => readable.push(sourceElement));
  return readable;
};

const waitTick = () => new Promise(res => setImmediate(res));

describe('Test SafeBatchStream', () => {
  let sourceStream: Readable;

  beforeEach(() => {
    sourceStream = createReadableStream();
  });

  it('should push the correct batch length', async () => {
    const BATCH_LENGTH = 3;

    const safeBatchStream = new SafeBatchStream(BATCH_LENGTH);
    sourceStream.pipe(safeBatchStream);
    await waitTick();
    const batch = safeBatchStream.read();

    expect(batch.length).to.be.equal(BATCH_LENGTH);
  });

  it('should wait a drain to continue read stream', async () => {
    const BATCH_LENGTH = 3;
    const BATCH_LIMIT = 3;

    const safeBatchStream = new SafeBatchStream(BATCH_LENGTH, BATCH_LIMIT);
    sourceStream.pipe(safeBatchStream);
    await waitTick();
    expect(safeBatchStream.readableLength).to.be.equal(BATCH_LIMIT);
  });
});
