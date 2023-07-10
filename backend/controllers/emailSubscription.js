import EmailSubscription from '../models/emailSubscription.js';

export const getEmails = async (_, res) => {
  try {
    const data = await EmailSubscription.find();
    const emails = data.map((item) => item.email);
    //console.log(emails);
    res.status(200).json(emails);
  } catch (error) {
    console.log(error);
  }
};

export const createEmail = async (req, res) => {
  const newEmail = new EmailSubscription(req.body);
  try {
    await newEmail.save();
    res.status(201).json(newEmail);
  } catch (error) {
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
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while deleting the subscriber' });
  }
};
