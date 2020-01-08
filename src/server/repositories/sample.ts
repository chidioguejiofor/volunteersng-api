import db from '../../database/models/index.js';

const { Sample } = db;

export default class SampleRepository {
    public static async getAllSample() {
        const data = await Sample.findAll();
        return data;
    }
}
