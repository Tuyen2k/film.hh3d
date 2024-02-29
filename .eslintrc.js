module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    extends: [
        '@nuxtjs/eslint-config-typescript'
    ],
    plugins: [],
    // add your custom rules here
    rules: {
        '@typescript-eslint/no-this-alias': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        'sonarjs/no-duplicate-string': 'off',
        'sonarjs/cognitive-complexity': 'off',
        'sonarjs/no-identical-functions': 'off',
    },
}