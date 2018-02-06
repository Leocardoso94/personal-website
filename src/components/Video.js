import React from 'react';
import './video.scss';
import videoMP4 from './../videos/video.mp4';
const Video = () => {
	return (
		<video autoPlay loop poster="" className="video" >
			<source src={videoMP4} type="video/mp4" />
		</video>
	);
};

export default Video;
