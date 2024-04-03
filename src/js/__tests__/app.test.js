import showLifePlayer from '../app';

test('above 50', () => {
  const result = showLifePlayer({ name: 'Маг', health: 90 });

  expect(result).toBe('healthy');
});

test('on 50', () => {
  const result = showLifePlayer({ name: 'Маг', health: 50 });

  expect(result).toBe('wounded');
});

test('on 15', () => {
  const result = showLifePlayer({ name: 'Маг', health: 15 });

  expect(result).toBe('wounded');
});

test('on 5 ', () => {
  const result = showLifePlayer({ name: 'Маг', health: 5 });

  expect(result).toBe('critical');
});