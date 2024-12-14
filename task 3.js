function ipToNumber(ip = '127.0.0.1') {

    const octets = ip.split('.').map(Number);
    let result=0;

    for (let i = 0; i < octets.length; i++) {
        result += octets[i] << (8 * (3 - i));
    }
    return result;
}
console.log(ipToNumber());
