const Interaction = require('../models/interactionModel');
const factory = require('./handlerFactory');

exports.getAllInteractions = factory.getAll(Interaction);
exports.getInteraction = factory.getOne(Interaction);
exports.createInteraction = factory.createOne(Interaction);
exports.deleteInteraction = factory.deleteOne(Interaction);
exports.updateInteraction = factory.updateOne(Interaction);