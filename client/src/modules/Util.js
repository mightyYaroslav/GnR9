class Util {
    static formatDate(date) {
        let dd = date.getDate()
        let mm = date.getMonth() + 1
        let yy = date.getFullYear() % 100;
        [dd, mm, yy] = [dd, mm, yy].map(e => e < 10 ? '0' + e : e)
        return `${dd}.${mm}.${yy}`
    }
}