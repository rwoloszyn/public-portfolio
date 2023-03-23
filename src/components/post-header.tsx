import Avatar from './avatar'
import Twitter from './twitter'
import LinkedIn from './linkedin'
import Github from './github'
// import DateFormatter from './date-formatter'
import PostTitle from './post-title'
import type Author from '../interface/author'
import type SocialLink from '../interface/social-links'

type Props = {
  title: string
  coverImage: string
  // date: string
  socialLinks: SocialLink
  author: Author
}

const PostHeader = ({ title, socialLinks, author }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-12">
        <Avatar name={author.name} picture={author.picture} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="md:hidden mb-6">
          <Avatar name={author.name} picture={author.picture} />
        </div>
        {/* <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div> */}
      </div>
    </>
  )
}

export default PostHeader