module.exports = {
    type: 'react-component',
    npm: {
        esModules: true,
        umd: {
            global: 'ReactTimeline',
            externals: {
                react: 'React'
            }
        }
    }
}
