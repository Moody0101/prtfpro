
const importAll = (r) => {
  let images = {};
  r.keys().map((item, index) => { return images[item.replace('./', '')] = r(item); });
  return images;
}

const isInviewPort = (element) => {

    const rect = element.getBoundingClientRect();

    return (
        rect.top >= -200 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
}
const LoadingAnimation = ({ isVisible = false, width = "50"}) => {

    return (
        <svg className={isVisible ? "loader active_animation" : "loader"}
        viewBox="0 0 120 120" 
        xmlns="http://www.w3.org/2000/svg">
                <circle className="external-circle" cx="60" cy="60" r={width}></circle>
        </svg>
    );
}


const navigate = () => {
    window.scrollTo(0, 0);
}


export { importAll, isInviewPort, navigate, LoadingAnimation };