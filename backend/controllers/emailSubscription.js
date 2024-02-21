import 'dotenv/config';
import EmailSubscription from '../models/emailSubscription.js';
import mailchimp from '@mailchimp/mailchimp_marketing';

const apikey = process.env.MAILCHIMP_API_KEY;

mailchimp.setConfig({
  apiKey: apikey,
  server: "us13",
});

// Audience ID: 968cfc7373

export const getEmails = async (_, res) => {
  try {
    const data = await EmailSubscription.find();
    const emails = data.map((item) => item.email);
    console.log(emails);
    res.status(200).json(emails);
    return emails;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const createEmail = async (req, res) => {
  const newEmail = new EmailSubscription(req.body);
  try {
    await newEmail.save();
    res.status(201).json(newEmail); 
    await mailchimp.lists.addListMember('968cfc7373', {
      email_address: newEmail.email,
      status: 'subscribed',
    });
  } catch (error) {
    console.log(error);
    res.status(409).json({ message: error.message });
  }
};

export const deleteEmail = async (req, res) => {
  try {
    const { email } = req.params;
    const deletedEmail = await EmailSubscription.findOneAndDelete({ email: email });
    if (deletedEmail) {
      res.status(200).json({ message: 'Subscriber deleted successfully' });
    } else {
      res.status(404).json({ error: 'Subscriber not found' });
    }
    await mailchimp.lists.deleteListMember(
      '968cfc7373',
      email,
    );
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while deleting the subscriber' });
  }
};
