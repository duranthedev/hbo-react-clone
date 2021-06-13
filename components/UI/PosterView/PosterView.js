const PosterView = (props) => {
    const loopComp =(comp, digit) => {
        let thumbnails = [];
        for(let index = 0; index < digit; index++){
            thumbnails.push(comp)
        }
        return thumbnails;
    }
    return (
        <div className="poster-view">
            <h3 className="poster-view__title">Movies</h3>
            <div className="poster-view__thumbnails">
            
            {loopComp(
                <div className="poster-view__thumbnail">
                <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/d1pklzbuyaab0la-1552597012.jpg?crop=0.977xw:0.661xh;0.0226xw,0.0625xh&resize=980:*" alt="" />
                <div className="poster-view__top-layer">
                    <i className="fas fa-play"/>
                </div>
            </div>, 10 

            )}
            </div>
        </div>
    )
}
export default PosterView;