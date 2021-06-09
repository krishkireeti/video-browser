<template>
 
  <div class="container">
    <h1>Youtube App</h1><br>
    
    <p>This App lets you to search the videos taken from the youtube and
   you can select and also watch them
    </p>
    <SearchBar @termChange="onTermChange"></SearchBar>
    <div class="row">
      <VideoDetail :video="selectedVideo" />
      <VideoList @videoSelect="onVideoSelect" :videos="videos"></VideoList>
    </div>
  </div>
 
</template>
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-93238037-2"></script>
<script>
import axios from 'axios';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

const API_KEY = 'AIzaSyBc6w_mtATPeVhkqACNxP1E212S7Rvw7Bk';


  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-93238037-2');

export default {
  name: 'App',
  components: {
    SearchBar,
    VideoList,
    VideoDetail
  },
  data() {
    return { 
      videos: [], 
      selectedVideo: null
      };
  },
  methods: {
    onVideoSelect(video) {
      this.selectedVideo = video;
    },
    onTermChange(searchTerm) {
      axios
        .get('https://www.googleapis.com/youtube/v3/search', {
          params: {
            key: API_KEY,
            type: 'video',
            part: 'snippet',
            q: searchTerm
          }
        })
        .then(response => {
          this.videos = response.data.items;
        });
    }
  }
};
</script>
<style scoped>
h1,p {
  color : white;
}
.image{
  width : 100%;
  height : 100%;
}
</style>