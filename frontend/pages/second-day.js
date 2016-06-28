import PhotoGallery from '../components/photo-gallery/photo-gallery';

class secondDayPage extends React.Component {
    constructor() {
        super();
        this.state = {
            photos: [{
                id: 1,
                src: require("../images/park.jpg"),
                alt: "Открытая территория парка"
            }, {
                id: 2,
                src: require("../images/barbecue.jpg"),
                alt: "Барбекю"
            }, {
                id: 3,
                src: require("../images/x-park.jpg"),
                alt: "Веревочный парк"
            }, {
                id: 4,
                src: require("../images/volleyball.jpg"),
                alt:"Воллейбольная площадка"
            }, {
                id: 5,
                src: require("../images/beach.jpg"),
                alt: "Пляж"
            }]
        };
    }

    render() {
        return (
            <section>
                <div className="container">
                    <div>
                        <h6>Второй день</h6>
                    </div>
                    <h2>Что мы будем делать на второй день?</h2>
                    <p>В воскресенье, 07.09.2016, далеко от нас не разьежайтесь. Мы всех приглашаем присоеденитсяь к
                        нам в продолжении торжества на природе. Мы выбрали открытое активное место.
                        Это городсокой парк, расположеный на острове между правым и левым берегом Днепра.
                        Парк расчитан как для
                        отдыха на пляже или в беседка, так и для активного отдыха. Водные лижы,
                        веревочный парк, воллейбол и конечно же барбекю не позволит нам заскучать после насыщенного
                        первого дня.
                    </p>
                    <PhotoGallery photos={this.state.photos}/>
                </div>
            </section>
        );
    }
}

export default secondDayPage;