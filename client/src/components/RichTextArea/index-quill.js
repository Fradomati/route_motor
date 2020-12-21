import React, { useState, useEffect, useRef } from "react"
import { useQuill } from "react-quilljs"
import "quill/dist/quill.snow.css"


export const TextRichDescription = (props) => {
    const { quill, quillRef } = useQuill()
    console.log("Quill", quill)
    console.log("QuillRef", quillRef)

    useEffect(() => {
        if (quill) {
            quill.on('text-change', () => {
                console.log('Text change!', quill.root.innerHTML);
            })
        }
    }, [quill])


    return (
        <div style={{ width: 500, height: 300 }}>
            <div ref={quillRef} />
        </div>
    )
}