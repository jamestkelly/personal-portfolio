const TRANSITION_MS = 300;

export interface TiltSettings {
  scale?: number,
  max?: number,
  reverse?: boolean,
}

function getSettings(settings: TiltSettings = {}) {
  return { scale: 1, max: 15, reverse: false, ...settings};
}

export default function Tilt(node: any, settingsObj: TiltSettings) {
  const { width, height, left, top } = node?.getBoundingClientRect();
  let settings = getSettings(settingsObj);
  let reverse = settings.reverse ? -1 : 1;
  let transitionId: number | undefined;

  function onMouseMove(e: any) {
    const percX = (e.clientX - left) / width;
    const percY = (e.clientY - top) / height;
    const { max, scale } = settings;
    const tiltX = max - percX * (2 * max);
    const tiltY = percY * (2 * max) - max;

    node.style.transform = `perspective(${1000}px) `+
    `rotateX(${reverse * tiltY}deg) ` +
    `rotateY(${reverse * tiltX}deg) ` +
    `scale3d(${Array(3).fill(scale).join(', ')})`;
  }

  function smoothTransition() {
		clearTimeout(transitionId);
		node.style.willChange = 'transform';
		node.style.transition = `${TRANSITION_MS}ms`;
		transitionId = setTimeout(() => node.style.transition = '0s', TRANSITION_MS);
	}

  function onMouseLeave() {
		smoothTransition();
		node.style.transform = `perspective(${1000}px) `+
      `rotateX(0deg) ` +
      `rotateY(0deg) ` +
      `scale3d(1, 1, 1)`;
	}
	
	function onMouseEnter() {
		smoothTransition();
		node.style.willChange = "transform";
	}
	
	node.addEventListener('mousemove', onMouseMove);
	node.addEventListener('mouseleave', onMouseLeave);
	node.addEventListener('mouseenter', onMouseEnter);
	
	return {
		destroy() {
			node.removeEventListener('mousemove', onMouseMove);
			node.removeEventListener('mouseleave', onMouseLeave);
			node.removeEventListener('mouseleave', onMouseEnter);
		},
		update(settingsObj: TiltSettings) {
			settings = getSettings(settingsObj);
			reverse = settings.reverse ? -1 : 1;
		}
	}
}