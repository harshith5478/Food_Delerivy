const Content= (prop) =>(
        <div className="data">
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ prop.data.info.cloudinaryImageId} ></img>
            <h3>{prop.data.info.name}</h3>
            <h4>{prop.data.info.locality}</h4>
            <h4>{prop.data.info.cuisines.join(", ")}</h4>
            <h4>{prop.data.info.avgRating}</h4>
        </div>
)
export default Content;