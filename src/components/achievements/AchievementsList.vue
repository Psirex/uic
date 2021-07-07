<template>
  <ul>
    <!-- <AchievementsListItem v-for="(achieve, index) in achievements" :key="index" :achieve="achieve" /> -->
    <AchievementsListItem v-for="(achieve, index) in achievementsLang" :key="index" :achieve="achieve" />
  </ul>
</template>

<script>
import AchievementsListItem from './AchievementsListItem'

export default {
  name: 'AchivementsList',
  props: ['achievements'],
  components: {AchievementsListItem},

  data() {
    return {

    }
  },

  computed: {
    achievementsLang() {
      return this.$t("message.achievements.items")
    }
  },

  mounted() {
  }
}
</script>

<style scoped lang="scss">

</style>
