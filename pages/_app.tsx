/* eslint @typescript-eslint/explicit-module-boundary-types: 0 */
/* eslint react/react-in-jsx-scope: 0 */

import "styles/global-styles.scss";

const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
