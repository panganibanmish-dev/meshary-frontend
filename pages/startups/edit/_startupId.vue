<template>
  <div class="startup-form">
    <form class="form-group">
      <InputField
        v-for="query in queries"
        :id="query.id"
        :key="query.id"
        v-model="query.value"
        :type="query.type"
        :name="query.label"
      />
      <div class="startup-form-buttons">
        <button type="button" class="btn btn-light" @click="saveListing">
          SAVE
        </button>
        <NuxtLink type="button" class="btn btn-light" :to="localePath('/mystartup')"
          >Cancel</NuxtLink
        >
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: 'EditStartup',
  layout: 'auth-layout',
  middleware: ['auth', 'seller'],
  asyncData({ params }) {
    const startupId = params.startupId
    return { startupId }
  },
  data() {
    return {
      page: 0,
      queries: [],
    }
  },
  async mounted() {
    this.page = this.$route.query.page ?? 0
    await this.fetchStartupQeuries()
  },
  methods: {
    async fetchStartupQeuries() {
      const response = await this.$axios.get(
        '/api/startups/' + this.startupId + '/queries?page=' + this.page
      )
      this.startup = response.data.data.startup
      this.queries = response.data.data.queries
    },
    async saveListing() {
      await this.$axios.post('/api/startups/' + this.startupId, {
        queries: this.queries,
      })

      this.page = this.page + 1
      await this.fetchStartupQeuries()
      this.$router.push({
        path: '/startups/edit/' + this.startupId,
        query: { page: this.page },
        params: { startupId: '' + this.startupId },
      })
    },
  },
}
</script>
