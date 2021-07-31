export const addData = (amount) => {
    const arr = [];
    for (let i = 0; i < amount; i++) {
        // 100 is max, 50 is min
        arr.push(Math.round(Math.random() * (100 - 50 + 1)) + 50);
    }
    return arr;
};
