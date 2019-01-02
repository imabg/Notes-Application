<template lang="html">
  <div class="container-fluid">
    <div class="title">
      <label>Title: </label>
      <span >{{title}}</span>
    </div>
    <hr>
    <div class="content">
      <label>Content: </label>
      <span> {{content}} </span>
    </div>
    <hr>
      <router-link :to="{ name: 'note', params: {id} }" class="btn btn-outline-dark">Edit</router-link>
      <router-link to="/view" class="btn btn-outline-dark">Back</router-link>
  </div>
</template>

<script>
import db from './firebaseInit'

export default {
  name: 'singleNote',
  data() {
    return {
    id: '',
    title: '',
    content: ''
    }
  },
  // cre: {
  created(){
    db.collection('notes').get()
          .then((snapshot) => {
                snapshot.forEach((doc) => {
                  if(doc.id === this.$route.params.id) {
                    this.id = doc.id;
                    this.title = doc.data().title;
                    this.content = doc.data().content;
                  }
                })
              })
        }
}
</script>

<style lang="css" scoped>
  .title {
    color: #fff;
    font-family: 'Major Mono Display', monospace;;
    font-size: 33px;
  }

  .content {
    color: #fff;
    font-family: cursive;
    font-size: 22px;
  }

  label {
    color: #fff;
  }

  .btn {
      margin-left: 22px;
  }

  .btn-outline-dark:hover,
  .btn-outline-dark:active,
  .btn-outline-dark:visited {
    /* background-color: #000; */
    color: #fff;
  }

</style>
