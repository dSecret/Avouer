import dexie from 'dexie'

const db = new Dexie('avouer-db')

// create a db if non existant
db.version(1).stores({
	posts: 'id, title, content, link, created'
})

db.open()

export default () => {
	getPost (id) {
		db.posts
			.where('id')
			.equals(id)
			.then(post => {
				return post
			})
	},
	savePost (post) {
		db.posts.add(post)
	}
}