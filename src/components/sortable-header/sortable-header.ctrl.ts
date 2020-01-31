module ig {
	export class SortableHeaderCtrl implements ng.IComponentController {
        public static $inject = ['$scope'];
        
        // from bindings
        public label: string;
        public order: IOrder;

		public model: {
            activeDown: boolean,
            activeUp: boolean
		};

		constructor (private $scope: ng.IScope) {
            this.model = {
                activeDown: false,
                activeUp: false
            }

            // declare empty for testing purposes
            this.order = {
                arr: [],
                obj: []
            }
		}

		public $onInit () {
            // set arrows as not active when array cleared from master controller
            this.$scope.$watchCollection('vm.order.arr', (newValue: string[]) => {
                if (!newValue.length) {
                    this.model.activeDown = false;
                    this.model.activeUp = false;;
                }
            });
        }
        
        public sortBy (column: string, isDesc: boolean) {
            // change active class
            if (!isDesc) {
                this.model.activeDown = true;
                this.model.activeUp = false;
            } else {
                this.model.activeDown = false;
                this.model.activeUp = true;
            }

			// check if field is already used in sorting
			let foundIndex = this.order.obj.findIndex((orderElement: IOrderElement) => {
				return orderElement.value === column;
			});

			if (foundIndex === -1) {
                // add '-' char when sort desc
                const columnValue = isDesc ? `-${column}` : column;
                
                // if not found, add it at the end of array
                this.order.arr.push(columnValue);
                this.order.obj.push({
                    name: this.label,
                    isDesc: isDesc,
                    value: column
                })
			} else {
				// if found desc order - change it's direction                
                this.order.obj[foundIndex].isDesc = isDesc;
                this.order.arr[foundIndex] = isDesc ? `-${column}` : column;
            }
        }
	}
}
