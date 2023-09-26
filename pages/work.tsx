import Image from 'next/image'
import twitterIcon from "../public/twitter-icon.svg";
import fermatMock from "../public/fermat-mock.png"

export default function Portfolio() {
    return <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}>


        <div>
            <Image style={{ maxWidth: "100%", height: "100%" }} src={fermatMock} alt="fermat mock" />
            <p>text</p>
        </div>
        <div>
            <Image style={{ maxWidth: "100%", height: "100%" }} src={fermatMock} alt="fermat mock" />
            <p>text</p>
        </div>
        <div>
            <Image style={{ maxWidth: "100%", height: "100%" }} src={fermatMock} alt="fermat mock" />
            <p>text</p>
        </div>
        <div>
            <Image style={{ maxWidth: "100%", height: "100%" }} src={fermatMock} alt="fermat mock" />
            <p>text</p>
        </div>
        <div>
            <Image style={{ maxWidth: "100%", height: "100%" }} src={fermatMock} alt="fermat mock" />
            <p>text</p>
        </div>
        <div>
            <Image style={{ maxWidth: "100%", height: "100%" }} src={fermatMock} alt="fermat mock" />
            <p>text</p>
        </div>
        <div>
            <Image style={{ maxWidth: "100%", height: "100%" }} src={fermatMock} alt="fermat mock" />
            <p>text</p>
        </div>
        <div>
            <Image style={{ maxWidth: "100%", height: "100%" }} src={fermatMock} alt="fermat mock" />
            <p>text</p>
        </div>



        {/* <div>
            <h1>Portfolio item 1</h1>
            <Image src={fermatMock} alt="fermat mock" />
        </div> */}

    </div>
}


// items to add
// fermat
// ecommerce app
// nyc supper club
//random quote generator
// amalthea