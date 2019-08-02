const { exec } = require('child_process')
const ghpages = require('gh-pages');

exec(`npm run build`, (error, stdout, stderr) => {
    console.log('error: ', error)
    console.log('stdout: ', stdout)
    console.log('sterr: ', stderr)

    if (!error) ghpages.publish('build', {
        branch: 'master',
    }, (err) => {
        if (err) console.log('deploy error: ', err)
        else console.log('deploy complete')
    });
})