import { node1, sum } from './node1';

describe('node1', () => {
  it('should work', () => {
    expect(node1()).toEqual('node1');
  });
});


describe('sum', () => {
  it('should calculate', () => {
    expect(sum(1, 2)).toEqual(3);
  });
});
