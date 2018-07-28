function sendEmail(contact) {
    console.log(contact.name + " <" + contact.email + ">");
}
sendEmail({ name: "Dennis Lee", email: "dennis.l@digipen.edu" });
var Company = (function () {
    function Company(companyName, emailAddress) {
        this.name = companyName;
        this.email = emailAddress;
    }
    return Company;
})();
var treehouse = new Company("Treehouse", "support@teamtreehouse.com");
sendEmail(treehouse);
