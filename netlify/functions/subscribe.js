// For more info, check https://docs.netlify.com/functions/build-with-javascript

const client = require("@mailchimp/mailchimp_marketing");

client.setConfig({
  apiKey: "5b77d6eb9427c4119acfe5d4511aa4d8-us8",
  server: "us8",
});

const addEmailToMailchimp = async (email) => {
  const response = await client.lists.addListMember("23b4ecb68f", {
    email_address: email,
    status: "subscribed",
  });
  return response
};

module.exports.handler = async function(event, context) {
  const { email } = event.queryStringParameters
  const res = await addEmailToMailchimp(email)
  if (res.status === "subscribed") {
    return {
      // return null to show no errors
      statusCode: 200, // http status code
      body: JSON.stringify({
        status: "OK"
      })
    }
  } else {
    return {
      statusCode: 500,
      body: JSON.stringify({
        status: "ERROR"
      })
    }
  }

}

// Now you are ready to access this API from anywhere in your Gatsby app! For example, in any event handler or lifecycle method, insert:
// fetch("/.netlify/functions/hello")
//    .then(response => response.json())
//    .then(console.log)
// For more info see: https://www.gatsbyjs.org/blog/2018-12-17-turning-the-static-dynamic/#static-dynamic-is-a-spectrum
