<template>
  <div class="post-item">
    <g-link :to="post.path" class="read">{{post.title}}</g-link>
    <span class="metadata">
      {{post.date}} ·
      <i>{{post.timeToRead}} min</i>
    </span>
  </div>
</template>

<script>
export default {
  props: ["post"]
};
</script>

<style>
.post-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 8px;
  padding: 8px;
  flex-direction: column;
}
.read {
  border: 0;
  font-size: 1.2em;
}
.metadata {
  padding-top: 4px;
  color: gray;
  font-size: 0.8em;
}
</style>
