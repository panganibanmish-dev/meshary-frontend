<template>
  <div class="startup-form">
    <div class="pb-5">
      <p>Public Information</p>
      <sub>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</sub>
    </div>
    <form class="form-group">
      <InputField
        id="startup-name"
        key="startup-name"
        v-model="input.name"
        type="string"
        name="Name"
      />
      <label for="startupType" class="mb-3 text-center">
        Startup type
        <a
          href="#"
          class="ml-2"
          data-toggle="tooltip"
          data-placement="bottom"
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        >
          <img src="~/assets/imgs/help-tooltip.png" class="help-tooltip-icon" />
        </a>
      </label>
      <select
        id="startupType"
        v-model="input.type_id"
        name="startupType"
        class="form-control"
        required
      >
        <option v-for="item in startupTypes" :key="item.id" :value="item.id">
          {{ item.name }}
        </option>
      </select>
      <br />
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
  name: 'CreateStartup',
  layout: 'auth-layout',
  middleware: ['auth', 'seller'],
  data() {
    return {
      input: {
        name: '',
        type_id: 1,
      },
      startup: null,
      startupTypes: [],
      queries: [],
    }
  },
  async mounted() {
    await this.fetchQueries()
  },
  methods: {
    async fetchQueries() {
      if (!this.startup) {
        const response = await this.$axios.get('/api/startups/info')
        this.startupTypes = response.data.data.startupTypes
        this.queries = response.data.data.queries.map((query) => ({
          ...query,
          value: '',
        }))
      }
    },
    async saveListing() {
      await this.$axios.post('/api/startups', {
        ...this.input,
        description: this.queries.find((query) => query.label === 'Description')
          .value,
        queries: this.queries,
      })
    },
  },
}
</script>
