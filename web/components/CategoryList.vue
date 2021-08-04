<template>
  <div>
    <template v-for="(category, index) in categories">
      <v-divider v-if="!!parents.length&&!index"></v-divider>
      <v-list-group
        v-if="category.children.length>0"
        :key="category.name"
        :value="false"
        :group="category.name"
        :ripple="false"
        :sub-group="!!parents.length"
        prepend-icon
      >
        <template v-slot:activator>
          <v-list-item-content @click.prevent.stop="changeCategory(category)">
            <v-list-item-title
              :class="[!!parents.length?`pl-${parents.length*3}`:'']"
              v-text="category.name"
            ></v-list-item-title>
          </v-list-item-content>
        </template>
        <template v-if="!!parents.length" v-slot:appendIcon>
          <v-icon v-text="'mdi-chevron-down'"></v-icon>
        </template>
        <category-list
          :categories="category.children"
          :parents="[...parents, {index, ...category}]"
        ></category-list>
      </v-list-group>
      <v-list-item
        v-else
        inactive
        :key="category.name"
        :ripple="false"
        color="#d33266"
        class="pointer"
        :input-value="category.id == cat_id"
        @click.prevent.stop="changeCategory(category)"
      >
        <v-list-item-title
          :class="[1,2].includes(parents.length) ? 'pl-5' :`pl-${parents.length*3-4}`"
          v-text="category.name"
        ></v-list-item-title>
      </v-list-item>
      <v-divider v-if="index !== categories.length - 1"></v-divider>
    </template>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'CategoryList',
  props: {
    categories: {
      type: Array,
      required: true
    },
    parents: {
      type: Array,
      required: true
    }
  },
  computed: {
    ...mapState(['categoryList']),
    cat_id() {
      return this.$route.query.categoryId || 0
    }
  },
  methods: {
    changeCategory(category) {
      this.$store.commit('set_data', { key: 'categoryList', val: this.parents })
      this.$store.commit('set_data', { key: 'currentCategory', val: category })
      this.$router.push({ path: `/ballet/details/${category.id}`, query: { currentPage: 1, pageSize: 4 } })
    }
  }
}
</script>

<style lang="scss" scoped>
.list-item--active {
  color: $c-primary;
}
</style>
