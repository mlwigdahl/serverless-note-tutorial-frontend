export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
      BUCKET: 'mlw-notes-app-uploads',
  },
  apiGateway: {
      URL: 'https://pdefrhdywb.execute-api.us-east-2.amazonaws.com/prod',
      REGION: 'us-east-2',
  },
  cognito: {
    USER_POOL_ID : 'us-east-2_JrHhb1kSv',
    APP_CLIENT_ID : '43cdsq2f10vq71letea7kafc5l',
    REGION: 'us-east-2',
    IDENTITY_POOL_ID: 'us-east-2:81c43cd7-2b52-4ae7-b941-0977dfe55d0b',
  },
};
