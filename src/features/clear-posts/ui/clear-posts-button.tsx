import React from 'react';
import {connect} from "react-redux";
import {clearData, Post} from "CustomCore/entities/post";

interface ClearPostsButtonProps {
    posts: Array<Post>;
    clearData: () => void;
}

const ClearPostsButton = ({posts, ...props}: ClearPostsButtonProps) => {
    return (
        <button onClick={() => props.clearData()}>{posts.length} ssss</button>
    );
};

const mapStateToProps = (state: any) => ({
    posts: state.post.data,
})

const ConnectedClearPostsButton = connect(mapStateToProps, {clearData})(ClearPostsButton)
export default ConnectedClearPostsButton;
