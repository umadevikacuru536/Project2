import './App.css'

function BannerCardItem() {

    return (

        <div className='coniter'>
            <div className='card1'>
                <h1 className="cardheading">The Seasons Latest</h1>
                <p className="carddescription">Get the seasons all latest designs in a flick of your hand</p>
                <button className="reusablebutton" type="button">
                    Show More
                </button>
            </div>
            <div className='card2'>
                <h1 className="cardheading">Our New Designs</h1>
                <p className="carddescription">Get the designs developed by our in-house team all for yourself</p>
                <button className="reusablebutton" type="button">
                    Show More
                </button>
            </div>
            <div className='card3'>
                <h1 className="cardheading">Insiders</h1>
                <p className="carddescription">Get yhe top class productes for yourself with an extra off</p>
                <button className="reusablebutton" type="button">
                    Show More
                </button>
            </div>
        </div>

    )
}

export default BannerCardItem