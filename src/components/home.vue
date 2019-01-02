<template >
  <div class="wrapper">
    <div class="container-fluid">
      <p class="display-3">Notes Application</p>
      <span class="text-muted">Crafted By <a href="https://github.com/abhay676" target = "_blank">Abhay Goswami</a></span>
      <hr>
      <div class="notes-markup">
        <input type="text" v-model = 'title' name="title" placeholder="Note's Title">
      </div>
      <div class="content-markup">
        <textarea
          name="content" v-model = "content" rows="8" cols="800" class="materialize-textarea" placeholder="Note's Content">
          </textarea>
      </div>
      <br><hr>
        <button class="btn btn-outline-primary" @click = "saveNote">Save</button>
        <router-link to = "/view" class="btn btn-outline-primary">View</router-link>
      </div>
    </div>
</div>
</template>

<script>
import db from './firebaseInit'

export default {
  name: 'home',
  data() {
    return {
      title: '',
      content: ''
    }
  },
  methods: {
    saveNote() {
      if (this.title === '' || this.content === '') {
        alert("Enter Field\'s properly ")
      } else {
        db.collection('notes').add({
          title: this.title,
          content: this.content
        })
        this.title = '';
        this.content = '';
        alert('Note is Save Successfuly')
      }
    },
  }
}
</script>

<style scoped>

  .display-3 {
    color: #fff;
  }
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
    background-color: #fff;
    border-color: #000;
  }

  textarea {
    margin-top: 10px;
    width: 100%;
    font-size: 18px;
    font-weight: 300;
    font-family:cursive;
    text-align: center;
    background-color: #fff;
    border-color: #000;
  }

  .content-markup {
    background-color: #fff;
    padding: 9px;
  }

  .btn {
    margin-left: 22px;
  }

  .btn-outline-primary:hover,
  .btn-outline-primary:active,
  .btn-primary:visited {
    background-color: #000 !important;
    color: #fff !important;
  }


</style>
