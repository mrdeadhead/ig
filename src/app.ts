/// <reference path='_references.ts' />

module ig {
    'use strict';

    var igModule = angular.module('ig', [])
        .controller('accountListCtrl', AccountListCtrl)
        .service('accountListService', AccountListService)
        .component('sortableHeader', new SortableHeaderComponent())
        .controller('sortableHeaderCtrl', SortableHeaderCtrl); // last one only for testing (has to be a part of module)
}