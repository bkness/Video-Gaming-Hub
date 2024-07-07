const mongoose = require('mongoose')

const reactionSchema = new mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true,
	},
	targetType: {
		type: String,
		enum: ['post', 'comment'],
		required: true,
	},
	type: {
		type: String,
		enum: ['like', 'love', 'haha', 'wow', 'sad', 'angry'],
		required: true,
	},
})

const Reaction = mongoose.model('Reaction', reactionSchema)

module.exports = Reaction
