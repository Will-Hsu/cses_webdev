import 'dotenv/config';
import mailchimp from '@mailchimp/mailchimp_marketing';

const apikey = process.env.MAILCHIMP_API_KEY;

mailchimp.setConfig({
  apiKey: apikey,
  server: 'us12',
});

async function connectMailchimp() {
  if (!apikey) {
    console.warn('MAILCHIMP_API_KEY is not set; skipping Mailchimp connection (subscriber routes will fail)');
    return;
  }
  try {
    const response = await mailchimp.ping.get();
    console.log(response.health_status); // if successful, returns "Everything's Chimpy!"
  } catch (error) {
    console.error('Mailchimp connection error:', error);
  }
}

export default connectMailchimp;