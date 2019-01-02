<template lang="html">
  <div class="container-fluid">
    <p class="display-3">Showing All Notes</p>
      <div>
        <ul>
          <li v-for = 'note in notes' :key = "note.id">
            <p class="title-notes">{{ note.title }}
              <span>
                <router-link :to = "{name: 'singleNote', params: {id: note.id}}" class="edit"><i class="fa fa-edit"></i></router-link>
              </span>
            </p>
          </li>
        </ul>
      </div>
    <div class="btn btn-group">
      <router-link to = "/" class="btn btn-outline-dark">Home</router-link>
    </div>
  </div>
</template>

<script>
import db from './firebaseInit'

export default {
  name: 'viewPosts',
  data() {
    return {
      notes: []
    }
  },
  created() {
    db.collection('notes').get().then((snapshot) => {
      snapshot.forEach((doc) => {
        const data = {
          'id' : doc.id,
          'title': doc.data().title,
          'content': doc.data().content
        }
        this.notes.push(data)
      })
    })
  }
}
</script>

<style lang="css" scoped>

  .title-notes {
    padding: 10px;
    margin: 5px;
    background-color: #fff;
    border-radius: 2500px;
    color: #000;
  }

  .display-3 {
    color: #fff;
  }

 li {
   list-style: none;
   font-size: 25px;
 }
 .btn-outline-dark:hover,
 .btn-outline-dark:active,
 .btn-outline-dark:visited {
   color: #fff;
 }
 .edit {
   color: #000;
 }
</style>
