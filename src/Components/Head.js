import React from 'react'

function Head({ title }) {
	return (
		<div className='w-full bg-deepGray lg:h-64 h-40 relative overflow-hidden rounded-md'>
			<img
				src='https://assets.nflxext.com/ffe/siteui/vlv3/a43711df-c428-4f88-8bb3-b2ac5f20608f/349c6b2e-3939-4298-899c-267ed4bb6824/KG-ru-20230227-popsignuptwoweeks-perspective_alpha_website_large.jpg'
				alt='aboutus'
				className='w-full h-full object-cover'
			/>
			<div className='absolute lg:top-24 top-16 w-full flex-colo'>
				<h1 className='text-2xl lg:text-h1 text-white text-center font-bold'>
					{title && title}
				</h1>
			</div>
		</div>
	)
}

export default Head
