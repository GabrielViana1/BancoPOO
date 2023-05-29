module.exports = class Transfer {
    constructor(userSent, userReceive, value) {
        this.userSent = userSent
        this.userReceive = userReceive,
        this.value = value 
        this.date = new Date()
    }
}