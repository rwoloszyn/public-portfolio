import LinkedIn from '@/interface/linkedin'
import Image from 'next/image'

type Props = {
    url: LinkedIn
  }
  
  const LinkedInBadge = ({ url }: Props) => {
    return (
      <div className="flex items-center mt-5">
        <Image src='/assets/linked_in_logo.png' width={50} height={50} className="w-12 h-12 rounded-full mr-4" alt={url as any} />
        <div className="text-xl font-bold">{url as any}</div>
      </div>
    )
  }
  
  export default LinkedInBadge