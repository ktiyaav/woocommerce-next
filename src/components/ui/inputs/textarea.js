import React, { useEffect, useState } from 'react';
import { EditorState, convertFromHTML, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import '../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const TextArea = ({name, label, placeholder, onchange, value}) => {

  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  useEffect(() => {
    if (placeholder) {
      const blocksFromHTML = convertFromHTML(placeholder);
      const contentState = ContentState.createFromBlockArray(blocksFromHTML.contentBlocks, blocksFromHTML.entityMap);
      setEditorState(EditorState.createWithContent(contentState));
    }
  }, []);

  const handleEditorStateChange = (editorState) => {
    setEditorState(editorState);
    const contentState = editorState.getCurrentContent();
    const contentHTML = contentState.getBlocksAsArray().map(block => block.getText()).join('\n');
    onchange({[name]: contentHTML});
  };


  return (
    <>
      <div>
        <div className='font-bold uppercase p-4 pl-0'>{label}</div>
        <Editor
          editorState={editorState}
          wrapperClassName="wrapper-class dark:bg-dark overflow-hidden  border-none"
          editorClassName="editor-class bg-slate-50 dark:bg-dark dark:text-white p-4 text-sm"
          toolbarClassName="toolbar-class dark:bg-dark p-4 border-none border-b  border-white "
          onEditorStateChange={handleEditorStateChange}
        />
      </div>
    </>
  );
};

export default TextArea;
