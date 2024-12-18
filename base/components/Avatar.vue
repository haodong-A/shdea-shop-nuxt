<script setup lang="ts">
import { useUserStore } from '~/composables/user'

const { userInfo } = useUserStore()

const showDialog = ref(false)

const form = ref({
  username: '',
  password: '',
  email: '',
  code: '',
})
function handleSubmit() {

}
</script>

<template>
  <div>
    <div v-if="userInfo.username" cursor-pointer>
      <el-avatar :src="userInfo.avatar" />
    </div>
    <el-button type="primary" round @click="showDialog = true">
      Sign In
    </el-button>

    <el-dialog v-model="showDialog" center >
      <template #header>
        <div w-full text-center text-xl>
          Sign In
        </div>
      </template>

      <el-form :model="form" label-width="auto">
        <el-form-item label="Username" required>
          <el-input v-model="form.username" placeholder="Please enter your username" />
        </el-form-item>
        <el-form-item label="Password" required>
          <el-input v-model="form.password"  placeholder="Please enter your password" />
        </el-form-item>
      </el-form>
      <el-form-item>
        <el-button type="primary" @click="handleSubmit">Sign</el-button>
        <el-button>Cancel</el-button>
      </el-form-item>
    </el-dialog>
  </div>
</template>
