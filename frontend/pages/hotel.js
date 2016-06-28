import PhotoGallery from '../components/photo-gallery/photo-gallery';

class HotelPage extends React.Component {
    constructor() {
        super();
        this.state = {
            photos: [{
                id: 1,
                src: require("../images/hotel.jpg"),
                alt: "Полулюкс"
            }, {
                id: 2,
                src: require("../images/hotel2.jpg"),
                alt: "Стандарный номер"
            }]
        };
    }

    render() {
        return (
            <section id="hotel">
                <div className="container">
                    <div>
                        <h6>Поселение</h6>
                    </div>
                    <h2>Где будут распологаться гости?</h2>
                    <p>
                        Для всех гостей мы забронировали номера в отеле, который находится на терриртории комплекса.
                        Комнаты расчитаны на двух человек. Мы надеемся что вы сможете не только разделить с нами
                        праздничный день, но также и хороошенько отдохнуть после длительных переездов, даже есди вы будете
                        ехать с Киева, 20 минут не шутка :) В комнатах будет все необходимое чтоб отдохнуть и собраться к
                        торжеству.
                    </p>

                    <p>Если Вы приезжаете рано утром, не переживайте, Ваш номер будет Вас ждать с завтраком и душем,
                    главное обязательно дайте нам знать когда приезжает Ваш поезд, чтоб мы были уверены что все номера
                        забронировали на правильное время</p>
                    <PhotoGallery photos={this.state.photos}/>
                </div>
            </section>
        );
    }
}

export default HotelPage;