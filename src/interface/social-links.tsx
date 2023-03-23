import type Github from './github'
import type LinkedIn from './linkedin'
import type Twitter from './twitter'

type SocialLinks = {
    github: Github
    linkedin: LinkedIn
    twitter: Twitter
}

export default SocialLinks