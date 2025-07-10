import { dirname } from 'path';
import { fileURLToPath } from 'url';

import { FlatCompat } from '@eslint/eslintrc';
import importPlugin from 'eslint-plugin-import';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    plugins: {
      import: importPlugin
    },
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: ['.*']
        }
      ],
      'import/order': [
        // import 순서 정리
        'error',
        {
          groups: [
            'builtin', // node 내장 모듈
            'external', // 외부 라이브러리
            'internal', // 내부 절대경로
            ['parent', 'sibling', 'index'] // 상대경로
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
          'newlines-between': 'always', // import 그룹 사이에 항상 빈 줄 추가
          alphabetize: { order: 'asc', caseInsensitive: true } // 알파벳 오름차순 정렬
        }
      ]
    }
  }
];

export default eslintConfig;
