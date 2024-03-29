// get pages generated by vite-plugin-pages
import type { RouteRecordRaw } from 'vue-router'
import routes from '~pages'

function sortByPathFirst(arr: RouteRecordRaw[]): RouteRecordRaw[] {
  const index: number = arr.findIndex(item => item.path === '/')
  if (index !== -1) {
    const left = arr.splice(index, 1)
    arr.unshift(left[0])
  }
  const aboutIndex: number = arr.findIndex(item => item.path === '/about')
  if (aboutIndex !== -1) {
    const [object] = arr.splice(aboutIndex, 1)
    arr.push(object)
  }
  return arr
}

export const usePageRoutes = (): RouteRecordRaw[] => {
  return sortByPathFirst(routes)
}

export const pageRoutes: RouteRecordRaw[] = usePageRoutes()
