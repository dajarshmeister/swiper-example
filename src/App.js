// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';

import { useEffect, useState } from 'react';
import SlideNextButton from './components/SlideNextButton';

const App = () => {
	const [images, setImages] = useState();
	useEffect(() => {
		const getData = async () => {
			const response = await fetch('https://picsum.photos/v2/list');
			const images = await response.json();
			setImages(images);
		};
		getData();
	}, [setImages]);

	return (
		<div className='container my-5'>
			<Swiper
				modules={[EffectFade, Autoplay]}
				spaceBetween={50}
				slidesPerView={1}
				autoplay={{ delay: 5000 }}
				effect='fade'
			>
				{images &&
					images.map(item => {
						return (
							<SwiperSlide>
								<div className='row'>
									<div className='col-md-4 p-4 bg-white'>
										<h3>{item.author}</h3>
										<p>Lorem ipsum dolor sit amet.</p>
									</div>
									<div className='col-md-8'>
										<img
											className='img-fluid'
											style={{
												height: '400px',
												width: '600px',
												objectFit: 'cover',
											}}
											src={item.download_url}
										/>
									</div>
								</div>
							</SwiperSlide>
						);
					})}
				<SlideNextButton />
			</Swiper>
		</div>
	);
};

export default App;
