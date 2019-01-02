<template lang="html">
  <div class="container-fluid">
    <h1> Edit Note Please! </h1>
    <div class="notes-markup">
      <input type="text" name="title" v-model = "title">
    </div>
    <div class="content-markup">
      <textarea
        name="content" rows="8" cols="80" v-model = "content">
        </textarea>
    </div>
      <br>
      <hr>
      <router-link :to = "{name: 'singleNote', params: {id}}" class="btn btn-outline-dark">Back</router-link>
      <button class="btn btn-outline-success" @click = "saveData"><i class="fa fa-save"></i> Save</button>
      <button class="btn btn-outline-danger" @click = "deleteNote"><i class="fa fa-minus-circle"></i> Delete</button>
      <router-link to="/" class="btn btn-danger"><i class="fa fa-times-circle"></i> Exit</router-link>
  </div>
</template>

<script>
import db from './firebaseInit'

export default {
  data() {
    return {
      id: '',
      title: '',
      content: ''
    }
  },
  created() {
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
},
  methods: {
    saveData() {
      db.collection('notes').get()
            .then((snapshot) => {
                  snapshot.forEach((doc) => {
                    if(doc.id === this.$route.params.id) {
                      doc.ref.update({
                        title: this.title,
                        content: this.content
                      })
                    }
                  })
                }).then(() => {
                  this.$router.push({name: 'singleNote', params: {id: this.id}})
                })
    },
    deleteNote() {
      db.collection('notes').get()
            .then((snapshot) => {
                  snapshot.forEach((doc) => {
                    if(doc.id === this.$route.params.id) {
                      doc.ref.delete()
                    }
                  })
                }).then(() => {
                  this.$router.push("/view")
                })
    }
  }
}
</script>

<style lang="css" scoped>

  .notes-markup {
    background-color: #fff;
    padding: 12px;
    border-radius: 2500px;
  }

  input {
    width: 100%;
    font-size: 28px;
    font-family: 'Major Mono Display', monospace;
    font-weight: bold;
    text-align: center;
  }

  textarea {
    margin-top: 10px;
    width: 100%;
    font-size: 18px;
    font-weight: 300;
    font-family:cursive;
    text-align: center;
  }

  .content-markup {
    background-color: #fff;
    padding: 9px;
  }

  h1 {
    color: #fff;
  }

  .btn {
    margin: 18px;
  }
</style>
