import CorePostSliceReducers from "CorePackage/entities/post/model/post-slice-reducers";
import {PostSliceType} from "CustomCore/entities/post";

const PostSliceReducers = {
    ...CorePostSliceReducers,

    clearData: (state: PostSliceType): PostSliceType => ({
        ...state,
        data: [],
    })
}

export default PostSliceReducers