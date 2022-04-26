export const postsQuery = `*[_type == "post"]|order(publishedAt desc)  {
		_id,
    publishedAt,
		title,
		description, 
		slug {
			current
		}, 
		mainImage,
		author-> {
			name,
			image
		} 		
	}`

export const singlePostQuery = `*[_type == "post" && slug.current == $slug][0] {
  	_id,
    publishedAt,
  	title,
    description,
  	slug {
			current
		},
  	mainImage,
  	author-> {
			name,
			image
		},
		body
	}`

export const slugs = `*[_type == "post"] {
  	_id,
  	slug {
  		current
		}
	}`
