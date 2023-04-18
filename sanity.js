import {
    createCurrentUserHook,
    createClient
} from 'next-sanity'
import createImageUrlBuilder from '@sanity/image-url'


export const config = {

    dataset: 'production',
    projectId: 'll2ts99o',
    apiVersion : '2021-03-25',
    useCdn: true
};

export const sanityClient = createClient(config);

export const urlFor = (source) => createImageUrlBuilder(config).image(source);

export const useCurrentUser = createCurrentUserHook(config);