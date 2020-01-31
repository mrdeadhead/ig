module ig {
	export class AccountListCtrl implements ng.IComponentController {
		public static $inject = ['accountListService'];

		public model: {
			accounts: IAccount[],
			error: boolean,
			order: IOrder,
			loader: boolean
		};

		constructor (private accountListService: AccountListService) {
			this.model = {
				accounts: [],
				error: false,
				order: {
                    arr: [],
                    obj: []
                },
				loader: true
			}
		}

		public $onInit () {
			this.accountListService.getList().then((data: IAccount[]) => {
				this.model.accounts = data;
			}).catch(() => {
				// api fails
				this.model.error = true;
			}).finally(() => {
				// turn off loader
				this.model.loader = false;
			});
		}

		public removeSorting () {
			this.model.order.arr = [];
			// this.model.order.obj = [];
		}
	}
}