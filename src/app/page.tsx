import { Inter } from 'next/font/google'
import Layout from '@/components/layout'
import Container from '@/components/container'
import { getAllPosts } from '@/lib/api'
import type { Metadata } from 'next'
import PostHeader from '@/components/post-header'
import PostBody from '@/components/post-body'
import Intro from '@/components/intro'
import jsPDF from 'jspdf';
// import { useRef } from 'react';
import ReportTemplate from '@/components/report-template'
import markdownToHtml from '@/lib/markdownToHtml'
import SocialLinks from '@/components/social-links'

export const metadata: Metadata = {
  title: 'CV - Rafal Woloszyn',
  description: 'Ciricalum Vitae dynamic page of Rafal Woloszyn endevours and life targets.',
};


//https://beta.nextjs.org/docs/data-fetching/caching
export default async function Index() {
  // const reportTemplateRef = useRef(null)
  const posts = await getPosts()
  const heroPost = posts[0]

  const content = await markdownToHtml(heroPost.content || '')



  // const handleGeneratePdf = () => {
  //   const doc = new jsPDF({
  //     format: 'a4',
  //     unit: 'px',
  //   });
  
  //   // Adding the fonts.
  //   doc.setFont('Inter-Regular', 'normal');
  
  //   doc.html(reportTemplateRef.current, {
  //     async callback(doc) {
  //       await doc.save('document');
  //     },
  //   });
  // };


  return (
    <>
      <Layout>
        <Container>
        <Intro />
          <article className="mb-32">
                <PostHeader
                  title={heroPost.title}
                  socialLinks={heroPost.socialLinks}
                  date={heroPost.date}
                  author={heroPost.author}
                />
                <PostBody content={content}/>
                <SocialLinks links={heroPost.socialLinks}/>
          </article>
          {/* <div ref={reportTemplateRef}>
				    <ReportTemplate />
			    </div> */}
        </Container>
      </Layout>
    </>
  )
}


export async function getPosts() {
  return getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'socialLinks',
    'excerpt',
    'content'
  ])
}