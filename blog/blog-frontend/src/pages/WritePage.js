import React from 'react';
//import Editor from '../components/write/Editor';
import EditorContainer from '../containers/write/EditorContainer';
import Responsive from '../components/common/Responsive';
//import TagBox from '../components/write/TagBox';
import TagBoxContainer from '../containers/write/TagBoxContainer';
//import WriteActionButtons from '../components/write/WriteActionButtons';
import WriteActionButtonsContainer from '../containers/write/WriteActionButtonsContainer';

const WritePage = () => {
    return(
        <Responsive>
            <EditorContainer />
            <TagBoxContainer />
            <WriteActionButtonsContainer />
        </Responsive>
    )
};

export default WritePage;