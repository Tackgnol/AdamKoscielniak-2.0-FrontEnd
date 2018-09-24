export const ErrorsToList = e => {
    let errors = '<ul>';
    for (let i = 0; i < e.length; i++) {
        errors = errors + '<li>' + e[i] + '</li>';
    }
    return errors + '</ul>';
};
