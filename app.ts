interface IEmailable {
  name: string,
  email: string
}

function sendEmail(contact: IEmailable) {
  console.log(contact.name + " <" + contact.email + ">");
}

sendEmail({name: "Dennis Lee", email: "dennis.l@digipen.edu"});


class Company implements IEmailable {
  name: string;
  email: string;

  constructor(companyName: string, emailAddress: string) {
    this.name = companyName;
    this.email = emailAddress;
  }
}

var treehouse = new Company("Treehouse", "support@teamtreehouse.com");

sendEmail(treehouse);
