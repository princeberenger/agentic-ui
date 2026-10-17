// Source: https://www.figma.com/design/Dqy0QA70ThT4iZXNgJljkG/AGENTIC-DESIGN-SYSTEM?node-id=675-3982
// Extracted: 2026-10-17
// Demo page: SocialButton brands, types, sizes, icon only, disabled; ButtonGroup sizes

'use client';

import { Button } from '@/app/components/Button';
import { ButtonGroup } from '@/app/components/ButtonGroup';
import { SocialButton, type SocialBrand } from '@/app/components/SocialButton';
import styles from './page.module.css';

const BRANDS: SocialBrand[] = ['apple', 'x', 'discord', 'google', 'linkedin', 'github'];

export default function SocialButtonsPage() {
  return (
    <div className={styles.page}>
      {(['lg', 'sm'] as const).map((size) =>
        (['primary', 'secondary'] as const).map((variant) => (
          <section key={`${size}-${variant}`} className={styles.section}>
            <h2 className={styles.title}>{size} · {variant}</h2>
            <div className={styles.row}>
              {BRANDS.map((brand) => (
                <SocialButton key={brand} brand={brand} variant={variant} size={size}>Label</SocialButton>
              ))}
              {BRANDS.map((brand) => (
                <SocialButton key={`${brand}-icon`} brand={brand} variant={variant} size={size} />
              ))}
            </div>
            <div className={styles.row}>
              {BRANDS.map((brand) => (
                <SocialButton key={`${brand}-off`} brand={brand} variant={variant} size={size} disabled>Label</SocialButton>
              ))}
            </div>
          </section>
        )),
      )}

      <section className={styles.section}>
        <h2 className={styles.title}>ButtonGroup</h2>
        {(['lg', 'md', 'sm'] as const).map((size) => (
          <ButtonGroup key={size}>
            <Button variant="secondary" size={size}>Cancel</Button>
            <Button size={size}>Launch</Button>
          </ButtonGroup>
        ))}
      </section>
    </div>
  );
}
