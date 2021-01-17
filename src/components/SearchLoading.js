import loadGif from "../assets/images/load.gif";

const SearchLoading = () => {
    return(
        <div className="searchContainer">
            <img src={loadGif} alt="Loading" />
        </div>
    )
}

export default SearchLoading