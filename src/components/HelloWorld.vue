<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- show event list -->
    <ul>
      <li v-for="(item, index) in event_list" :key="index" style="display:block">
        {{item.event_content}}-{{item.date}}
      </li>
    </ul>
    <!-- form to add a event -->
    <form action="">
      输入事件信息：<input type="text" placeholder="事件信息" v-model="inputEvent.event_content"><br>
    </form>
    <button type="submit" @click="eventSubmit()">submit</button>
  </div>
</template>

<script>
import {getEvent, postEvent} from '../api/api.js'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      // books list data
      event_list: [],
      // book data in the form
      inputEvent: {
        'event_content': ''
      }
    }
  },
  methods: {
    loadEvents () {
      getEvent().then(response => {
        this.event_list = response.data
      })
    }, // load books list when visit the page
    eventSubmit () {
      postEvent(this.inputEvent.event_content).then(response => {
        console.log(response)
        this.loadEvents()
      })
    } // add a book to backend when click the button
  },
  created: function () {
    this.loadEvents()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
