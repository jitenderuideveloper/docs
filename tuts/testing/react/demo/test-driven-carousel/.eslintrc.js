module.exports = {
    plugins: ['react'],
    extends: ['eslint:recommended', 'plugin:react/recommended'],
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        },
    },
    env: {
        "jest": true
    },
    rules: {
        quotes: ['error', 'single', { avoidEscape: true }],
        'comma-dangle': ['error', 'always-multiline'],
    },
    settings: {
        react: {
            version: '16.12.0'
        }
    }
};