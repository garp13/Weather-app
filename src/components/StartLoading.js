import loadGif from "../assets/images/load.gif";



const startLoading = (props) => {
    
    return (
        <div className="startLoading">
            <img src={loadGif} alt="Loading" />
        </div>
    );
}

export default startLoading;