import Page from '@/components/page'
import Section from '@/components/section'

const Misc = () => (
	<Page>
		<Section>
			<h2 className='text-xl font-semibold'>Misc</h2>

			<div className='mt-2'>
				<p className='text-zinc-600 dark:text-zinc-400'>
					Here is some trivia about me. When I was 10 we lived in New Jersey. My mother was in the process of becoming a contestant on the $20,000 Pyramid.She was taken aside and asked if she wanted to appear on the $20,000 Junior Pyramid. From October 1 to November 9, 1979, the series briefly became Junior Partner Pyramid, which scrapped the usual celebrity-contestant pairings in favor of children playing the game with a parent or other adult relative.

					If you’re curious what TV was like in 1979 then be all means watch the [episode](https://vimeo.com/26595314) the password is pa$$word. Oh and I lost the game.

					![Game show title](/public/images/Pyramid-title.jpg)

					![Contract](/public/images/contract-6.jpg)

					![Me and Mom](/public/images/Me-Mom-2.jpg)
				</p>
			</div>
		</Section>

		<Section>
			<h3 className='font-medium'>Thanks to</h3>

			<ul className='list-disc space-y-2 px-6 py-2'>
				<li className='text-sm text-zinc-600 dark:text-zinc-400'>
					<a href='https://unsplash.com' className='underline'>
						Unsplash
					</a>{' '}
					for high quality images
				</li>

				<li className='text-sm text-zinc-600 dark:text-zinc-400'>
					<a href='https://teenyicons.com' className='underline'>
						Teenyicons
					</a>{' '}
					for lovely icons
				</li>
			</ul>
		</Section>
	</Page>
)

export default Misc
