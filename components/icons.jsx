/* The four icons the site uses, drawn inline so there is no icon package to install. */
function Icon({ size = 24, strokeWidth = 2, children, ...rest }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...rest}>
      {children}
    </svg>
  );
}
export const Check = (props) => <Icon {...props}><path d="M20 6 9 17l-5-5" /></Icon>;
export const ChevronDown = (props) => <Icon {...props}><path d="m6 9 6 6 6-6" /></Icon>;
export const Menu = (props) => <Icon {...props}><path d="M4 6h16M4 12h16M4 18h16" /></Icon>;
export const X = (props) => <Icon {...props}><path d="M18 6 6 18M6 6l12 12" /></Icon>;
