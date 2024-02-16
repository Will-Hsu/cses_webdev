import 'dotenv/config';
import mailchimp from '@mailchimp/mailchimp_marketing';
import { getEmails } from '../controllers/emailSubscription.js';

const apikey = process.env.MAILCHIMP_API_KEY;

mailchimp.setConfig({
  apiKey: apikey,
  server: "us13",
});

// Audience ID: 968cfc7373

// This function adds all emails currently in the database to the MailChimp audience/list
const addContacts = async () => {
  try {
    const data = await getEmails(null, {
      status: () => ({
        json: (data) => console.log(data)
      })
    });
    console.log(data)
    for (const email of data) {
      const response = await mailchimp.lists.addListMember('968cfc7373', {
        email_address: email,
        status: 'subscribed',
      });
      console.log(response);
    }
  } catch (error) {
    console.log(error);
  }
};

// This function gets all emails currently in the MailChimp audience/list
const getContacts = async() => {
  const response = await mailchimp.lists.getListMembersInfo('968cfc7373');
  console.log(response);
}

export { addContacts, getContacts };
