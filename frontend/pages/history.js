import MyImageGallery from "./../components/image-gallery/image-gallery";

class HistoryPage extends React.Component {
    render() {
        return (
            <div>
                <section>
                    <div className="container">
                        <div>
                            <h6>Наша история</h6>
                        </div>
                            <h2>Пару слов о нас</h2>
                            <p> Если вы смотрите этот сайт - это значит что вы согласились разделить с нами самый важный
                                (пока что) день в нашей жизни. Вы хорошо нас знает, мы любим музыку,
                                путишесвтия и свою работу :)
                                Мы познакомились на концерте, и вот 3,5 года спустя решили создать семью.</p>
                            <p>Мы будем очень рады Вас видеть на нашем торжестве</p>
                    </div>
                </section>
                <MyImageGallery/>
            </div>

        );
    }
}

export default HistoryPage;
