import parseLink from "../src/parseLink";
import Redirect from "../src/Redirect";

test('Test parseLink returns Redirect object', () => { 
    expect(parseLink('marchionni.ml.yml')).toBeInstanceOf(Redirect);
});

test('Test parseLink with "marchionni.ml.yml"', () => { 
    expect(parseLink('marchionni.ml.yml')).toEqual({
        from: "dev",
        to: "https://marchionni.ml",
        status: 301
    })
});

test('Test parselink with no YML file', () => {
    expect(parseLink('marchionni.ml.test')).toBe(false)
})