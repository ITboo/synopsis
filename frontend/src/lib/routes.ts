const getRouteParams = <T extends Record<string, boolean>>(object: T) => {
    return Object.keys(object).reduce((acc, key) => ({ ...acc, [key]: `:${key}` }), {}) as Record<keyof T, string>
  }
  
  export const getAllItemsRoute = () => '/'
  
  export const viewItemRouteParams = getRouteParams({ itemId: true })
  export type ViewItemRouteParams = typeof viewItemRouteParams
  export const getViewItemRoute = ({ itemId }: ViewItemRouteParams) => `/items/${itemId}`
  