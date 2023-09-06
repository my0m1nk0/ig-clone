import { CheckReactPipe } from './check-react.pipe';

describe('CheckReactPipe', () => {
  it('create an instance', () => {
    // @ts-ignore
    const pipe = new CheckReactPipe();
    expect(pipe).toBeTruthy();
  });
});
