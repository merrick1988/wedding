import {Parallax} from "react-parallax";

class LocationPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: require('./../images/location.jpg')
        };
    }

    render() {
        return (
            <Parallax bgImage={this.state.image} strength={400} className="react-parallax--blur">
                <section id="location" className="section--image">
                    <h6>Как добраться</h6>
                    <div className="container">
                        <h2>Для гостей из Киева </h2>
                        <p> Гостей, которые будут ехать к нам из Киева, будет ждать автобус в 15:00 на станции метро
                            Выдубичи.
                        Он без остановок довезет Вас до места торжества к назначенному времени</p>
                    </div>

                    <div className="container">
                        <h2>Для гостей из других городов</h2>
                        <p>Гостей, которые будет ехать к нам на поезде, будет ждать автобус по прибытию на центральный
                            дж вокзал
                            "Київ-Пасажирський". Время, в которое автобус будет отправляться с вокзала, будет зависеть
                            от расписания поездов,
                            поэтоу обязательно сообщите нам пожалуйста когда будете знать Ваше время пибытия
                            в Киев :)</p>
                    </div>

                    <div className="container">
                        <h2>Для гостей на своем транспорте</h2>
                        <p>Для гостей, кто будет ехать к нам на своем автомобиле, на территории комплекса предусмотрена
                            бесплатная парковка с видеонаблюдением
                        </p>
                    </div>
                </section>
            </Parallax>
        );
    }
}

export default LocationPage;