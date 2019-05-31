'use strict';

const name = 'user';
const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies
// const User = require('./user');
// const provider = new AWS.CognitoIdentityServiceProvider();
const pool = {
  UserPoolId: process.env.POOL_ID,
  ClientId: process.env.CLIENT_ID
};
console.log(pool);
// const users = new AmazonCognitoIdentity.CognitoUserPool(pool);

const headers = {
  "Access-Control-Allow-Origin" : "*" // Required for CORS support to work
};

module.exports.create = async (event, context) => {
  // const data = JSON.parse(event.body);
  // const password = data.password;
  // const user = new User(
  //   data.username,
  //   data.email,
  //   data.tenantId,
  //   data.phoneNumber,
  //   data.firstName,
  //   data.lastName,
  //   data.status,
  //   data.groups
  // );

  // // todo: need status and groups
  // var attributes = [
  //   { Name: 'email', Value: user.email },
  //   { Name: 'phone_number', Value: user.phoneNumber },
  //   { Name: 'custom:tenant_id', Value: user.tenantId },
  //   { Name: 'given_name', Value: user.firstName },
  //   { Name: 'family_name', Value: user.lastName }
  // ];

  // try {
  //   users.signUp(user.username, password, attributes, null, function(err, result) {
  //     if (err) {
  //       console.error('error', error);
  //       return {
  //         statusCode: error.statusCode || 501,
  //         headers: headers,
  //         error: `Could not create ${name}`
  //       };
  //     }
  
  //     return result.user;
  //   });
  // }
  // catch (error) {
  //   console.error('error', error);
  //   return {
  //     statusCode: error.statusCode || 501,
  //     headers: headers,
  //     error: `Could not create ${name}`
  //   };
  // }
};

module.exports.delete = async (event, context) => {
  try {
    // todo
  }
  catch (error) {
    console.error('error', error);
    return {
      statusCode: error.statusCode || 501,
      headers: headers,
      error: `Could not delete ${name}`
    };
  }
};

module.exports.single = async (event, context) => {
  
  console.log(event.requestContext);
  // const params = {
  //   AccessToken: event.headers.AccessToken
  // };

  return {
        statusCode: error.statusCode || 501,
        headers: headers,
        error: `Could not get ${name}`
      };

  // try {
  //   pool.listUsers(params, function(err, result) {
  //     if (err) {
  //       console.error('error', err);
  //       return {
  //         statusCode: error.statusCode || 501,
  //         headers: headers,
  //         error: `Could not get ${name}`
  //       };
  //     }

  //     return result;
  //   });
  // }
  // catch (error) {
  //   console.error('error', error);
  //   return {
  //     statusCode: error.statusCode || 501,
  //     headers: headers,
  //     error: `Could not get ${name}`
  //   };
  // }
};

module.exports.update = async (event, context) => {
  try {
    // todo
  }
  catch (error) {
    console.error('error', error);
    return {
      statusCode: error.statusCode || 501,
      headers: headers,
      error: `Could not update ${name}`
    };
  }
};
