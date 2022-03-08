// some-inner-component.jsx
import { React } from 'react';
import { useSwiper } from 'swiper/react';

export default function SlideNextButton() {
	const swiper = useSwiper();

	return (
		<button className='btn btn-primary' onClick={() => swiper.slideNext()}>
			Slide to the next slide
		</button>
	);
}
