
import Image from 'next/image';
import Link from 'next/link';
import Fade from 'react-awesome-reveal';
import { sanityClient, urlFor } from '../../sanity';

import { useCallback } from 'react';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadStarsPreset } from "tsparticles-preset-stars";

const Grow = ({posts}) => {
    const particlesInit = useCallback(async (engine: Engine) => {

      await loadStarsPreset(engine);
      // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
      await console.log(container);
    }, []);

    const options = {
      preset: "stars",
      background: {
        "opacity": 0
      }
    };
    return (
      <div className='bg-nightsky'>
      <div className='max-w-screen-2xl mx-auto pt-12 bg-midnight-blue/20 px-8 pb-8'>
        <Particles id="tsparticles" options={options} init={particlesInit} loaded={particlesLoaded} />
        <Fade>
            <div className="z-0 text-center bg-midnight-blue/10 border-cloudy-day rounded-lg border-t-2 mb-4 xl:mb-12 py-10">
                <h1 className="text-center 2xs:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-oxanium-extrabold uppercase italic mb-8 grow ">To acquire knowledge, one <span>must study</span> but to acquire wisdom, one <span>must act on their knowledge</span></h1>
                <p className="text-center  2xs:text-base lg:text-base xl:text-xl 2xl:text-2xl font-oxanium-semibold uppercase italic text-cloudy-day grow">This is the <span>best place in the galaxy</span> for information on <span>how to thrive</span> as a gaming content creator.</p>
            </div>
        </Fade>
        <div className='grid grid-cols-5 grid-rows-1'>
          <div>

          </div>
          <div>
            
          </div>
          <div>
            
          </div>
          <div>
            
            </div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6 bg-midnight-blue/10 border-b-2 border-cloudy-day rounded-lg'>
        <Fade cascade>
        {posts.map((post) => {
          return <Link href={`/grow/${post.slug.current}`} key={post._id} passHref>
            <div className='group cursor-pointer overflow-hidden border rounded-lg relative h-fit '>
              <Image className=' w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out' src={urlFor(post.mainImage).url()!} width={560} height={560} alt='' />
              <div className='flex justify-between px-5 '>
                <div className='absolute 2xs:bottom-2 2xs:left-2 2xl:bottom-2'>
                  <p className='font-bold text-cloudy-day font-oxanium-semibold italic uppercase text-sm pt-8'>{post.title}</p>
                  <p className='text-xs font-dreamscape-text italic'>{post.description}  -  By {post.author.name}</p>
                </div>
                <div className='absolute right-4 top-4'>
                  <Image className='h-12 w-12 rounded-full' src={urlFor(post.author.image).url()!} width={64} height={64} alt="" />
                </div>

              </div>
            </div>
          </Link>
        })}
        </Fade>
      </div>
      </div>
      </div>

      
    )
}

export async function getServerSideProps() {
  const query = `*[_type == 'post']{
    _id,
    title,
    slug,
    author -> {
    name,
    image
  }, 
  mainImage,
  description
  }`

  const posts = await sanityClient.fetch(query)
  return {
    props: { posts }, // will be passed to the page component as props
  }
}


export default Grow