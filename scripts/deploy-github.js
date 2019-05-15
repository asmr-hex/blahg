const ghpages = require('gh-pages')

// replace with your repo url
ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'https://github.com/connorwalsh/blahg.git',
    dest: 'public',
  },
  () => {
    
    console.log('Deploy Complete!')
  }
)
