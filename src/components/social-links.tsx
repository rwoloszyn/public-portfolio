import Avatar from './avatar'
import Twitter from './twitter'
import LinkedIn from './linkedin'
import Github from './github'
// import DateFormatter from './date-formatter'
import PostTitle from './post-title'
import type Author from '../interface/author'
import type SocialLink from '../interface/social-links'

type Props = {
  links: SocialLink
}

const SocialLinks = ({ links}: Props) => {
  return (
    <>
      <div className="max-w-2xl mx-auto">
        { links.github && <Github url={links.github}/>}
        { links.linkedin && <LinkedIn url={links.linkedin}/>}
        { links.twitter && <Twitter url={links.twitter}/>}
      </div>
    </>
  )
}

export default SocialLinks