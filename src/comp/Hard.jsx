import CubickItem from './CubickItem'
import hard from '../HardCub.json'

function HardCub() {
    return (
        <div className="cubick-list">
            {
            hard.map((item) => (
            <CubickItem data={item}/>
            ))
        }
        </div>
    )
}

export default HardCub;