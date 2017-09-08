<template>
<div id='post'>
	<md-card md-with-hover>
		<md-card-header>
	    	<div class="md-title">Title goes here</div>
	    	<div class="md-subhead">Subtitle here</div>
		</md-card-header>
	</md-card>
</template>

<script>

import firedb from './../db/firedb.js'

export default {

  name: 'post',
  props: ['postId'],

  data () {
    return {
    	'postinfo': {
    		'title': '',
    		'link': '',
    		'content': '',
    		'created': ''
    	}
    };
  },
  created () {

  }
};
</script>

<style lang="css" scoped>
</style>