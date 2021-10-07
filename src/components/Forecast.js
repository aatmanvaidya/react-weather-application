import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardMeta } from 'semantic-ui-react';
import moment from 'moment';

export default function Forecast({ forecast }) {
    return (
        <div style={{ marginTop: 20 }}>
            <Card.Group itemsPerRow={4}>
                {forecast.map((data) => {
                    return (
                        <Card className="forecast-card">
                            <CardContent>
                            <CardHeader className="forecast-date">Date: {moment.unix(data.dt).format('LL')}</CardHeader>
                                <CardHeader className="forecast-header">Temperature: {Math.round(((data.temp.max + data.temp.min) / 2 - 273))} ℃</CardHeader>
                                <CardMeta className="forecast-header">Humidity: {data.humidity}%</CardMeta>
                                <CardDescription className="temp-desc">
                                    {data.weather[0].description}
                                </CardDescription>
                            </CardContent>
                        </Card>
                    )
                })}
            </Card.Group>
        </div>
    )
}
