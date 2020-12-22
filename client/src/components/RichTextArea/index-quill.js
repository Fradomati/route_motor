import React, { useState, useEffect, useRef } from "react"
import { useQuill } from "react-quilljs"
import "quill/dist/quill.snow.css"

// Styles
import { EditorContainerQuill } from "./style"

export const TextRichDescription = (props) => {
    const modules = {
        toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            [{ align: [] }],

            [{ list: 'ordered' }, { list: 'bullet' }],
            [{ indent: '-1' }, { indent: '+1' }],

            [{ size: ['small', false, 'large', 'huge'] }],
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            ['link'],
            [{ color: [] }, { background: [] }],

            ['clean'],
        ],
        clipboard: {
            matchVisual: false,
        },
    }

    const { quill, quillRef } = useQuill({ modules })

    useEffect(() => {
        if (quill) {
            quill.on('text-change', () => {
                console.log('Text change!', quill.root.innerHTML);
            })
        }
    }, [quill])


    return (
        <EditorContainerQuill >
            <div ref={quillRef} />
        </EditorContainerQuill>
    )
}