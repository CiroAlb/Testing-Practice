const {capitalize,reverseString,calculator,analyzeArray,caesarCipher} = require('./testing-practice')

it('Normal capitalized', () =>{
    expect(capitalize('test')).toBe('Test');
})
it('Sin palabra capitalized', () =>{
    expect(capitalize('')).toBe('');
})
it('alredy capitalized', () =>{
    expect(capitalize('Otro')).toBe('Otro');
})
it('multiple string capitalized', () =>{
    expect(capitalize('test y otro')).toBe('Test y otro');
})


it('normal revese', () => {
    expect(reverseString('test')).toBe('tset');
})
it('sin nada revese', () => {
    expect(reverseString('')).toBe('');
})
it('frase revese', () => {
    expect(reverseString('test y otro')).toBe('orto y tset');
})

it('normal sum', () => {
    expect(calculator.add(2,3)).toBe(5)
})
it('normal sub', () => {
    expect(calculator.subtract(3,2)).toBe(1)
})
it('normal div', () => {
    expect(calculator.divide(9,3)).toBe(3)
})
it('div by 0', () => {
    expect(calculator.divide(9,0)).toBe('No dividir por 0')
})
it('normal mul', () => {
    expect(calculator.multiply(2,3)).toBe(6)
})


it('normal analizeArr', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toStrictEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    })
})

it('normal caesarCypher output', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc')
})
it('test case preservation', () => {
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr')
})
it('test punctuation', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!')
})
