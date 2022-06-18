import Lottie from 'lottie-react'
import homeAnimation from '../styles/lottie/27637-welcome.json'
const Home = ({ loading }) => {
    if (!loading)
        return (
            <div>
                <div className='welcome'>
                    Start searching above!
                    <div className='lottie'>
                        <Lottie animationData={homeAnimation} loop={true} />
                    </div>
                </div>
            </div>
        )
}

export default Home