const users = [
    { id: 1, name: "Adam" },
    { id: 2, name: "Ewa" },
    { id: 3, name: "Jan" },
    { id: 4, name: "Kań" },
];

module.exports = {
    showUsers() {
        const names = users.map(user => user.name);
        console.log("\n Our users are: ")
        names.forEach(name => console.log(name))
    },

    showUserObj(id) {
        console.log("searching for user: ");
        const user = users.find(user => id === user.id);
        console.log(user)
    },

    userListLength: users.length


}