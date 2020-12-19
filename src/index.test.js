import setColorLifebar from './index';

test('health = 65', () => {
  const input = { name: 'Mage', health: 65 };

  const expected = 'healthy';

  const recieved = setColorLifebar(input);

  expect(recieved).toBe(expected);
});

test('health = 35', () => {
  const input = { name: 'Mage', health: 35 };

  const expected = 'wounded';

  const recieved = setColorLifebar(input);

  expect(recieved).toBe(expected);
});

test('health = 10', () => {
  const input = { name: 'Mage', health: 10 };

  const expected = 'critical';

  const recieved = setColorLifebar(input);

  expect(recieved).toBe(expected);
});

test('health = 15', () => {
  const input = { name: 'Mage', health: 15 };

  const expected = 'wounded';

  const recieved = setColorLifebar(input);

  expect(recieved).toBe(expected);
});

test('health = 50', () => {
  const input = { name: 'Mage', health: 50 };

  const expected = 'wounded';

  const recieved = setColorLifebar(input);

  expect(recieved).toBe(expected);
});
