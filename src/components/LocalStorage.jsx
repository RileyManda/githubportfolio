export const getItemFromLocalStorage = (key) => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
};


export const setItemInLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};


export const removeItemFromLocalStorage = (key) => {
    localStorage.removeItem(key);
};