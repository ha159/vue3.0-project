import { createStore } from 'vuex'
import { testData, testPosts } from './testData'
interface UserProps {
  isLogin: boolean;
  name?: string;
  id?: number;
  columnId?: number;
}

export interface ImageProps {
  _id?: string;
  url?: string;
  createdAt?: string;
  fitUrl?: string;
}
export interface ColumnProps {
  id: number;
  title: string;
  avatar?: string;
  description: string;
}
export interface PostProps {
  id: number;
  title: string;
  content: string;
  image?: string;
  createdAt: string;
  columnId: number;
}
interface ListProps<P> {
  [id: string]: P;
}
export interface GlobalErrorProps {
  status: boolean;
  message?: string;
}
export interface GlobalDataProps {
  columns: ColumnProps[];
  posts: PostProps[];
  user: UserProps;
}
const store = createStore<GlobalDataProps>({
  state: {
    columns: testData,
    posts: testPosts,
    user: { isLogin: false }
  },
  mutations: {
    login(state) {
      state.user = { ...state.user, isLogin: true, name: 'haha', columnId: 1 }
    },
    createPost(state, newPost) {
      state.posts.push(newPost)
    }
  },
  getters: {
    biggerColumnsLen(state) {
      return state.columns.filter(c => c.id > 2).length
    },
    getColumnsById: (state) => (id: number) => {
      return state.columns.find(c => c.id === id)
    },
    getPostsByCid: (state) => (cid: number) => {
      return state.posts.filter(post => post.columnId === cid)
    }
  }
})

export default store