export default (firedb) => {
	newPost (post) {
		firedb().ref('posts/').set({
			'title': post.title,
			'link': post.link,
			'content': post.content,
			'created': post.created
		}).then(resp => {
			console.log(resp)
		})
	}
	getPost (post_id) {
		return firedb().ref('posts/' + post_id)
			.then(snapshot => {
				return snapshot.val()
			})
	}
}