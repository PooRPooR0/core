import React from 'react';
import {connect} from "react-redux";
import {clearData, Post} from "@src/entities/post";
import {getName} from "@src/features/clear-posts";

interface ClearPostsButtonProps {
    posts: Array<Post>;
    clearData: () => void;
}

const ClearPostsButton = ({posts, ...props}: ClearPostsButtonProps) => {
    return (
        <button onClick={() => props.clearData()}>{posts.length} src {getName()}</button>
    );
};

const mapStateToProps = (state: any) => ({
    posts: state.post.data,
})

const ConnectedClearPostsButton = connect(mapStateToProps, {clearData})(ClearPostsButton)
export default ConnectedClearPostsButton;
