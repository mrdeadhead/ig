module ig {
	export class SortableHeaderComponent implements ng.IComponentOptions {
        public bindings: any;
        public controller: any;
        public controllerAs: string;
        public template: string;

        constructor() {
            this.bindings = {
                column: '@',
                label: '@',
                order: '='
            };

            this.controller = SortableHeaderCtrl;
            this.controllerAs = 'vm';
            this.template = `
                {{::vm.label}}
                <i class="arrow arrow--down" ng-click="vm.sortBy(vm.column, false)" ng-class="{'arrow--active': vm.model.activeDown }"></i>
                <i class="arrow arrow--up" ng-click="vm.sortBy(vm.column, true)" ng-class="{'arrow--active': vm.model.activeUp }"></i>
            `;
        }
	}
}
