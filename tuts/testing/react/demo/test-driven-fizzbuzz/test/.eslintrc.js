module.exports = {
    plugins: ['jest'],
    extends: ['eslint:recommended'],
    rules: {
        quotes: ['error', 'single', { avoidEscape: true }],
        'comma-dangle': ['error', 'always-multiline'],
    },
};