import { Schema } from 'mongoose';

export const JobSchema: Schema = new Schema({
    config: {},
    error: [{}],
    finished: Date,
    hints: [{}],
    id: String,
    investigated: Boolean,
    maxRunTime: Number,
    queued: Date,
    rules: [{}],
    started: Date,
    status: {},
    url: String,
    webhintVersion: String
}, { usePushEach: true }); // usePushEach for compatibility with mongodb 3.6
