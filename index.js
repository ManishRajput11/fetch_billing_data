var request = require('request');

// var options = {
//     'method': 'POST',
//     'url': 'https://ucb50334.us-east-1.snowflakecomputing.com/api/v2/statements/',
//     headers: {
//       'Authorization': 'Bearer ver:1-hint:355710996489-ETMsDgAAAYblB3SKABRBRVMvQ0JDL1BLQ1M1UGFkZGluZwEAABAAEK9sIZyra4AniBek/gtTy8sAAABQMEBk44cHqkm2gElp6v4xwOkxwviuS+i96yHQiVagbjfWL4eYLKP3cDIBHjiB8kBne9OS13EuinP0DG8oHHzPD69GunhIE7DRm27Asof3BUoAFNOag+HfLUsdQQbb8e9vhDCorRFs',
//       'Content-Type': 'application/json',
//       'Accept': 'application/json',
//       'User-Agent': 'MyApp/1.0'
//     }
  
//   };
//   request(options, function (error, response) {
//     if (error) throw new Error(error);
//     console.log(response.body);
//   });


const accountName = 'ucb50334.us-east-1';
const clientId = 'LMOo3NxFMbGBldZ7t36BPATPMs4';
const clientSecret = 'ZNxaVrPLsMHy7gMWGUNkJXufUpu8ToYRb/1eY2xuSQ0=';
// const scopes = '<scopes>';

const options = {
  url: `https://${accountName}.snowflakecomputing.com/oauth/token-request`,
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  form: {
    grant_type: 'client_credentials',
    client_id: clientId,
    client_secret: clientSecret,
    // scope: scopes
  }
};

request(options, (error, response, body) => {
  if (error) {
    console.error(error);
  } else {
    const responseBody = JSON.parse(body);
    const accessToken = responseBody.access_token;
    console.log('Access token:', responseBody);
  }
});
