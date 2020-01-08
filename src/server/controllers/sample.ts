import SampleRepo from '../repositories/sample';

export default class SampleController {
    public static async testSampleRoute(req, resp) {
        return resp.status(200).send(await SampleRepo.getAllSample());
    }
}
