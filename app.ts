function sendEmail(contact: Object) {
  console.log(contact.name + " <" + contact.email + ">");
}

sendEmail({fullName: "Dennis Lee", emailAddress: "dennis.l@digipen.edu"});
