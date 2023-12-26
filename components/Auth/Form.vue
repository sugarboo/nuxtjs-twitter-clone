<template>
  <div>
    <div class="space-y-6 pt-5">
      <UIInput
        v-model="form.username"
        label="Username"
        placeholder="@username"
      />
      <UIInput
        v-model="form.password"
        type="password"
        label="Password"
        placeholder="******"
      />
      <div>
        <button @click="handleLogin">
          Login
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const form = reactive({
  username: '',
  password: '',
})

const loading = ref(false)

async function handleLogin() {
  const { login } = useAuth()
  loading.value = true
  const { username, password } = form
  try {
    await login({
      username,
      password,
    })
  }
  catch (error) {

  }
  finally {
    loading.value = false
  }
}
</script>
