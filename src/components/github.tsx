import Image from 'next/image'

type Props = {
    url: string
  }
  
  const Github = ({ url }: Props) => {
    return (
      <div className="flex items-center mt-5">
        <Image src='/assets/github_logo.png'  width={50} height={50} className="w-12 h-12 rounded-full mr-4" alt={url} />
        <div className="text-xl font-bold">{url}</div>
      </div>
    )
  }
  
  export default Github