
const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised).should();

const WorstTvShows = require('../models/tv-shows');

describe('tv model', () => {
    it('should retrieve all worst tv shows', async () => {
        const worstTvShows = await WorstTvShows.getAll();
        expect(worstTvShows).to.be.an.instanceOf(Array);
    });
    it('should be able retrieve a tv show name by id', async () => {
        const worstTvShows = await WorstTvShows.getById(3);
        console.log(worstTvShows.showName);
        expect(worstTvShows.showName).to.equal('XFL');
    });
});