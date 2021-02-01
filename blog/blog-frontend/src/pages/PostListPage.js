import React from 'react';
//import Button from '../components/common/Button';
//import Header from '../components/common/Header';
import HeaderContainer from '../containers/common/HeaderContainer';
//import PostList from '../components/post/PostList';
import PostListContainer from '../containers/posts/PostListContainer';
import PaginationContainer from '../containers/posts/PaginationContainer';

const PostListPage = () => {
    return(
        <>
            <HeaderContainer />
            <PostListContainer />
            <PaginationContainer />
        </>
    );
};

export default PostListPage;