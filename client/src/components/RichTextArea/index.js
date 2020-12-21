import React, { useState, useEffect, useRef } from "react"
import { Editor, EditorState, RichUtils } from "draft-js"
import { stateToHTML } from "draft-js-export-html"

// Styles
import "draft-js/dist/Draft.css"
import { EditorContainer } from "./style"

export const DescriptionText = (props) => {

    const [editorState, setEditorState] = useState(EditorState.createEmpty())

    const handleKeyCommand = (command) => {
        const newState = RichUtils.handleKeyCommand(editorState, command)
        if (newState) {
            setEditorState(newState)
            console.log("EditorState", editorState)
            return "handled"
        }
        return "no-handled"
    }


    const editor = useRef(null)
    useEffect(() => {
        console.log("FOCUS", editor.current)
        const contentState = editorState.getCurrentContent()
        console.log("Get Current Content", stateToHTML(contentState))
        props.setDescription(stateToHTML(contentState))
    }, [editorState])



    const onChange = value => {
        setEditorState(value)
    }

    return (
        <EditorContainer className="editorContainer" onClick={() => editor.current.focus()}>
            <div className="editorButtons">
                <div>
                    <button type="button" onClick={() => setEditorState(RichUtils.toggleInlineStyle(editorState, 'UNDERLINE'))} ><u>U</u></button>
                    <button type="button" onClick={() => setEditorState(RichUtils.toggleInlineStyle(editorState, 'BOLD'))}  ><b>B</b></button>
                    <button type="button" onClick={() => setEditorState(RichUtils.toggleInlineStyle(editorState, 'ITALIC'))} ><em>I</em></button>
                    <button type="button" onClick={() => setEditorState(RichUtils.toggleBlockType(editorState, 'header-one'))} >h1</button>
                    <button type="button" onClick={() => setEditorState(RichUtils.toggleBlockType(editorState, 'header-two'))} >h2</button>
                    <button type="button" onClick={() => setEditorState(RichUtils.toggleBlockType(editorState, 'header-three'))} >h3</button>
                    <button type="button" onClick={() => setEditorState(RichUtils.toggleBlockType(editorState, 'header-four'))} >h4</button>
                </div>
            </div>
            <div className="editor">
                <Editor
                    spellCheck={true}
                    ref={editor}
                    placeholder={"Escribe aquí man"}
                    handleKeyCommand={handleKeyCommand}
                    editorState={editorState}
                    onChange={editorState => {
                        onChange(editorState)
                    }}
                />
            </div>
        </EditorContainer>
    )
}