const {Schema, model } = require('mongoose');
const moment = require('moment');
const ReactionSchema = require('./Reactions');


const ThoughtsSchema = new Schema({
        thoughtText: {
            type: String, 
            required: true,
            match: '/^.{1,280}$/'
        },

        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a'),
        },
         username: {
            type: String,
            required: true
          },

        reactions:[ReactionSchema],
        
        });

ThoughtsSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

const Thoughts = model('Thoughts', ThoughtsSchema);

module.exports = Thoughts;
