var Helper = {
    convertIntToString: function (number) {
        let res = "", count = 0;
        while(number) {
            res = (number % 10).toString() + res;
            count += 1;
            number = Math.floor(number / 10);
            if(count % 3 === 0 && number !== 0) {
                res = "." + res;
            }
        }
        return res;
    }
}