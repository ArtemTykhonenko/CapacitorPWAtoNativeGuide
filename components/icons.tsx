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