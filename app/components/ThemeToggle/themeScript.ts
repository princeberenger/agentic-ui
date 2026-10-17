// Plain module (no 'use client'): the root layout inlines the script in <head>.

export const THEME_STORAGE_KEY = 'theme';

/** Runs before paint: saved theme, else the system preference. Avoids a light flash. */
export const THEME_INIT_SCRIPT = `try{var t=localStorage.getItem('${THEME_STORAGE_KEY}');if(t!=='light'&&t!=='dark')t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';if(t==='dark')document.documentElement.dataset.theme='dark'}catch(e){}`;
