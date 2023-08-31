import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePostsStore = defineStore('postsStore', () => {
	const posts = ref([])
	const currentPost = ref({})

	const getCurrentPost = (id) => {
		currentPost.value = posts.value.find(item => item.id == id)
	}

	const setNewPost = (author, title, text) => {
		posts.value.unshift({
			id: Math.random() + 1,
			author: author,
			title: title,
			text: text
		})
	}


	return {
		posts,
		currentPost,
		getCurrentPost,
		setNewPost
	}



}, {
	persist: {
		paths: ['posts'],
		storage: persistedState.localStorage,
	}
})