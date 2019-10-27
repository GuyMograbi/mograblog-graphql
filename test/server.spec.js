const supertest = require('supertest');
describe('graphql server', function () {
    beforeEach(() => {
        this.server = supertest(require('../server'));
    });
    it('should provide graphql api', function () {

    })
});
