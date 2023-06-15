describe('jest test', () => {
  test('', () => {
    expect(1 + 1).toBe(2);
  });
  test('', () => {
    expect(1 + 1).not.toBe(3);
  });
});
describe.skip('실패해야 하는 케이스', () => {
  test('', () => {
    expect(1 + 1).toBe(3);
  });
});
