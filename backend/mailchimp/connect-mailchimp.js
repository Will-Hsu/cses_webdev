import 'dotenv/config';
import mailchimp from '@mailchimp/mailchimp_marketing';

const apikey = process.env.MAILCHIMP_API_KEY;

mailchimp.setConfig({
    apiKey: apikey,
    server: "us13",
});

async function connectMailchimp() {
    const response = await mailchimp.ping.get();
    console.log(response.health_status); // if successful, returns "Everything's Chimpy!"
}

export default connectMailchimp;