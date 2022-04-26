import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { createClient, createCurrentUserHook } from 'next-sanity'
import createImageUrlBuilder from '@sanity/image-url'
import config from './config'

export const sanityClient = createClient(config)

export const urlFor = (source: SanityImageSource) =>
	createImageUrlBuilder(config).image(source)

export const useCurrentUser = createCurrentUserHook(config)
