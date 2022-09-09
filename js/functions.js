function redirect(to) {
    window.location.href = to;
}
function decode(str) {
    return decodeURIComponent(window.atob(str))
}