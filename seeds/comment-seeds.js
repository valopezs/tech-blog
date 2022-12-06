const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 5,
        comment_text: "This is great!"
    },
    {
        user_id: 4,
        post_id: 4,
        comment_text: "Awesome work!"
    },
    {
        user_id: 1,
        post_id: 4,
        comment_text: "Great job to everyone who contributed"
    },
    {
        user_id: 3,
        post_id: 5,
        comment_text: "We just reached a thousand subscribers!"
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "Keep on the hard work!"
    },
    {
        user_id: 3,
        post_id: 4,
        comment_text: "This is one of our biggest and the most awaited feature."
    },
    {
        user_id: 5,
        post_id: 3,
        comment_text: "Very useful tool!"
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "Nice tool!"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;