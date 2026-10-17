// Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM (page Code block)
// Extracted: 2026-10-17
// Demo page: CodeInline, CopyButton, Code block simple and advanced, Skeleton

'use client';

import { useState } from 'react';
import { CodeBlock, CodeInline, CopyButton } from '@/app/components/CodeBlock';
import { Skeleton } from '@/app/components/Skeleton';
import styles from './page.module.css';

const ADVANCED = `'use strict';

// Increase max listeners for event emitters
require('events').EventEmitter.defaultMaxListeners = 100;

const gulp = require('gulp');
const util = require('./build/lib/util');
const path = require('path');
const compilation = require('./build/lib/compilation');

// Fast compile for development time
gulp.task('clean-client', util.rimraf('out'));
gulp.task('compile-client', ['clean-client'], compilation.compileTask('out', false));
gulp.task('watch-client', ['clean-client'], compilation.watchTask('out', false));

// Full compile, including nls and inline sources in sourcemaps, for build
gulp.task('clean-client-build', util.rimraf('out-build'));
gulp.task('compile-client-build', ['clean-client-build'], compilation.compileTask('out-build', true));
gulp.task('watch-client-build', ['clean-client-build'], compilation.watchTask('out-build', true));

// Default
gulp.task('default', ['compile']);`;

export default function CodeBlockPage() {
  const [picked, setPicked] = useState(0);

  return (
    <div className={styles.page}>
      <section className={styles.section}>
        <h2 className={styles.title}>CodeInline</h2>
        <div className={styles.row}>
          <CodeInline>style_taxonomy</CodeInline>
          <CodeInline onClick={() => setPicked((n) => n + 1)}>style_taxonomy ({picked})</CodeInline>
          <CodeInline onClick={() => {}} disabled>style_taxonomy</CodeInline>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.title}>CopyButton</h2>
        <div className={styles.row}>
          <CopyButton text="style_taxonomy" />
          <CopyButton text="style_taxonomy" size="sm" />
          <CopyButton text="style_taxonomy" disabled />
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.title}>Code block (Simple)</h2>
        <div className={styles.column}>
          <CodeBlock code="$ npm install --agentic-ui" aria-label="Install command" />
          <CodeBlock code="$ npm install --agentic-ui" disabled aria-label="Install command" />
          <CodeBlock code="$ npm install --agentic-ui" loading aria-label="Install command" />
          <CodeBlock code="$ npm install --agentic-ui" showCopy={false} aria-label="Install command" />
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.title}>Code block (Advanced)</h2>
        <div className={`${styles.column} ${styles.wide}`}>
          <CodeBlock variant="advanced" code={ADVANCED} aria-label="gulpfile.js" />
          <CodeBlock variant="advanced" code={ADVANCED} defaultExpanded aria-label="gulpfile.js" />
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.title}>Skeleton loading animation</h2>
        <div className={styles.column}>
          <Skeleton />
        </div>
      </section>
    </div>
  );
}
