describe('AccountListCtrl', function () {
    var scope, AccountListCtrl;
    beforeEach(module('ig'));
    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();
        AccountListCtrl = $controller('accountListCtrl', {
            $scope: scope
        });
    }));
    
    it('clears sorting object', function () {
        AccountListCtrl.removeSorting();
        expect(AccountListCtrl.model.order.arr).toEqual([]);
        expect(AccountListCtrl.model.order.obj).toEqual([]);
    });
});