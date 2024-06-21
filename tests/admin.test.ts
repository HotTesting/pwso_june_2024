import { shopTest } from "../fixture";

shopTest('Admin should see additional items in dashboard', {
    annotation: [{type: 'BUG', description: 'http://jira.com/CS-123'}]
},async ({ app, newAdminUser }) => {
    await app.accountDetails.open();
    await app.accountDetails.expectMenuItemVisible('Merchant')
    await app.accountDetails.expectMenuItemVisible('Users')
    await app.accountDetails.expectMenuItemVisible('Orders')
    await app.accountDetails.expectMenuItemVisible('Reviews')
    await app.accountDetails.expectMenuItemVisible('WishList')
    await app.accountDetails.expectMenuItemVisible('Support')
});
