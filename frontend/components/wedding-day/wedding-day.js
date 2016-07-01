import "./wedding-day.scss";
import Translate from "react-translate-component";

const WeddingDay = React.createClass({
    render() {
        return (
            <div className="wedding-data row">
                <div className="wedding-data__item col s12 m6">
                    <Translate content="wedding.when.intro" component="h2"/>
                    <Translate content="wedding.when.p1" component="p"/>
                    <Translate content="wedding.when.p2" component="p"/>
                    <Translate content="wedding.when.p3" component="p"/>
                    <Translate content="wedding.when.p4" component="p"/>
                </div>
                <div className="wedding-data__item col s12 m6">
                    <Translate content="wedding.where.intro" component="h2"/>
                    <p>
                        <Translate content="wedding.where.p1"/>
                        <Translate content="wedding.where.p2" component="strong"/>
                    </p>
                    <Translate content="wedding.where.p3" component="p"/>
                    <Translate content="wedding.where.p4" component="p"/>
                </div>
            </div>
        );
    }
});

export default WeddingDay;