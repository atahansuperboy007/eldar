import CubickItem from './CubickItem'
import threecub from '../ThreeCub.json'

function ThreeCub() {
    return (
        <div className="cubick-list">
            {
            threecub.map((item) => (
            <CubickItem data={item}/>
            ))
        }
        </div>
    )
}

export default ThreeCub;