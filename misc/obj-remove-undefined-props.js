/* Utility removing undefined props from an object */
export default obj =>
    Object.keys(obj).reduce((acc, key) =>
        (obj[key] !== undefined ? Object.assign(acc, { [key]: obj[key] }) : acc), {});

/* Using object spread operator */
export const removeUndefinedPropsVer2 = obj =>
    Object.keys(obj).reduce((acc, key) =>
        (obj[key] !== undefined ? { ...acc, ...{ [key]: obj[key] } } : acc), {});

/* Using forEach (not map, cause we don't need to return)
   Pure function (not modying the original object) */
export const removeUndefinedPropsVer3 = (obj) => {
    const res = {};
    Object.keys(obj).forEach(key => obj[key] !== undefined && (res[key] = obj[key]));
    return res;
};
