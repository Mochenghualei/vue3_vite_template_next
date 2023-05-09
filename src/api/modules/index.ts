import service from '../request'

export const testApi = () => {
  return service.get(`/getData`)
}
