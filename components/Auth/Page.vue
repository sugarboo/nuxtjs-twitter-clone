<template>
  <div class="flex h-screen">
    <div class="relative flex-1 hidden w-0 lg:block">
      <img
        src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
        alt="background"
        class="absolute w-full h-full inset-0 object-cover"
      >
    </div>
    <div class="flex flex-col flex-1 justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
      <div class="flex items-center w-full h-full max-w-sm mx-auto lg:w-96">
        <AuthForm />
      </div>
    </div>
  </div>
</template>
