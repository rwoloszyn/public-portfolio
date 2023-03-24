import TwitterBadge from './twitter'
import LinkedInBadge from './linkedin'
import GithubBagde from './github'
import type SocialLinks from '../interface/social-links'

type Props = {
  links: SocialLinks
}

const SocialLinks = ({ links } : Props ) => {
  return (
    <>
      <div className="max-w-2xl mx-auto">
        { links.github && <GithubBagde url={links.github}/>}
        { links.linkedin && <LinkedInBadge url={links.linkedin}/>}
        { links.twitter && <TwitterBadge url={links.twitter}/>}
      </div>
    </>
  )
}

export default SocialLinks