<template>
  <CRow>
    <CCol md="12" lg="7">
      <CCard>
        <CCardBody>
          <CCarousel
            arrows
            indicators
            animate
            height="400px"
          >
            <CCarouselItem
              captionHeader="First Slide"
              image="https://picsum.photos/1024/480/?image=52"
              captionText="Nulla vitae elit libero, a pharetra augue mollis interdum."
            />
            <CCarouselItem
              captionHeader="Blank page"
              :image="{ placeholderColor: 'grey' }"
              captionText="Nulla vitae elit libero, a pharetra augue mollis interdum."
            />
            <CCarouselItem
            image="https://picsum.photos/1024/480/?image=54"
            />
          </CCarousel>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
export default {
  name: 'Carousels'
}
</script>
