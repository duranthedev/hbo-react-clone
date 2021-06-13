const JustAdded = (props) => {
    const loopComp =(comp, digit) => {
        let thumbnails = [];
        for(let index = 0; index < digit; index++){
            thumbnails.push(comp)
        }
        return thumbnails;
    }
    return (
        <div className="just-added">
            <h3 className="just-added__title">Just Added</h3>
            <div className="just-added__thumbnails">
            
            {loopComp(
                <div className="just-added__thumbnail">
                <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/d1pklzbuyaab0la-1552597012.jpg?crop=0.977xw:0.661xh;0.0226xw,0.0625xh&resize=980:*" alt="" />
                <div className="just-added__top-layer">
                    <i className="fas fa-play"/>
                </div>
            </div>, 10 

            )}
            </div>
        </div>
    )
}
export default JustAdded;