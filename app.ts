interface IEmailable {
  name: string,
  email: string
}

function sendEmail(contact: IEmailable) {
  console.log(contact.name + " <" + contact.email + ">");
}

sendEmail({name: "Dennis Lee", email: "dennis.l@digipen.edu"});
