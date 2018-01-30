import fetch from '@/utils/fetch'

export function postRelease (params) {
  return fetch({
    url: '/release',
    method: 'post',
    params
  })
}

export function getUser (params) {
  return fetch({
    url: '/user',
    method: 'get'
  })
}