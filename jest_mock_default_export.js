// A file exporting both, default and non-default exports

const serialize = obj =>
    Object.keys(obj)
        .map(key => [key, obj[key]].map(encodeURIComponent).join('='))
        .join('&');

export const serializeDefinedProps = obj =>
    Object.keys(obj)
        .filter(key => typeof obj[key] !== 'undefined')
        .map(key => [key, obj[key]].map(encodeURIComponent).join('='))
        .join('&');

export default serialize;



// Mock both, default and non-default exports

jest.mock('../../../src/js/common/utils/serialize', () => {
    const serializeFn = jest.fn(() => 'serialized_data');
    serializeFn.serializeDefinedProps = jest.fn(() => 'serialized_defined_data');
    return serializeFn;
});
