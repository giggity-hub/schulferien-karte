import * as d3 from 'd3'
import bundeslaender from './bundeslaender.json'

export default function HolidayMap(){

    let width = 800
    let height = 900
    console.log(bundeslaender);
    
    let projection = d3.geoMercator().fitSize([width, height], bundeslaender)
    let geoGenerator = d3.geoPath(projection)
    

    return (
        <svg viewBox={`0 0 ${width} ${height}`} className="h-full mx-auto">
            {bundeslaender.features.map(x => {
                return <path stroke="green" fill="white" d={geoGenerator(x)}></path>
            })}
        </svg>
    )
}