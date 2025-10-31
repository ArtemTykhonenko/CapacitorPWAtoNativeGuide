import React from 'react';

export const ClipboardIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
    </svg>
);

export const CheckIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
);

export const AndroidIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M15.94 3.06c-.54-.54-1.2-.97-1.94-1.28v.01c-1.25-.52-2.63-.52-3.88 0v-.01c-.74.31-1.4.74-1.94 1.28-.54.54-.97 1.2-1.28 1.94H3.06v.01c-.52 1.25-.52 2.63 0 3.88H3v.01c.31.74.74 1.4 1.28 1.94.54.54 1.2.97 1.94 1.28v3.82h-1.6c-.8 0-1.45.65-1.45 1.45s.65 1.45 1.45 1.45h9.8c.8 0 1.45-.65 1.45-1.45s-.65-1.45-1.45-1.45h-1.6v-3.82c.74-.31 1.4-.74 1.94-1.28.54-.54.97-1.2 1.28-1.94h.01c.52-1.25.52-2.63 0-3.88h-.01c-.31-.74-.74-1.4-1.28-1.94zm-7.9 6.84c-.58 0-1.05-.47-1.05-1.05s.47-1.05 1.05-1.05 1.05.47 1.05 1.05-.47 1.05-1.05 1.05zm3.9 0c-.58 0-1.05-.47-1.05-1.05s.47-1.05 1.05-1.05 1.05.47 1.05 1.05-.47 1.05-1.05 1.05z"/>
    </svg>
);

export const AppleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M19.63 13.91c-.02-3.95-3.09-6.32-3.23-6.42-.4-.28-1.03-.53-1.68-.53-.57 0-1.26.28-1.65.52-.41.26-1.12.63-1.87.63-.73 0-1.39-.4-1.89-.66-.58-.3-1.28-.5-1.9-.5-.65 0-1.31.25-1.82.72-1.43 1.3-2.58 3.86-2.58 6.53 0 4.14 3.44 7.6 6.55 7.6.92 0 1.63-.44 2.22-1.03.62-.62.88-1.44 1.01-2.22.13-.82.1-1.74-.09-2.6l.09.01zm-3.8-8.8c.45-.55.73-1.33.68-2.11-.69.05-1.52.42-2.02.97-.43.49-.77 1.28-.72 2.05.77.06 1.59-.36 2.06-.91z"/>
    </svg>
);

export const SuccessIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export const ReactLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348" fill="currentColor" {...props}>
        <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
        <g stroke="#61DAFB" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2"/>
            <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
            <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
        </g>
    </svg>
);

export const ViteLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 257" {...props}>
      <path fill="#646CFF" d="M256 57.276v142.065l-128.411 57.276L0 199.341V57.276L128.411 0L256 57.276Z"/>
      <path fill="#FFD05B" d="M178.675 66.885c-15.086 5.86-21.246 21.055-15.386 36.141l1.371 3.528l-52.756 94.629l-33.39-59.547c-5.86-10.435-18.337-14.37-28.772-8.51c-10.435 5.86-14.37 18.337-8.51 28.772l65.803 117.202c3.483 6.22 9.947 10.155 17.067 10.155c.783 0 1.567-.06 2.35-.18a17.18 17.18 0 0 0 15.147-11.662L228.05 91.543c5.86-15.086-.3-30.281-15.386-36.141c-15.086-5.86-30.28.3-36.14 15.386l-2.17 5.567l-25.071-6.108l2.17-5.567c5.86-15.085.301-30.28-15.085-36.14Z"/>
    </svg>
);

export const AndroidStudioLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M16 11.25c4.27 0 8 1.12 8 2.5v2.75c0 .55-.37 1-1 1h-1.5c-.63 0-1-.45-1-1v-1.5c0-1.02-2.5-1.75-5.5-1.75s-5.5.73-5.5 1.75v1.5c0 .55-.38 1-1 1H7c-.63 0-1-.45-1-1V13.75c0-1.38 3.73-2.5 8-2.5h1zm5.5 5.25c.54 0 1 .46 1 1v1.5c0 .54-.46 1-1 1h-15c-.54 0-1-.46-1-1v-1.5c0-.54.46-1 1-1h15zM8.5 7.5c0-2.3 1.5-4 4-4s4 1.7 4 4v3h-8v-3zm2 0c0-1.42 1.25-2.5 2-2.5s2 1.08 2 2.5v2h-4v-2zM4.42 2.14L3 3.56l4.24 4.24c-.16.14-.3.28-.43.43L3.1 4.52c-.3-.3-.8-.3-1.1 0s-.3.8 0 1.1l3.7 3.7c-.23.4-.4.86-.4 1.4v7.28c0 .55.45 1 1 1h.5c.55 0 1-.45 1-1V11.2c0-.23.06-.46.16-.67L12 15.05V17.5c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.18l3.44 3.44c.3.3.8.3 1.1 0s.3-.8 0-1.1l-1.42-1.42l1.42-1.41c.3-.3.3-.8 0-1.1s-.8-.3-1.1 0l-1.42 1.41L4.42 2.14z"/>
    </svg>
);

export const XcodeLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M16.6 4.55c-1.28-.43-2.64-.6-4.04-.55c-3.32.11-6.13 2.01-7.56 4.74c-.4.75-.12 1.69.63 2.09c.75.4 1.69.12 2.09-.63c1.03-1.92 3-3.23 5.37-3.32c1-.04 1.96.12 2.86.43c.48.16.99-.16 1.15-.64c.16-.48-.16-.99-.64-1.15zm-2.5 5.57l-2.8 4.31l-2.09-2.09a.75.75 0 0 0-1.06 1.06l2.5 2.5c.3.3.77.3.1.06l.03-.03l3.25-5a.75.75 0 0 0-1.1-1.01l.01.01zM4.48 11.02C3.1 12.8 2.25 15.01 2.25 17.5c0 .55.45 1 1 1h.5c.55 0 1-.45 1-1c0-1.99.66-3.77 1.77-5.18c.34-.43.25-1.06-.18-1.4c-.43-.33-1.06-.25-1.4.18zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8z"/>
    </svg>
);