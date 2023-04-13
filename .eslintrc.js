module.exports = {
    extends: [require.resolve('@umijs/fabric/dist/eslint')],

    // in antd-design-pro
    globals: {
        ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION: true,
        page: true
    },

    rules: {
        'react-hooks/exhaustive-deps': 'off',
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
        'one-var': 'off',
        'no-empty-pattern': 'error',
        'one-var-declaration-per-line': 'error',
        'wrap-iife': 'off',
        'no-ternary': 'off',
        'lines-around-comment': 'off',
        'no-extra-label': 'error',
        'block-scoped-var': 'warn',
        'init-declarations': 'warn',
        'linebreak-style': ['off', 'unix'],
        // 分号前后空格 可用于for循环
        'semi-spacing': ['error', {before: false, after: true}],
        'no-multi-str': 'off',
        // 冒号后加空格
        'comma-spacing': ['error', {before: false, after: true}],
        // 非空文件的末尾至少执行一个换行符
        'eol-last': ['error', 'always'],
        'no-octal': 'off',
        curly: 'off',
        'no-var': 'warn',
        'no-undefined': 'off',
        'no-unused-expressions': [
            'warn',
            {
                allowShortCircuit: true
            }
        ],
        'no-new-symbol': 'off',
        'no-array-constructor': 'off',
        // 箭头函数的箭头前后加空格
        'arrow-spacing': ['error', {before: true, after: true}],
        'no-useless-rename': 'error',
        'no-implied-eval': 'off',
        'no-iterator': 'off',
        'no-process-exit': 'off',
        // 运算符前后加空格
        'space-infix-ops': 'error',
        // 数组元素均在一行或者均换行
        'array-bracket-newline': [
            'warn',
            {
                multiline: true
            }
        ],
        'no-regex-spaces': 'warn',
        'no-implicit-globals': 'off',
        'no-new-func': 'warn',
        // 不允许数组括号内的空格
        'array-bracket-spacing': ['error', 'never'],
        // 数组与对象末尾不允许有多余逗号
        'comma-dangle': ['error', 'never'],
        'max-depth': 'off',
        'no-warning-comments': 'off',
        // 注释后加空格
        'spaced-comment': ['error', 'always'],
        'no-param-reassign': [
            'warn',
            {
                props: false
            }
        ],
        // 判断相等强制使用三等号，null除外
        eqeqeq: [
            'error',
            'always',
            {
                null: 'ignore'
            }
        ],
        'callback-return': 'off',
        'no-proto': 'off',
        'no-template-curly-in-string': 'off',
        'no-useless-escape': 'error',
        'prefer-destructuring': 'off',
        'no-plusplus': 'off',
        'no-self-assign': 'error',
        'id-blacklist': 'off',
        // 语句后面强制加分号
        semi: ['error', 'always'],
        // js中强制使用单引号
        quotes: ['error', 'single'],
        'no-bitwise': 'off',
        'prefer-template': 'off',
        'no-invalid-this': 'off',
        'func-style': 'off',
        'no-empty': 'error',
        // 键值对中Key冒号后加空格
        'key-spacing': ['error', {beforeColon: false, afterColon: true}],
        'no-func-assign': 'off',
        // 禁止使用未定义的变量
        'no-undef': [
            'error',
            {
                typeof: true
            }
        ],
        'no-unused-vars': [
            'warn',
            {
                vars: 'all',
                args: 'none',
                caughtErrors: 'none',
                ignoreRestSiblings: true
            }
        ],
        'no-mixed-operators': 'off',
        'capitalized-comments': 'off',
        'object-shorthand': ['off', 'consistent-as-needed'],
        'no-dupe-args': 'off',
        'no-buffer-constructor': 'warn',
        'arrow-parens': 'off',
        'computed-property-spacing': ['error', 'never'],
        'jsx-quotes': ['error', 'prefer-double'],
        'max-params': 'off',
        'arrow-body-style': 'off',
        // 扩展运算符后不允许加空格
        'rest-spread-spacing': ['error', 'never'],
        'object-curly-newline': [
            'off',
            {
                consistent: true,
                multiline: true
            }
        ],
        'no-else-return': 'off',
        'no-useless-constructor': 'off',
        'no-redeclare': 'off',
        'no-constant-condition': 'off',
        'global-require': 'warn',
        'comma-style': 'off',
        'line-comment-position': 'off',
        'no-tabs': 'off',
        'block-spacing': ['error', 'never'],
        // 对象字面量，不能包含重复的key
        'no-dupe-keys': ['error'],
        'no-caller': 'error',
        'no-new-object': 'off',
        'no-negated-condition': 'off',
        'no-unmodified-loop-condition': 'warn',
        // 不允许有超过一个的空格
        'no-multi-spaces': 'error',
        // 关键字前后加空格，如else
        'keyword-spacing': ['error', {before: true, after: true}],
        // ()内不允许有空格
        'space-in-parens': ['error', 'never'],
        // 模板字符串中${}是否加空格
        'template-curly-spacing': ['error', 'never'],
        // 一元运算的空格
        'space-unary-ops': 'error',
        'require-yield': 'warn',
        'no-inline-comments': 'off',
        'symbol-description': 'warn',
        // {}内部前后不允许空格
        'object-curly-spacing': ['error', 'never'],
        'no-implicit-coercion': 'off',
        'no-whitespace-before-property': 'warn',
        'no-fallthrough': 'error',
        'no-irregular-whitespace': 'off',
        'no-global-assign': 'error',
        'no-new-require': 'warn',
        'no-mixed-requires': 'off',
        'no-return-assign': ['error', 'except-parens'],
        'no-unreachable': 'off',
        'no-console': 'off',
        'nonblock-statement-body-position': 'off',
        'no-alert': 'warn',
        'prefer-const': 'off',
        'no-cond-assign': 'error',
        'prefer-spread': 'warn',
        'object-property-newline': 'off',
        'newline-per-chained-call': 'off',
        'prefer-rest-params': 'off',
        'no-const-assign': 'off',
        // else和后括号保持在同一行
        'brace-style': 'error',
        'max-statements': [
            'warn',
            35,
            {
                ignoreTopLevelFunctions: true
            }
        ],
        'babel/object-curly-spacing': 'off',
        'no-useless-call': 'warn',
        'handle-callback-err': 'off',
        'no-useless-concat': 'warn',
        'max-lines': ['warn', 800],
        'no-octal-escape': 'off',
        'no-shadow': 'off',
        'no-unsafe-finally': 'error',
        'no-unsafe-negation': 'error',
        'no-self-compare': 'off',
        'sort-vars': 'off',
        // 具名函数名与()中间不允许空格
        'space-before-function-paren': [
            'error',
            {anonymous: 'always', named: 'never', asyncArrow: 'always'}
        ],
        'use-isnan': 'off',
        'no-confusing-arrow': 'off',
        'no-restricted-properties': 'off',
        'default-case': 'off',
        'no-restricted-modules': 'off',
        'no-delete-var': 'off',
        'no-lone-blocks': 'off',
        'no-eq-null': 'off',
        'no-shadow-restricted-names': 'off',
        'no-extend-native': 'off',
        'sort-keys': 'off',
        'no-case-declarations': 'off',
        'no-duplicate-case': 'off',
        'operator-assignment': 'off',
        'no-magic-numbers': 'off',
        'no-eval': 'off',
        'no-extra-semi': 'error',
        'no-nested-ternary': 'off',
        camelcase: 'off',
        'no-restricted-syntax': 'off',
        'no-extra-boolean-cast': 'off',
        'no-empty-function': [
            'error',
            {
                allow: ['functions', 'arrowFunctions']
            }
        ],
        'valid-jsdoc': 'off',
        'array-callback-return': 'error',
        'template-tag-spacing': ['off', 'never'],
        'unicode-bom': 'off',
        // 语句块中不要有空隙
        'padded-blocks': ['error', 'never'],
        'prefer-arrow-callback': 'warn',
        'no-spaced-func': 'off',
        'no-useless-return': 'error',
        // 一个模块只使用一个import引入
        'no-duplicate-imports': 'error',
        'no-unexpected-multiline': 'warn',
        'no-unused-labels': 'error',
        'generator-star-spacing': 'off',
        'no-debugger': 'off',
        'quote-props': 'off',
        'no-loop-func': 'off',
        'no-new-wrappers': 'off',
        'valid-typeof': 'off',
        'max-nested-callbacks': 'off',
        indent: [
            'error',
            4,
            {
                SwitchCase: 1,
                ignoredNodes: ['TemplateLiteral']
            }
        ],
        'accessor-pairs': 'error',
        'no-useless-computed-key': 'off',
        'require-await': 'warn',
        'no-undef-init': 'off',
        'for-direction': 'off',
        'max-statements-per-line': 'off',
        'switch-colon-spacing': [
            'error',
            {
                after: true,
                before: false
            }
        ],
        'dot-location': ['warn', 'property'],
        'no-ex-assign': 'off',
        'no-multiple-empty-lines': 'warn',
        'no-this-before-super': 'off',
        'multiline-ternary': 'off',
        'no-dupe-class-members': 'error',
        'no-with': 'off',
        'no-multi-assign': 'warn',
        'prefer-numeric-literals': 'warn',
        'no-obj-calls': 'off',
        'no-label-var': 'off',
        'no-labels': 'off',
        'max-len': 'off',
        'no-unneeded-ternary': 'off',
        'yield-star-spacing': 'off',
        'id-length': 'off',
        'no-restricted-globals': 'off',
        'func-call-spacing': ['error', 'never'],
        'constructor-super': 'off',
        'no-invalid-regexp': 'off',
        'no-lonely-if': 'error',
        'indent-legacy': 'off',
        'semi-style': ['error', 'last'],
        'vars-on-top': 'off',
        'id-match': 'off',
        'prefer-reflect': 'off',
        'sort-imports': 'off',
        'no-new': 'error',
        'guard-for-in': 'off',
        'no-throw-literal': 'warn',
        'operator-linebreak': ['error', 'before'],
        'no-use-before-define': 'off',
        'no-mixed-spaces-and-tabs': 'off',
        'no-compare-neg-zero': 'error',
        yoda: 'warn',
        'require-jsdoc': 'off',
        'class-methods-use-this': 'off',
        'no-negated-in-lhs': 'off',
        'func-name-matching': 'off',
        'no-sparse-arrays': 'off',
        'prefer-promise-reject-errors': 'warn',
        'no-return-await': 'off',
        'no-sequences': 'error',
        'no-extra-bind': 'off',
        strict: 'off',
        'no-floating-decimal': 'warn',
        'consistent-this': 'off',
        'func-names': ['off', 'always'],
        'wrap-regex': 'off',
        'no-class-assign': 'off',
        'no-trailing-spaces': 'error',
        'no-process-env': 'off',
        'no-await-in-loop': 'off',
        'no-div-regex': 'off',
        'new-parens': 'error',
        'no-void': 'error',
        'no-extra-parens': 'off',
        'padding-line-between-statements': 'off',
        'no-path-concat': 'off',
        'no-empty-character-class': 'off',
        'new-cap': ['warn', {capIsNew: false}],
        'no-catch-shadow': 'off',
        'no-prototype-builtins': 'off',
        // 块语句前要有一个空格
        'space-before-blocks': [
            'error',
            {functions: 'always', keywords: 'always'}
        ],
        'no-control-regex': 'warn',
        'no-sync': 'off',
        'no-inner-declarations': 'off',
        'complexity': ['warn', 40],
        'no-script-url': 'warn',
        'consistent-return': [
            'warn',
            {
                treatUndefinedAsUnspecified: true
            }
        ],
        'no-underscore-dangle': 'warn',
        'dot-notation': 'off',
        'no-continue': 'off',
        'no-restricted-imports': 'off',
        // Prevent missing props validation in a React component definition
        'react/prop-types': [0]
    }
};
