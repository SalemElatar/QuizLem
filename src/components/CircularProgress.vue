<template>
  <!-- <div
    class="RadialProgress"
 role="progressbar"
    aria-valuenow="25"
    aria-valuemin="0"
    aria-valuemax="100"
  ></div>

  <input type="range" value="25" min="0" max="100" /> -->

  <div class="bar">
    <input class="bar-input" type="radio" name="input" id="input_0" />
    <div class="bar-view">
      <label class="bar-button" for="input_0"></label>
    </div>
    <input class="bar-input" type="radio" name="input" id="input_1" />
    <div class="bar-view">
      <label class="bar-button" for="input_1"></label>
    </div>
    <input class="bar-input" type="radio" name="input" id="input_2" />
    <div class="bar-view">
      <label class="bar-button" for="input_2"></label>
    </div>
    <input class="bar-input" type="radio" name="input" id="input_3" />
    <div class="bar-view">
      <label class="bar-button" for="input_3"></label>
    </div>
    <input class="bar-input" type="radio" name="input" id="input_4" />
    <div class="bar-view">
      <label class="bar-button" for="input_4"></label>
    </div>
  </div>
  <div class="command">click on any one of the options</div>
</template>
<!-- 
<script>
const controller = document.querySelector("input[type=range]");
const radialProgress = document.querySelector(".RadialProgress");

const setProgress = (progress) => {
  const value = `${progress}%`;
  radialProgress.style.setProperty("--progress", value);
  radialProgress.innerHTML = value;
  radialProgress.setAttribute("aria-valuenow", value);
};

setProgress(controller.value);
controller.oninput = () => {
  setProgress(controller.value);
};
</script>

<style>
.RadialProgress {
  --hue: 220;
  --holesize: 65%;
  --track-bg: hsl(233 34% 92%);

          block-size: 50vmin;
  inline-size: 50vmin;
  min-inline-size: 100px;
  min-block-size: 100px;
  display: grid;
  place-items: center;
  position: relative;
  font-weight: 700;
  font-size: max(10vmin, 1.4rem);
}

.RadialProgress::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 50%;
  z-index: -1;
  background: conic-gradient(
    hsl(var(--hue) 100% 70%),
    hsl(var(--hue) 100% 40%),
    hsl(var(--hue) 100% 70%) var(--progress, 0%),
    var(--track-bg) var(--progress, 0%) 100%
  );

  mask-image: radial-gradient(
    transparent var(--holesize),
    black calc(var(--holesize) + 0.5px)
  );
}






















$elSet: 5
$elCount: $elSet * 2
$orange: #FE9000
$orange-light: #FFB732
$yellow: #FFDD4A
$blue-light: #5ADBFF
$blue: #3C6997
$bounce: cubic-bezier(0, 0, 0, 1.97)
$smooth: cubic-bezier(0, 0.72, 0.58, 1)

.bar
	display: flex
	flex-direction: row-reverse
	margin: auto auto 0
	width: 300px
	max-width: calc(100% - 30px)

	&-input
		opacity: 0
		pointer-events: none
		position: absolute
		top: -9999px
		left: -9999px
	
		&:checked
			~ .bar-view
					@for $n from 1 through $elCount
						$r: $elCount - $n + 1
						@if $r % 2 == 0
							&:nth-child(#{$r})
								&:after
									transition-delay: 0.1s * ($n / 2 - 1)
								.bar-button:before
									transition-delay: 0.1s * ($n / 2 - 1) + 0.06s
								
					&:after
						transform: scaleX(1)
					.bar-button:before
						transform: none
						opacity: 1
			
			+ .bar-view
					.bar-button:after
						opacity: 1
						animation: bouncing 0.6s cubic-bezier(0, 0, 0.74, 1.04) infinite
	
	&-view
		display: flex
		flex-grow: 1
		position: relative
	
		&:after
			height: 2px
			top: calc(50% - 1px)
			transition: transform 0.06s $smooth
			transform: scaleX(0)
			background: $orange-light
			transform-origin: left
			z-index: 1
	
		&:not(:last-child)
			&:before,
			&:after
				content: ''
				width: calc(100% - 24px)
				position: absolute
				right: calc(50% + 12px)

			&:before
				height: 6px
				top: calc(50% - 3px)
				background: $blue
	
			@for $n from 1 through $elCount
				@if $n % 2 == 0
					&:nth-child(#{$n})
						&:after
							transition-delay: 0.1s * ($n / 2 - 1)
						.bar-button:before
							transition-delay: 0.1s * ($n / 2 - 1) + 0.06s
	
	&-button
		display: block
		width: 30px
		height: 30px
		margin: auto
		border-radius: 50%
		border: 3px solid $blue
		position: relative
		cursor: pointer
		box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.3), 2px 2px 8px rgba(0, 0, 0, 0.1)
	
		&:hover:after
			transform: none
			opacity: 1
	
		&:before,
		&:after
			content: ''
			position: absolute
			pointer-events: none
	
		&:before
			width: 100%
			height: 100%
			border-radius: 50%
			background: radial-gradient(circle at center, $yellow, $orange)	
			transform: scale(0.3)
			opacity: 0
			transition:
				property: transform, opacity
				duration: 0.2s
				timing-function: $smooth
		
		&:after
			border: 8px solid transparent
			border-top-color: $blue-light
			bottom: calc(100% + 10px)
			left: calc(50% - 8px)
			transform: translateY(-10px)
			opacity: 0
			transition:
				property: transform, opacity
				duration: 0.2s
				timing-function: $bounce

.command
	font-family: 'Ubuntu Mono', monospace
	letter-spacing: 1px
	margin: 30px auto auto
	animation: fade 1s ease infinite

html, body
	width: 100%
	height: 100%
	display: flex
	flex-direction: column
	background: linear-gradient(to bottom right, transparentize($yellow, 0.9), #fff)

*
	box-sizing: border-box
	&:before, &:after
		box-sizing: inherit

@keyframes bouncing
	0%, 100%
		transform: translateY(0)
	50%
		transform: translateY(5px)

@keyframes fade
	50%
		opacity: 0.3




</style> -->
