

describe('FrontendController', function() {


	it('should respond with a HTML - document', function() {
		request(app).get('/')
			.expect(200)
			.end(function(err, res) {
			if (err) {
				throw err;
			}
			assert.hasTag(res, '//head/title', 'Test');
			done();
		});
	});
});