describe('ActionHandlerHelper.js', function() {
    var testActionHandlerHelper = new ActionHandlerHelper();

    describe('handleBapError', function() {
        it('ActionHandlerHelper returns false if there is no BAP with that ID', function() {
            assert.isFalse (testActionHandlerHelper.handleBapError("someId", "message"), "returns false since no baps exist");
        });

        it('ActionHandlerHelper returns true if there is a BAP with that ID', function() {
            testActionHandlerHelper.sc.baps["myId"] = new BAP({});
            assert.isTrue (testActionHandlerHelper.handleBapError("myId", "message"), "returns true since we create a bap so one exists");
        });
    });
});