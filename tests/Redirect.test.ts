import Redirect from "../src/Redirect"

test('Redirect with no entries', () => {
    expect(() => {
        new Redirect({ from: '', to: '' })
    }).toThrowError();
})

test('Redirect with no "to" property', () => {
    expect(() => {
        new Redirect({ from: 'test', to: '' });
    }).toThrowError();
})

test('From is a number', () => {
    expect(() => {
        // @ts-ignore
        new Redirect({ from: 12, to: 'https://google.com' })
    }).toThrowError();
})

test('To is a number', () => {
    expect(() => {
        // @ts-ignore
        new Redirect({ from: "google", to: 97 })
    }).toThrowError();
})

test('Status is not a number', () => {
    expect(() => {
        // @ts-ignore
        new Redirect({ from: "google", to: 'https://google.com', status: "302" })
    }).toThrowError();
})

