<template>
	<transition name="slide-fade">
		<div class="sync">
			<h1>1title3453</h1>
			<div>jjjjjjjjj</div>
			<div>jjjjjjjjj</div>
			<div>jjjjjjjjj</div>
			<div>jjjjjjjjj</div>
			<div>jjjjjjjjj</div>
		</div>
	</transition>
</template>


<script>
	export default {
		name:"sync"
	}
</script>

<style>

.sync{
	background-color: red;
}

/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-leave-active {
  /* transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0); */
}
.slide-fade-enter, .slide-fade-leave-active {
  transform: translateX(10px);
  opacity: 0;
}
</style>