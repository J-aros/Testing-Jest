
const cliente = {
    nombre: 'Javier',
    balance: 500,
    tipo: 'Premium'
};

describe('Testing al cliente', () => {
    test('Es Javier', () => {
        expect(cliente).toMatchSnapshot();
    });
});