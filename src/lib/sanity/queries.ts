import { defineQuery } from 'next-sanity'

export const PROFILE_QUERY = defineQuery(`*[_type == "profile"][0]{_id, title, firstName}`)
