describe('SortableHeaderCtrl', function () {
    var scope, SortableHeaderCtrl;
    beforeEach(module('ig'));
    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();
        SortableHeaderCtrl = $controller('sortableHeaderCtrl', {
            $scope: scope
        });
    }));
    
    it('arrows class turned off at the beginning', function () {
        expect(SortableHeaderCtrl.model.activeDown).toBeFalse();
        expect(SortableHeaderCtrl.model.activeUp).toBeFalse();
    });

    it('init sort settings are empty', function () {
        // check init settings
        expect(SortableHeaderCtrl.order.arr).toEqual([]);
        expect(SortableHeaderCtrl.order.obj).toEqual([]);
    });

    it('adds new element with ASC order', function () {
        SortableHeaderCtrl.sortBy('name', false);
        // check init settings
        expect(SortableHeaderCtrl.order.arr).toEqual(['name']);
        expect(SortableHeaderCtrl.order.obj[0].isDesc).toEqual(false);
    });

    it('adds new element with DESC order', function () {
        SortableHeaderCtrl.sortBy('profitLoss', true);
        // check init settings
        expect(SortableHeaderCtrl.order.arr).toEqual(['-profitLoss']);
        expect(SortableHeaderCtrl.order.obj[0].isDesc).toEqual(true);
    });

    it('adds new element to sorting object', function () {
        // check sorting by one column
        SortableHeaderCtrl.sortBy('name', true);
        expect(SortableHeaderCtrl.order.arr.length).toEqual(1);
        expect(SortableHeaderCtrl.order.obj.length).toEqual(1);

        // check sorting by two columns
        SortableHeaderCtrl.sortBy('profitLoss', false);
        expect(SortableHeaderCtrl.order.arr.length).toEqual(2);
        expect(SortableHeaderCtrl.order.obj.length).toEqual(2);
    });

    it('changes sorting order to opposite asc/desc', function () {
        // check if no additional elements were created
        SortableHeaderCtrl.sortBy('name', false);
        SortableHeaderCtrl.sortBy('name', true);
        expect(SortableHeaderCtrl.order.arr.length).toEqual(1);
        expect(SortableHeaderCtrl.order.obj.length).toEqual(1);

        // check change from desc -> asc
        SortableHeaderCtrl.sortBy('name', false);
        expect(SortableHeaderCtrl.order.arr).toEqual(['name']);
        expect(SortableHeaderCtrl.order.obj[0].isDesc).toEqual(false);

        // check change from asc -> desc
        SortableHeaderCtrl.sortBy('name', true);
        expect(SortableHeaderCtrl.order.arr).toEqual(['-name']);
        expect(SortableHeaderCtrl.order.obj[0].isDesc).toEqual(true);        
    });
});