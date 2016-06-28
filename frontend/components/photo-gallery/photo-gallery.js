const GalleryItem = React.createClass({
    render() {
        return (
            <li className={`gallery-item-${this.props.data.id}`}>
                <img src={`${this.props.data.src}`} alt={`/#${this.props.data.alt}`}/>
            </li>
        );
    }
});

class PhotoGallery extends React.Component {
    render() {
        return (
            <ul className="park-gallery">
                {this.props.photos.map((item) => {
                    return <GalleryItem key={item.id} data={item}/>;
                })}
            </ul>

        );
    }
}

export default PhotoGallery;