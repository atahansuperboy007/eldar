import CubickItem from './CubickItem'
import twocub from '../TwoCub.json'

function TwoCub() {
    return (
        <div className="cubick-list">
            {
            twocub.map((item) => (
            <CubickItem data={item}/>
            ))
        }
        </div>
    )
}

export default TwoCub;