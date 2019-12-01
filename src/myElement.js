export default (text = 'Welcome to GetWheelz') => {
    const element = document.createElement('p');
    element.innerHTML = text;
    return element;
};