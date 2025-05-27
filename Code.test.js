const { soma, dobro } = require('./Code')

describe('funções matemáticas', () => {
    beforeAll(() => {
        console.log('antes de tudo')
    })

    beforeEach(() => {
        console.log('antes de cada teste')
    })

    afterAll(()=> {
        console.log('depois de tudo')
    })

    afterEach(() => {
        console.log('depois de cada teste')
    });

    it('soma de dois valores', () => {
        expect(soma(2, 5)).toBe(7)
        expect(soma(3, 1)).toBe(4)
        expect(soma(25, 15)).toBe(40)
    })
    it('dobro de um valor', () => {
        expect(dobro(4)).toBe(8)
    });
});