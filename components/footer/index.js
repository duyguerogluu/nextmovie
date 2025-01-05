import React from 'react';
import Link from 'next/link';
import styles from './styles.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            Made by&nbsp;
            <Link href='https://www.linkedin.com/in/duygu-e-147092a3/' target="_blank">
               Duygu Eroğlu
            </Link>
        </footer>
    );
}

export { Footer };

