<template>
  <div>

    <CRow>
      <CCol lg="12" class="m-auto">
        <CTableButtons />
      </CCol>
    </CRow>

    <CRow>
      <CCol lg="12" class="m-auto">
        <CTableModals />
      </CCol>
    </CRow>

  </div>
</template>

<script>
import CTableModals from './Table_modal.vue'
import usersData from '../users/UsersData'

export default {
  name: 'Tables_1',
  components: { CTableModals },
  methods: {
    shuffleArray (array) {
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))
        let temp = array[i]
        array[i] = array[j]
        array[j] = temp
      }
      return array
    },

    getShuffledUsersData () {
      return this.shuffleArray(usersData.slice(0))
    }
  }
}
</script>
