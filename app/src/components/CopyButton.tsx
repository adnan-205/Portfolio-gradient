import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CopyButtonProps {
  text: string;
  className?: string;
}

export const CopyButton: React.FC<CopyButtonProps> = ({ 
  text, 
  className = '' 
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`
        inline-flex items-center gap-2
        px-4 py-2
        text-sm font-medium
        rounded-lg
        bg-white/5
        text-zinc-300
        border border-white/10
        hover:bg-white/10 hover:text-white hover:border-white/20
        transition-all duration-300
        ${className}
      `}
    >
      {copied ? (
        <>
          <Check className="w-4 h-4 text-emerald-400" />
          <span className="text-emerald-400">Copied!</span>
        </>
      ) : (
        <>
          <Copy className="w-4 h-4" />
          Copy Email
        </>
      )}
    </button>
  );
};

export default CopyButton;
