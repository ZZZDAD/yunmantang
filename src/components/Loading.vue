<template>
  <div>
    <div class="loader circle-line small">
    	<span></span>
    	<span></span>
    	<span></span>
    	<span></span>
    	<span></span>
    	<span></span>
    	<span></span>
    	<span></span>
    </div>
  </div>
</template>

<script>
export default {
	data () {
		return {

		}
	}
}
</script>

<style lang="scss">
@keyframes circle-line {
  0% {
    opacity: 0.3;
    width: 0.3rem;
    height: 0.3rem;
  }
  100% {
    opacity: 0.8;
  }
}
.loader {
  position: relative;
  width: 5rem;
  height: 5rem;
  &.circle-line span {
    position: absolute;
    display: inline-block;
    width: 0.8rem;
    height: 0.8rem;
    border-top-left-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
    background: #1abc9c;
    animation: circle-line 1s ease infinite;
    &:nth-child(1) {
      top: 50%;
      left: 0;
      margin-top: -0.25rem;
      animation-delay: 0.13s;
    }
    &:nth-child(2) {
      top: 1rem;
      left: 0.5rem;
      transform: rotate(45deg);
      animation-delay: 0.26s;
    }
    &:nth-child(3) {
      top: 0.5rem;
      left: 50%;
      margin-left: -0.75rem;
      transform: rotate(90deg);
      animation-delay: 0.39s;
    }
    &:nth-child(4) {
      top: 1rem;
      right: 1.5rem;
      transform: rotate(145deg);
      animation-delay: 0.52s;
    }
    &:nth-child(5) {
      top: 50%;
      left: 3.5rem;
      margin-top: -0.25rem;
      transform: rotate(180deg);
      animation-delay: 0.65s;
    }
    &:nth-child(6) {
      bottom: 1rem;
      right: 1.5rem;
      transform: rotate(-145deg);
      animation-delay: 0.78s;
    }
    &:nth-child(7) {
      bottom: 0.5rem;
      left: 50%;
      margin-left: -15px;
      transform: rotate(-90deg);
      animation-delay: 0.91s;
    }
    &:nth-child(8) {
      bottom: 1rem;
      left: 0.5rem;
      transform: rotate(-45deg);
      animation-delay: 1.04s;
    }
  }
}
</style>
