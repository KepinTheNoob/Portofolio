import { useState } from 'react';
import styles from './Pill.module.css';

interface PillProps {
  email: string;
}

export function Pill({ email }: PillProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={styles.pill}>
      <span className={styles.email}>{email}</span>
      <button 
        onClick={handleCopy}
        className={styles.copyBtn}
        aria-label="Copy email"
      >
        {copied ? 'copied!' : 'copy'}
      </button>
    </div>
  );
}
