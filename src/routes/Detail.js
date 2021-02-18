import React from "react";
import "./Detail.css";

class Detail extends React.Component{
    componentDidMount() {
        const { location, history  } = this.props;
    if(location.state === undefined){
        history.push("/")
    }
    }
    render() {
        const {location} = this.props;
        if (location.state) {
            return (
                <div className="container">
                    <div className="wrapper">
                    <h2>{location.state.title}</h2>
                        <div className="other_info">
                                <span>{location.state.genres.map((value, index) => {
                                    return <span className="genre_list" key={index}>{value} </span>
                                })
                                }</span>
                            <span> / </span>
                            <span>{location.state.year}</span>
                        </div>
                        <div className="info">
                            <img src={location.state.poster} />
                            <div className="sum">{location.state.summary}</div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }
}

export default Detail;