<template>
  <NavigationLayout :back="true">
    <h1>Aсhievements</h1>
    <Switcher :menuNames='menuNames'/>
    <AchievementsList :achievements="achievements" />
  </NavigationLayout>
</template>

<script>
import NavigationLayout from '@/layouts/NavigationLayout'
import Switcher from '@/components/CoursesSwitcher'
import AchievementsList from '@/components/achievements/AchievementsList'

export default {
  components: {
    NavigationLayout,
    Switcher,
    AchievementsList
  },

  data () {
    return {
      menuNames: [
        {name: 'Badges', active: true},
        {name: 'Leaderboard'}
        ]
    }
  }

}
</script>

<style scoped lang="scss">
ul {
  margin-top: 40px;
}
</style>
