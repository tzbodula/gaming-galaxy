import { GetStaticProps } from 'next';
import Image from 'next/image';
import { useState } from 'react';
import PortableText from 'react-portable-text';
import { sanityClient, urlFor } from '../../../sanity';
import { Post } from '../../../typings';

import { SubmitHandler, useForm } from 'react-hook-form';

import { useCallback } from 'react';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadStarsPreset } from "tsparticles-preset-stars";


interface iForm {
    _id: string;
    name: string;
    email: string;
    comment: string;
}

interface Props {
    post: Post;
    readTimeInMinutes: string;
}
const Grow = ({ post, readTimeInMinutes }: Props) => {
    const { register, handleSubmit, formState: { errors } } = useForm<iForm>()
    const [submitted, setsubmitted] = useState(false)
    const onSubmit: SubmitHandler<iForm> = (data) => {

        fetch('/api/createComment', {
            method: 'POST',
            body: JSON.stringify(data)
        }).then(() => {
            setsubmitted(true)
        }).catch((err) => {
            console.log(err);
            setsubmitted(false)
        })
    }

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
        <>
            <Particles id="tsparticles" options={options} init={particlesInit} loaded={particlesLoaded} className="xs:hidden xl:block" />
            <article className='mx-auto p-4 bg-nightsky text-center'>
                <div className='2xs:w-3/4 lg:w-1/2 mx-auto text-left '>
                    <h1 className='2xs:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl mt-10 mb-3 text-cloudy-day  font-oxanium-extrabold uppercase italic'>{post.title}</h1>
                    <h2 className='font-light 2xs:text-sm lg:text-base xl:text-lg 2xl:text-xl mb-2 text-sunset-red !font-oxanium-semibold uppercase italic'>{post.description}</h2>
                    <div className='flex items-center space-x-2'>
                        <Image className='h-10 w-10 rounded-full' src={urlFor(post.author.image).url()!} alt={post.author.name} width={64} height={64} />
                        <p className='font-oxanium-semibold italic uppercase  text-sm'>Blog post by <span className='text-sunset-red'>{post.author.name}</span> - published at {new Date(post._createdAt).toLocaleString()}</p>
                    </div>
                    <p className='font-oxanium-semibold italic uppercase  text-sm py-4'>Read Time: {readTimeInMinutes}</p>
                    <div className='mt-10'>
                        <PortableText
                            dataset='production'
                            projectId='l2ts99o'
                            content={post.body}
                            serializers={{
                                h1: (props: any) => (
                                    <h1 className='text-2xl font-oxanium-semibold my-5' {...props} />
                                ),
                                normal: (props: any) => (
                                    <p className='!2xs:text-base lg:text-lg xl:text-xl my-5 leading-loose text-cloudy-day' {...props} />
                                ),
                                h2: (props: any) => (
                                    <h2 className='text-xl font-oxanium-semibold my-5' {...props} />
                                ),
                                li: ({ children }: any) => (
                                    <li className='ml-4 list-disc'>{children}</li>
                                )
                            }}
                        />
                    </div>
                </div>
            </article>


            <div className='bg-nightsky'>


                {submitted ? (
                    <div className='flex flex-col max-w-2xl mx-auto py-10 mt-10 bg-sunset-red text-white'>
                        <h3 className='text-3xl font-bold'>Thanks for submitting your comment!</h3>
                        <p>Once it has been approved, it will be shown below!</p>
                    </div>

                ) : (
                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col max-w-2xl mx-auto mb-10 p-5'>
                        <h3 className='text-sm text-sunset-red font-oxanium-semibold uppercase italic'>Enjoyed This Article?</h3>
                        <h4 className='text-3xl uppercase font-oxanium-extrabold italic'>Leave a comment below!</h4>
                        <hr className='py-3 mt-2' />

                        <input {...register("_id")} type="hidden" name='_id' value={post._id} />

                        <label htmlFor="" className='block mb-5'>
                            <span className='text-cloudy-day font-oxanium-semibold uppercase italic'>Name</span>
                            <input {...register("name", { required: true })} type="text" className='shadow rounded py-2 px-3 form-input mt-1 block w-full bg-transparent border-2 border-sunset-red text-cloudy-day font-oxanium-semibold uppercase italic text-sm ring-yellow-500 outline-none focus:ring'
                                placeholder='John Doe' />
                        </label>
                        <label htmlFor="" className='block mb-5'>
                            <span className='text-cloudy-day font-oxanium-semibold uppercase italic'>Email</span>
                            <input {...register("email", { required: true })} type="email" className='shadow bg-transparent border-2 border-sunset-red text-cloudy-day font-oxanium-semibold uppercase italic text-sm rounded py-2 px-3 form-input mt-1 block w-full ring-yellow-500 outline-none focus:ring'
                                placeholder='JohnDoe@domain.com' />
                        </label>
                        <label htmlFor="" className='block mb-5'>
                            <span className='text-cloudy-day font-oxanium-semibold uppercase italic'>Comment</span>
                            <textarea {...register("comment", { required: true })} className='shadow bg-transparent border-2 border-sunset-red text-cloudy-day font-oxanium-semibold uppercase italic text-sm rounded py-2 px-3 form-input mt-1 block w-full ring-yellow-500 outline-none focus:ring'
                                placeholder='John Doe' rows={8} />
                        </label>

                        {/* validation errors */}
                        <div className='flex flex-col p-5'>
                            {errors.name && (
                                <span className='text-sunset-red font-oxanium-semibold uppercase italic'>- The Name field is required</span>
                            )}
                            {errors.email && (
                                <span className='text-sunset-red font-oxanium-semibold uppercase italic'>- The Email field is required</span>
                            )}
                            {errors.comment && (
                                <span className='text-sunset-red font-oxanium-semibold uppercase italic'>- The Comment field is required</span>
                            )}
                        </div>

                        <input type="submit" className='shadow bg-transparent border-2 border-sunset-red hover:bg-sunset-red transition-all text-cloudy-day font-oxanium-semibold uppercase italic focus:shadow-outline focus:outline-none font-bold px-4 py-2 rounded cursor-pointer' />
                    </form>
                )}

                {/* comments */}
                <div className='flex flex-col p-10 mt-10 max-w-2xl mx-auto shadow shadow-sunset-red space-y-2'>
                    <h3 className='text-4xl font-oxanium-extrabold uppercase italic'>Comments</h3>
                    <hr className='pb-2' />
                    {post.comments && post.comments.map(Comment => {
                        return <div key={Comment._id}>
                            <p><span className='text-sunset-red'>{Comment.name}</span>: {Comment.comment}</p>
                        </div>
                    })}
                </div>
            </div>
        </>
    )
}
export async function getStaticPaths() {
    const query =
        `*[_type == 'post']{
        _id,
        slug  {
        current
      }
      }`;
    const posts = await sanityClient.fetch(query);

    const paths = posts.map((post: Post) => ({
        params: {
            slug: post.slug.current
        }
    }))
    return {
        paths,
        fallback: 'blocking' // false or 'blocking'
    };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const query = `
    *[_type == 'post' && slug.current == $slug][0]{
        _id,
        _createdAt,
        title,
        slug,
        author -> {
        name,
        image
      }, 
      'comments': *[
        _type == 'comment' &&
        post._ref == ^._id &&
        approved == true
      ],
      mainImage,
      description,
      body
      }
    `
    const wordCountQuery = `
    *[
        _type == "post" && slug.current == $slug][0]{
        title,
        "numberOfCharacters": length(pt::text(body)),
        // assumes 5 characters as mean word length
        // https://ux.stackexchange.com/questions/22520/how-long-does-it-take-to-read-x-number-of-characters
        "estimatedWordCount": round(length(pt::text(body)) / 5),
        // Words per minute: 180
        "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180 )
      }
    `

    const post = await sanityClient.fetch(query, {
        slug: params?.slug,
    })

    const readTime = await sanityClient.fetch(wordCountQuery, {
        slug: params?.slug
    })

    const readTimeInMinutes = readTime.estimatedReadingTime + " Minutes"

    if (!post) {
        return {
            notFound: true
        }
    }
    return {
        props: {
            post,
            readTimeInMinutes
        },
        revalidate: 60,
    }
}

export default Grow