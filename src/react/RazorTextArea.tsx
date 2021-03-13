import * as React from 'react';
import { useEffect } from 'react';
import * as hljs from 'highlight.js';
const hljsDefineCshtmlRazor = require('highlightjs-cshtml-razor');

type RazorTextAreaProps = Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'rows' | 'cols' | 'value' | 'children'> & { children: React.ReactText };

export const RazorTextArea = ({ children }: RazorTextAreaProps) => {
    useEffect(() => {
        hljsDefineCshtmlRazor(hljs);
        hljs.highlightAll();
    }, []);
    

    function highlightAll(){
        hljs.highlightAll();
    }

    return (
        <pre>
            <code className='textarea' contentEditable={true} suppressContentEditableWarning={true} onInput={highlightAll}>
                {children}
            </code>
        </pre>
    );
};
