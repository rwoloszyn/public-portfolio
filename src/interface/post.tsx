import type Author from './author'

type PostType = {
  slug: string
  title: string
  date: string
  coverImage: string
  author: Author
  excerpt: string
  content: string
  socialLinks: {
    twitter: string
    linkedin: string
    github: string
  }
}

export default PostType