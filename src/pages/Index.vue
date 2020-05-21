<template>
  <Layout>
    <section class="posts">
      <PostItem v-for="post in posts" :key="post.node.id" :post="post.node" />
    </section>
  </Layout>
</template>

<script>
import PostItem from "@/components/PostItem";
export default {
  components: {
    PostItem
  },
  metaInfo: {
    title: "Go Sevilla"
  },
  computed: {
    posts() {
      return this.$page.allPost.edges;
    }
  }
};
</script>

<page-query>
query {
  metadata {
    siteName
    siteDescription
  }
  allPost(filter: { date: { gte: "2020" }}) {
    totalCount
    edges {
      node {
        id
        title
        timeToRead
        description
        date (format: "D MMM YYYY")
        path
      }
    }

  }
}
</page-query>

<style>
.posts {
  flex: 1 1;
}
</style>
