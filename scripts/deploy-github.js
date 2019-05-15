const ghpages = require('gh-pages')

// replace with your repo url
ghpages.publish(
  'static',
  {
    branch: 'master',
    repo: 'https://github.com/connorwalsh/blahg.git',
  },
  () => {
    console.log('Deploy Complete!')
  }
)
