<template>
  <div style="background: rgba(0, 40, 77, 1)" class="c-app flex-row align-items-center">
    <CContainer>
      <CRow class="justify-content-center">
        <CCol md="5">
          <CCardGroup style="background: #0a5198!important;">
            <CCard class="p-4">
              <CCardBody>
                <CForm>
                  <h1 class="text-center">无人值守场站管理平台</h1>
                  <CInput
                    placeholder="Username"
                    autocomplete="username email"
                  >
                    <template #prepend-content><CIcon name="cil-user"/></template>
                  </CInput>
                  <CInput
                    placeholder="Password"
                    type="password"
                    autocomplete="curent-password"
                  >
                    <template #prepend-content><CIcon name="cil-lock-locked"/></template>
                  </CInput>
                  <CRow>
                    <CCol style="display: flex; padding: 0">
                      <CButton color="link" class="text-left"><input type="checkbox" />记住我的登录状态</CButton>
                      <CButton color="link" style="margin-left: auto">忘记密码？</CButton>
                    </CCol>
                  </CRow>
                  <CRow>
                    <CCol col="12" class="text-center">
                      <a href="/#/dashboard">
                        <CButton color="primary" class="px-4">登录</CButton>
                      </a>
                    </CCol>
                  </CRow>
                </CForm>
              </CCardBody>
            </CCard>
          </CCardGroup>
        </CCol>
      </CRow>
    </CContainer>
  </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>
