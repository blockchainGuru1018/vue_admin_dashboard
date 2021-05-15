<template>
  <div>
    <CRow>
      <CCol lg="6">
        <CTableWrapper :items="getShuffledUsersData()">
          <template #header>
            <CIcon name="cil-grid"/> Simple Table
          </template>
        </CTableWrapper>
      </CCol>

      <CCol lg="6">
        <CTableWrapper
          :items="getShuffledUsersData()"
          striped
          caption="Striped Table"
        />
      </CCol>
    </CRow>

<!--    <CRow>-->
<!--      <CCol lg="10" class="m-auto">-->
<!--        <CTableButtons />-->
<!--      </CCol>-->
<!--    </CRow>-->

<!--    <CRow>-->
<!--      <CCol lg="8" class="m-auto">-->
<!--        <CTableModals />-->
<!--      </CCol>-->
<!--    </CRow>-->

    <CRow>
      <CCol sm="12">
        <CTableWrapper
          :items="getShuffledUsersData()"
          hover
          striped
          border
          small
          fixed
          caption="Combined All Table"
        />
      </CCol>
    </CRow>

    <CRow>
      <CCol sm="12">
        <CTableWrapper
          :items="getShuffledUsersData()"
          hover
          striped
          border
          small
          fixed
          dark
          caption="Combined All dark Table"
        />
      </CCol>
    </CRow>
  </div>
</template>

<script>
import CTableWrapper from './Table.vue'
import usersData from '../users/UsersData'

export default {
  name: 'Tables',
  components: { CTableWrapper },
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
