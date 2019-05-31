class User {
    constructor(
        username,
        email,
        tenantId,
        phoneNumber,
        firstName,
        lastName,
        status,
        groups
    ) {
        this.username = username;
        this.email = email;
        this.tenantId = tenantId;
        this.tier = tier;
        this.phoneNumber = phoneNumber;
        this.firstName = firstName;
        this.lastName = lastName;
        this.status = status;
        this.groups = groups;
    }
}

module.exports = User;