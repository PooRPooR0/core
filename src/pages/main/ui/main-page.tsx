import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import * as classes from 'CustomCore/pages/main/ui/main-page.module.css'
import {a} from "CustomCore/pages/main";
import {connect} from "react-redux";
import {clearData, getPosts, Post} from "CustomCore/entities/post";
import {ClearPostsButton} from "CustomCore/features/clear-posts";

interface MainPageProps {
    posts: Array<Post>;
    loading: boolean;

    getPosts: () => void;
    clearData: () => void;
}

const MainPage = ({posts, loading, ...props}: MainPageProps) => {
    useEffect(() => {
        props.getPosts();
    }, [])

    return (
        <div className={classes.container}>
            {loading ? <div>loading...</div> : <ClearPostsButton/>}
            core main page {a}
            <Link to="/about">About</Link>
        </div>
    );
};

const mapStateToProps = (state: any) => ({
    posts: state.post.data,
    loading: state.post.loading,
})

const ConnectedMainPage = connect(mapStateToProps, {getPosts, clearData})(MainPage)
export default ConnectedMainPage;
