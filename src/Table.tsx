import schulferien from './schulferien.json'
import * as d3 from 'd3'

interface Holiday {
    holiday_type: string;
    start: string;
    end: string;
}

let firstDateOfYear = new Date(2023, 0, 1)
    let lastDateOfYear = new Date(2023, 11, 31)
    let dateToPercentage = d3
        .scaleTime()
        .domain([+firstDateOfYear, +lastDateOfYear])
        .range([0, 100])

function BipBop(holiday: Holiday){
    let startDate = +new Date(holiday.start)
    let endDate = +new Date(holiday.end)

    let left = dateToPercentage(startDate)
    let width = dateToPercentage(+firstDateOfYear + endDate -startDate)
    
    return (
        <div className='absolute h-10 bg-orange-500' style={{
            left: left + '%',
            width: width + '%'
        }}></div>
    )
}

export default function Table(){

    

    return (
        <div className="grid grid-cols-[5rem_auto]">
            {Object.entries(schulferien['2023']).map(([key, holidays]) =>{
                return (
                    <>
                    <div>{key}</div>
                    <div>
                        {holidays.map(h => (
                            BipBop(h)
                            // <div className="absolute" style={{left:  + '%'}}>oof</div>
                        ))}
                    </div>
                    </>
                )
            })}
        </div>
    )
}