describe('AccountListService', function () {
    var AccountListService;
    beforeEach(module('ig'));
    beforeEach(inject(function (accountListService) {
        AccountListService = accountListService;
    }));
    
    it('has defined API url + key', function () {
        expect(AccountListService.api.url).toBeDefined();
        expect(AccountListService.api.url).toEqual('https://recruitmentdb-508d.restdb.io/rest/');
        expect(AccountListService.api.key).toBeDefined();
        expect(AccountListService.api.key).toEqual('5d9f48133cbe87164d4bb12c');
    });

    it('getList method exists', function () {
        expect(AccountListService.getList()).toBeDefined();
    });

    it('mergeListData returns correct value', function () {
        const accounts = [{id: 1, name: "Spread bet", default: true, funds: 10000, profitLoss: 0.23, accountType: "IGSB", isDemo: false, currency: "$"}];
        const accoutTypes = [{ id: "IGSB", title: "Spread bet account"}, {id: "IGCFD", title: "CFD account"}];

        const mergedAccounts = [{
            id: 1,
            name: "Spread bet",
            default: true,
            funds: 10000,
            profitLoss: 0.23,
            accountType: "IGSB",
            type: { id: "IGSB", title: "Spread bet account"}, 
            isDemo: false,
            currency: "$"
        }];
        expect(AccountListService.mergeListData(accounts, accoutTypes)).toEqual(mergedAccounts);
    });
});