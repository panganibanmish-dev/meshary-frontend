<template>
  <div>
    <label :for="id" class="mb-3">
      {{ name }}
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
    <input
      v-if="type === 'string' || type === 'float'"
      :id="id"
      v-model="content"
      :name="name"
      type="text"
      class="form-control"
      :maxlength="type === 'float' ? '12' : ''"
      :style="{ background: color }"
      required
      @input="handleInput(null)"
    />
    <input
      v-if="type === 'int'"
      :id="id"
      v-model="content"
      :name="name"
      type="number"
      class="form-control"
      maxlength="6"
      required
      @input="handleInput(null)"
    />
    <input
      v-if="type === 'date'"
      :id="id"
      v-model="content"
      :name="name"
      type="date"
      class="form-control"
      required
      @input="handleInput(null)"
    />
    <textarea
      v-else-if="type === 'text'"
      :id="id"
      v-model="content"
      :name="name"
      class="form-control"
      rows="3"
      required
      @input="handleInput(null)"
    />
    <textarea
      v-else-if="type === 'array'"
      :id="id"
      v-model="content"
      :name="name"
      class="form-control"
      rows="4"
      cols="6"
      required
      @input="handleInput(null)"
    />
    <div v-else-if="type === 'boolean'" class="d-flex mb-3 ml-3">
      <div class="mr-3">
        <input
          :id="name + '-true'"
          v-model="content"
          type="radio"
          :name="name"
          value="true"
          class="form-check-input"
          @click="handleInput('true')"
        />
        <label class="form-check-label" :for="name + '-true'">Yes</label>
      </div>
      <div class="ml-3">
        <input
          :id="name + '-false'"
          v-model="content"
          type="radio"
          :name="name"
          value="false"
          class="form-check-input"
          @click="handleInput('false')"
        />
        <label class="form-check-label" :for="name + '-false'">No</label>
      </div>
    </div>
    <br />
  </div>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: 'string',
    },
    id: {
      type: Number || String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: false,
      default: 'string',
      value: () => '#ffffff',
    },
  },
  data() {
    return {
      content: this.$attrs.value,
    }
  },
  watch: {
    content(newValue) {
      this.sanitizeFloat(newValue)
    },
  },
  mounted() {
    this.sanitizeFloat(this.content)
  },
  methods: {
    sanitizeFloat(value) {
      if (this.type === 'float') {
        if (value !== null) {
          const result = value
            .replace(/\D/g, '')
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
          this.$nextTick(() => {
            this.content = result
          })
        }
        // const result = value.replace(/\D/g, "")
        //   .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        // this.$nextTick(() => {this.content = result});
      }
    },
    handleInput(value = null) {
      if (value) {
        this.$emit('input', value)
      } else {
        this.$emit('input', this.content)
      }
    },
  },
}
</script>
