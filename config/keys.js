// module.exports={
//     googleProjectID: 'faqforgehu-wfjk',
//     dialogFlowSessionID: 'react-bot-session',
//     dialogFlowSessionLanguageCode: 'en-US'

// }


if (process.env.NODE_ENV === 'production') {
  module.exports = require('./prod');
} else {
  module.exports = require('./dev');
}