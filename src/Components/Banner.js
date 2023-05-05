import React from 'react'

function Banner() {
	return (
		<div class="w-full mx-auto bg-black justify-center border-b border-white">
			<div class="flex w-full flex-col lg:flex-row lg:items-center lg:justify-between max-w-7xl mx-auto px-8 py-2">
				<div class="flex items-center flex-row justify-between text-white">
					<a href="/" class="group block flex-shrink-0">
						<div class="flex items-center">
							<div class="ml-3">
								<p class="italic font-medium text-white group-hover:text-gray-300">
									ümovie
								</p>
							</div>
						</div>
					</a>
				</div>
			</div>
		</div>
	);
}

export default Banner;