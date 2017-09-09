import axios from 'axios'

export default () => {
	const databaseUrl = 'https://avouerreview.firebaseio.com/'
	return {
		getFeed () {
			return axios({
				method: 'GET',
				url: databaseUrl + 'newpost.json',
				responseType: 'stream'
			}).then(resp => {
				return resp.data
			})
		},
		getPostByPostId (post_id) {
			return axios({
				method: 'GET',
				url: databaseUrl + 'newpost/' + post_id + '.json',
				responseType: 'stream'
			}).then(resp => {
				return resp.data
			})
		},
		addNewComment (post_id, comment) {
			return axios({
				method: 'POST',
				url: databaseUrl + 'newpost/' + post_id + '/comments.json',
				data: {
						comment: comment,
						ondate: new Date()
				}
			})
		}
	}
}
