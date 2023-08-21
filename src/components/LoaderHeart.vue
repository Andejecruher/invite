<template>
  <div class="loader-container">
    <div class="heart">
      <div class="heart-inner"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoaderHeart",
};
</script>

<style scoped>
.loader-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.heart{
  --size: 35px;
  --color: #bd945a;
  transform:rotate(45deg);
  animation:beat 0.5s infinite alternate ease-in-out;
}
@keyframes beat{
  to{
    transform: rotate(45deg) scale(1.15);
  }
}

.heart,
.heart::before,
.heart::after{
    width: var(--size);
    height: var(--size);
    background:var(--color);
}
.heart::before,
.heart::after{
  content:'';
  display: block;
  border-radius:50%;
}
.heart::before{
  margin-top: calc(var(--size)*-.5);
 
}
.heart::after{
  margin-top: calc(var(--size)* -0.5);
  margin-left: calc(var(--size)* -0.5);
}

</style>
