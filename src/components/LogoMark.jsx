export default function LogoMark({ className }) {
  return (
    <svg 
      viewBox="0 0 120 120" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      aria-hidden="true"
    >
      {/* Medical Cross */}
      <path 
        d="M12 56 H28 V40 H40 V56 H56 V68 H40 V84 H28 V68 H12 V56 Z" 
        fill="var(--forest, #14534B)"
      />
      {/* Letter M */}
      <path 
        d="M52 84 V40 L76 68 L100 40 V84" 
        stroke="var(--forest, #14534B)" 
        strokeWidth="12" 
        strokeLinejoin="round" 
        strokeLinecap="round"
      />
      {/* Sage Leaf Accent */}
      <path 
        d="M76 84 C 76 84, 120 84, 120 46 C 120 46, 92 46, 76 84 Z" 
        fill="var(--sage, #DDECE7)"
      />
    </svg>
  );
}