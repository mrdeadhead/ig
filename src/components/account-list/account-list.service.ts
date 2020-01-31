// SERVICE
/// <reference path='account-list.interfaces.ts' />

module ig {
	export class AccountListService {
        public static $inject = ['$http', '$q'];
        
        private api: {
            url: string,
            key: string
        }

		constructor (private $http: ng.IHttpService, private $q: ng.IQService) {
            this.api = {
                url: 'https://recruitmentdb-508d.restdb.io/rest/',
                key: '5d9f48133cbe87164d4bb12c'
            }

		}

		private getAccounts () {
			return this.$http({
                method: 'GET',
                url: this.api.url + 'accounts',
                headers: { 'x-apikey': this.api.key }
            });
        }
        
        private getAccountTypes () {
			return this.$http({
                method: 'GET',
                url: this.api.url + 'accounttypes',
                headers: { 'x-apikey': this.api.key }
            });
        }

        private mergeListData(accounts: Array<IAccount>, accountTypes: Array<IType>) {
            return accounts.map((account: IAccount) => {
                account.type = accountTypes.find((type: IType) => type.id === account.accountType);
                return account;
            });
        }
        
        public getList () {
            const defer = this.$q.defer();

            this.$q.all({
                'accounts': this.getAccounts(),
                'accounttypes': this.getAccountTypes()
            }).then((results: any) => {
                // merge data
                const data = this.mergeListData(results['accounts'].data, results['accounttypes'].data);

                defer.resolve(data);
            }).catch((errors: any) => {
                defer.reject(errors);
            });

            return defer.promise;
        }
	}
}
