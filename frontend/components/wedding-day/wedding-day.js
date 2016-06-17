import './wedding-day.scss';

const WeddingDay = React.createClass({
    render() {
        return (
            <div className="wedding-data">
                <div className="wedding-data__item">
                    <h2>Когда</h2>
                    <p> 6 августа, суббота, 2016 </p>
                    <p> Приветсвенный фуршет в 15:30</p>
                    <p> Церемония в 16:00</p>
                    <p> Торжество в 17:00 </p>
                </div>
                <div className="wedding-data__item">
                    <h2>Где</h2>
                    <p>Ресторанно-гостиничный комплекс <strong>Трипольское Солнце</strong></p>
                    <p>Киевская обл., с. Подгорцы, напротив Голубого озера (10 км от Киева)</p>
                    <p>Украина</p>
                </div>
            </div>
        );
    }
});

export default WeddingDay;