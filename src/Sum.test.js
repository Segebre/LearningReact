import sum from './sum'

it('sums numbers', () => {
    expect(sum(1, 5)).toEqual(6);
    expect(sum(-10, 10)).toEqual(0);
    expect(sum(-101, -20)).toEqual(-121);
    expect(sum(2012, -13)).toEqual(1999);
})