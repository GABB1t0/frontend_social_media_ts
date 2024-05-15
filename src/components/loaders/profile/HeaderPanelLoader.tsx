import ContentLoader from "react-content-loader"

const HeaderPanelLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={340}
    height={40}
    viewBox="0 0 340 40"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="3" ry="3" width="90" height="20" /> 
    <rect x="200" y="0" rx="3" ry="3" width="140" height="20" /> 
  </ContentLoader>
)

export default HeaderPanelLoader