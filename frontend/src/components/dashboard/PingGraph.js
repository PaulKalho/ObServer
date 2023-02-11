import React from "react"
import {LineChart, Line, Tooltip, XAxis, YAxis} from 'recharts'

function PingGraph () {
    const data = [{name: 'Montag', uv: 100}, {name: 'Dienstag', uv: 100}, {name: 'Mittwoch', uv: 0}, {name: 'Donnerstag', uv: 100}];
    return (
        <div>
            <LineChart className="-ml-11" width={385} height={240} data={data}>
                <Line type="monotone" dataKey="uv" stroke="#0f0" />
                {/* {/* <CartesianGrid stroke="#ccc" /> */}
                <XAxis dataKey="name" stroke="white"/>
                <YAxis stroke="white"/>
            </LineChart>
        </div>
    )
};

export default PingGraph;
