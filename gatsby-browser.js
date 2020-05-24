export { default as wrapRootElement } from './src/store/ReduxWrapper';


export const onRouteUpdate = ({ location }) => {
  if (location.pathname === '/experience'){
      window.location = '/'
  }
}
