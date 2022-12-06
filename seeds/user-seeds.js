const { User } = require('../models');

const userData = [
    {
        username: "user_one",
        twitter: "jacobone",
        github: "jacobone",
        email: "jayone@gmail.com",
        password: "p@ssword1"
    },
    {
        username: "val_l",
        twitter: "valopezs",
        github: "valopezs",
        email: "@gmail.com",
        password: "p@ssword2"
    },
    {
        username: "user_two",
        twitter: "seconduser",
        github: "seconduser",
        email: "seconduser@gmail.com",
        password: "p@ssword3"
    },
    {
        username: "kristen_v",
        twitter: "kris123",
        github: "kris123",
        email: "kris123@gmail.com",
        password: "p@ssword4"
    },
    {
        username: "user_three",
        twitter: "priyaravi23",
        github: "priyaravi23",
        email: "priya_r@gmail.com",
        password: "p@ssword5"
    },
    {
        username: "user_four",
        twitter: "pooja_w",
        github: "pooja",
        email: "pooja@gmail.com",
        password: "p@ssword6"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;