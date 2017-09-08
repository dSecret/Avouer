<template>
<div id='feed-main'>
	<div id='feed-list' v-for='postID in posts'>
		<Post postId=postId></Post>
	</div>
</div>
</template>

<script>
import post from './post.vue'

export default {

  name: 'feed',
  components: {
  	Post: post
  },
  data () {
    return {

    };
  }
};
</script>

<style lang="css" scoped>
</style>