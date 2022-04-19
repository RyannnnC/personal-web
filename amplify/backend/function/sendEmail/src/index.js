const aws = require('aws-sdk')
const ses = new aws.SES()

exports.handler = async (event) => {
  for (const streamedItem of event.Records) {
    if (streamedItem.eventName === 'INSERT') {
      //pull off items from stream
      const candidateName = streamedItem.dynamodb.NewImage.name.S
      const candidateEmail = streamedItem.dynamodb.NewImage.email.S
      const candidateContent = streamedItem.dynamodb.NewImage.text.S

      await ses
          .sendEmail({
            Destination: {
              ToAddresses: [process.env.SES_EMAIL],
            },
            Source: process.env.SES_EMAIL,
            Message: {
              Subject: { Data: candidateName },
              Body: {
                Text: { Data: `Reach me at ${candidateEmail}, ${candidateContent}` },
              },
            },
          })
          .promise()
    }
  }
  return { status: 'done' }
}