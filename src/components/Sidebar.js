import React from 'react'

function Sidebar({ topAnime }) {
	return (
		<aside>
			<nav>
				<h3>Top Anime List</h3>
				{topAnime.map(anime => (
					<a 
						href={anime.url} 
						target="_blank"
						key={anime.mal_id} 
						rel="noreferrer">
						{ anime.title }
						<img 
      src={anime.image_url}
      alt="new"
      />
					</a>
				))}
			</nav>
		</aside>
	)
}

export default Sidebar
