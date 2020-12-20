const ghpages = require('gh-pages');

ghpages.publish(
    '__sapper__/export/qc-report',
    {
        branch: 'master',
        repo: 'https://github.com/evgeniyapavlova/qc-report.git',
        user: {
            name: 'evgeniyapavlova',
            email: 'evgeniya.pavlova.me@gmail.com'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
);
