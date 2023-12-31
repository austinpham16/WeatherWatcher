import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from "react-accessible-accordion";
import './forecast.css'
const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const Forecast = ({ data }) => {
    const dayInAWeek = new Date().getDay();
    const forcastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));
    console.log(forcastDays);
    return (
        <>
            <Accordion allowZeroExpanded>
                {data.list.splice(0, 7).map((item, idx) => (
                    <AccordionItem key={idx}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className="daily-item">
                                    <img alt="weather" className="icon-small" src={`icons/${item.weather[0].icon.slice(0,2)+"d"}.png`} />
                                    <label className="day">{forcastDays[idx]}</label>
                                    <label className="description">{item.weather[0].description}</label>
                                    <label className="min-max">{Math.round(item.main.temp)}°C</label>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading >
                        <AccordionItemPanel>
                            <div className="daily-details-grid">
                                <div className="daily-details-grid-item">
                                    <label>Feels like: </label>
                                    <label>{Math.round(item.main.feels_like)}°C </label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Wind speed: </label>
                                    <label>{item.wind.speed} m/s</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Pressure: </label>
                                    <label>{item.main.pressure} hPa</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Humidity: </label>
                                    <label>{item.main.humidity}%</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Clouds: </label>
                                    <label>{item.clouds.all}%</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Chance of rain: </label>
                                    <label>{Math.round(item.pop*100)}%</label>
                                </div>

                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </>
    )
}

export default Forecast;