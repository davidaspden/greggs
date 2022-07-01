function calcDist(a,b,c,d){
    return Math.sqrt((a-c)^2 + (b-d)^2)
}

function topTen(c) {
    return c.sort((a,b) => {if (a[1] === b[1]) {
        return 0;
    }
    else {
        return (a[1] < b[1]) ? -1 : 1;
    }}).slice(0,10)
}



