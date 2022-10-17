function redirect(to) {
    window.location.href = to;
}
function decode(str) {
    return decodeURIComponent(window.atob(str))
}
// converts number to string representation with K and M.
// toFixed(d) returns a string that has exactly 'd' digits
// after the decimal place, rounding if necessary.
function numFormatter(num) {
    if(num > 999 && num < 1000000){
        return (num/1000).toFixed(2) + 'K'; // convert to K for number from > 1000 < 1 million 
    }else if(num > 1000000){
        return (num/1000000).toFixed(2) + 'M'; // convert to M for number from > 1 million 
    }else if(num < 900){
        return num.toFixed(2); // if value < 1000, nothing to do
    }
}