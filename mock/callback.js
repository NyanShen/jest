export const runCallback = (callback) => {
    return callback()
}

export const runCallbackWithParam = (callback) => {
    return callback("test")
}

export const creatObject = (ClassItem) => {
    new ClassItem()
}