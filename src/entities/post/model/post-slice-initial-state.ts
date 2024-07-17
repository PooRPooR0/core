import type {PostSliceType as CorePostSliceType} from 'CorePackage/entities/post/model/post-slice-initial-state'
import {PostSliceInitialState as CorePostSliceInitialState} from 'CorePackage/entities/post/model/post-slice-initial-state'

export type PostSliceType = {
    someNewField: string
} & CorePostSliceType

export const PostSliceInitialState: PostSliceType = {
    ...CorePostSliceInitialState,
    someNewField: 'zxc'
}
